import { runs } from "./runs.js";

const SITE_URL = "https://slowrunningclub.de/";
const TIME_ZONE = "Europe/Berlin";

const weekdayNames = {
  1: "Monday",
  2: "Tuesday",
  3: "Wednesday",
  4: "Thursday",
  5: "Friday",
  6: "Saturday",
  7: "Sunday",
};

function pad(n) {
  return String(n).padStart(2, "0");
}

/** Kalenderdatum (Jahr/Monat/Tag) in Berlin für einen gegebenen Zeitpunkt. */
function berlinDateParts(date) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const get = (type) => Number(parts.find((p) => p.type === type).value);
  return { year: get("year"), month: get("month"), day: get("day") };
}

// 12 Uhr UTC liegt für jedes Berliner Kalenderdatum sicher außerhalb der DST-Umstellung (nachts).
function berlinNoonUtc({ year, month, day }) {
  return new Date(Date.UTC(year, month - 1, day, 12));
}

function berlinOffset(date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    timeZoneName: "longOffset",
  }).formatToParts(date);
  const raw = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT+01:00";
  return raw.replace("GMT", "") || "+00:00";
}

function addDays({ year, month, day }, amount) {
  const d = new Date(Date.UTC(year, month - 1, day + amount));
  return { year: d.getUTCFullYear(), month: d.getUTCMonth() + 1, day: d.getUTCDate() };
}

function nextOccurrence(isoWeekday, referenceDate) {
  const today = berlinDateParts(referenceDate);
  const todayWeekday = berlinNoonUtc(today).getUTCDay(); // 0 = Sonntag
  const targetWeekday = isoWeekday % 7; // ISO 7 (Sonntag) -> 0
  const diff = (targetWeekday - todayWeekday + 7) % 7;
  return addDays(today, diff);
}

function formatDate({ year, month, day }) {
  return `${year}-${pad(month)}-${pad(day)}`;
}

function toDateTime(dateParts, time) {
  return `${formatDate(dateParts)}T${time}:00${berlinOffset(berlinNoonUtc(dateParts))}`;
}

function durationBetween(start, end) {
  const [sh, sm] = start.split(":").map(Number);
  const [eh, em] = end.split(":").map(Number);
  const totalMinutes = eh * 60 + em - (sh * 60 + sm);
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;
  return `PT${hours ? `${hours}H` : ""}${minutes ? `${minutes}M` : ""}`;
}

/**
 * Baut SportsEvent-JSON-LD für die kommenden Termine. Das Datum wird bei jedem
 * Seitenaufruf neu aus dem aktuellen Datum berechnet, damit es nie veraltet.
 */
export function buildRunEventSchema(referenceDate = new Date()) {
  return runs.map((run) => {
    const occurrence = nextOccurrence(run.weekday, referenceDate);
    const scheduleEnd = addDays(occurrence, 730); // rollierender 2-Jahres-Horizont

    return {
      "@type": "SportsEvent",
      name: run.title,
      description: `${run.day} — Treffpunkt: ${run.meetingPoint}.`,
      image: `${SITE_URL}logo.png`,
      startDate: toDateTime(occurrence, run.startTime),
      endDate: toDateTime(occurrence, run.endTime),
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      eventSchedule: {
        "@type": "Schedule",
        startDate: formatDate(occurrence),
        endDate: formatDate(scheduleEnd),
        repeatFrequency: "P1W",
        byDay: `https://schema.org/${weekdayNames[run.weekday]}`,
        startTime: `${run.startTime}:00`,
        duration: durationBetween(run.startTime, run.endTime),
      },
      location: {
        "@type": "Place",
        name: run.meetingPoint,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Karlsruhe",
          addressCountry: "DE",
        },
        ...(run.geo
          ? {
              geo: {
                "@type": "GeoCoordinates",
                latitude: run.geo.lat,
                longitude: run.geo.lng,
              },
            }
          : {}),
      },
      organizer: { "@type": "SportsClub", name: "Slow Running Club", url: SITE_URL },
      performer: { "@type": "SportsTeam", name: "Slow Running Club", url: SITE_URL },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: SITE_URL,
        validFrom: formatDate(occurrence),
      },
    };
  });
}
