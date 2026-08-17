const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const mapsEmbed = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=de&z=16&output=embed`;

const mapsEmbedCoords = (lat, lng, zoom = 17) =>
  `https://maps.google.com/maps?q=${lat},${lng}&hl=de&z=${zoom}&output=embed`;

const mondayGeo = { lat: 49.000659, lng: 8.371768 };

export const runs = [
  {
    id: "monday",
    title: "Slow Monday Runs",
    day: "Montags, 18 Uhr & 19 Uhr",
    // ISO-Wochentag (1 = Montag … 7 = Sonntag) und Uhrzeiten fürs JSON-LD-Eventschema, siehe eventSchema.js
    weekday: 1,
    startTime: "18:00",
    endTime: "19:30",
    meetingPoint: "Günther-Klotz-Anlage beim Bootsverleih zwischen den beiden Seen",
    mapsUrl: "https://maps.app.goo.gl/TVjQC77kwpGDuCZE7?g_st=ic",
    mapsEmbedUrl: mapsEmbedCoords(mondayGeo.lat, mondayGeo.lng),
    geo: mondayGeo,
    distance: "3,5 km",
    groups: [
      {
        name: "Easy Pace Group",
        time: "18 Uhr",
        pace: "09:00–09:30 min/km",
      },
      {
        name: "Steady Pace Group",
        time: "19 Uhr",
        pace: "08:00–08:30 min/km",
      },
    ],
  },
  {
    id: "saturday",
    title: "Slow Saturday Long Run",
    day: "Samstags, 10 Uhr",
    weekday: 6,
    startTime: "10:00",
    endTime: "12:00",
    meetingPoint: "Café Nello, Karlsruhe",
    mapsUrl: mapsSearch("Café Nello Karlsruhe"),
    mapsEmbedUrl: mapsEmbed("Café Nello Karlsruhe"),
    distance: "8 km",
    pace: "08:30–09:30 min/km",
    afterRun:
      "Wir landen meist an einem Café — wer Lust hat, bleibt noch zum Quatschen. Gehen direkt danach ist natürlich auch völlig okay.",
  },
];
