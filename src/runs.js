const mapsSearch = (query) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;

const mapsEmbed = (query) =>
  `https://maps.google.com/maps?q=${encodeURIComponent(query)}&hl=de&z=16&output=embed`;

const mapsEmbedCoords = (lat, lng, zoom = 17) =>
  `https://maps.google.com/maps?q=${lat},${lng}&hl=de&z=${zoom}&output=embed`;

export const runs = [
  {
    id: "monday",
    title: "Slow Monday Runs",
    day: "Montags, 18 Uhr & 19 Uhr",
    meetingPoint: "Günther-Klotz-Anlage beim Bootsverleih zwischen den beiden Seen",
    mapsUrl: "https://maps.app.goo.gl/TVjQC77kwpGDuCZE7?g_st=ic",
    mapsEmbedUrl: mapsEmbedCoords(49.000659, 8.371768),
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
    meetingPoint: "Café Nello, Karlsruhe",
    mapsUrl: mapsSearch("Café Nello Karlsruhe"),
    mapsEmbedUrl: mapsEmbed("Café Nello Karlsruhe"),
    distance: "8 km",
    pace: "08:30–09:30 min/km",
    afterRun:
      "Endet in der Regel an einem Café — wer mag, bleibt dort noch zusammen. Du kannst aber auch direkt nach dem Lauf gehen.",
  },
];
