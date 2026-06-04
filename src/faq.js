/** @typedef {{ id: string, question: string, answer: string }} FaqItem */

/** @type {FaqItem[]} */
export const faqItems = [
  {
    id: "anmeldung",
    question: "Muss ich mich vorher anmelden?",
    answer:
      "Nein. Du kannst einfach zum Treffpunkt kommen — ohne Anmeldung und ohne Mitgliedschaft. Wenn du unsicher bist, schreib uns vorher gern auf Instagram oder per E-Mail.",
  },
  {
    id: "kosten",
    question: "Was kostet die Teilnahme?",
    answer:
      "Nichts. Der Slow Running Club ist eine offene Laufgruppe — es gibt keinen Beitrag und keine versteckten Gebühren.",
  },
  {
    id: "pace",
    question: "Wie schnell lauft ihr?",
    answer:
      "Bewusst langsam. Montags gibt es zwei Gruppen (ca. 9:00–9:30 und 8:00–8:30 min/km), samstags etwa 8:30–9:30 min/km. Wir passen das Tempo an und machen auf Wunsch Pausen — niemand soll abgehängt werden.",
  },
  {
    id: "strava",
    question: "Brauche ich Strava?",
    answer:
      "Nein. Strava ist optional für Updates im Club — Instagram reicht völlig, besonders wenn du gerade erst anfängst.",
  },
  {
    id: "level",
    question: "Für wen ist der Club gedacht?",
    answer:
      "Für Einsteiger:innen, Wiedereinsteiger:innen und alle, die ohne Leistungsdruck laufen wollen. Du musst kein:e erfahrene:r Läufer:in sein.",
  },
  {
    id: "einmal",
    question: "Kann ich auch nur einmal mitlaufen?",
    answer:
      "Ja, jederzeit. Probier einen Termin aus — wenn es passt, siehst du uns beim nächsten Mal wieder.",
  },
  {
    id: "wetter",
    question: "Was passiert bei schlechtem Wetter?",
    answer:
      "Bei starkem Unwetter oder Ausnahmen informieren wir auf Instagram (und im Strava Club). Schau kurz vor dem Lauf dort nach — dann weißt du, ob wir starten oder den Termin verschieben.",
  },
  {
    id: "mitbringen",
    question: "Was soll ich mitbringen?",
    answer:
      "Laufschuhe, bequeme Kleidung nach Wetter — und gute Laune. Getränke kannst du vor oder nach dem Lauf mitnehmen; unterwegs machen wir bei Bedarf Pausen.",
  },
  {
    id: "hunde",
    question: "Sind Hunde erlaubt?",
    answer:
      "Ja — gut sozialisierte Hunde an der Leine sind willkommen. Bitte achte darauf, dass dein Hund andere Läufer:innen nicht stört und du mit der Gruppe Schritt halten kannst. Bei Unsicherheit schreib uns vorher kurz auf Instagram.",
  },
  {
    id: "treffpunkt",
    question: "Wo genau ist der Treffpunkt?",
    answer:
      "Montags an der Günther-Klotz-Anlage beim Bootsverleih zwischen den beiden Seen, samstags vor dem Café Nello. Auf der Startseite findest du Karten und Links zu Google Maps.",
  },
  {
    id: "verein",
    question: "Ist das ein Verein?",
    answer:
      "Nein — wir sind eine informelle Laufgruppe in Karlsruhe, kein eingetragener Verein. Es geht um gemeinsames, entspanntes Laufen ohne Formalitäten.",
  },
];

/** Fragen, die auf der Startseite als Teaser erscheinen */
export const faqHomePreviewCount = 4;
