/** @typedef {{ id: string, question: string, answer: string }} FaqItem */

/** @type {FaqItem[]} */
export const faqItems = [
  {
    id: "anmeldung",
    question: "Muss ich mich vorher anmelden?",
    answer:
      "Nein — einfach zum Treffpunkt kommen. Kein Formular, keine Mitgliedschaft. Noch unsicher? Schreib uns vorher gerne auf Instagram oder per Mail.",
  },
  {
    id: "kosten",
    question: "Was kostet die Teilnahme?",
    answer:
      "Gar nichts. Wir sind eine offene Laufgruppe — ohne Beitrag und ohne versteckte Kosten.",
  },
  {
    id: "pace",
    question: "Wie schnell lauft ihr?",
    answer:
      "Bewusst langsam. Montags in zwei Gruppen (ca. 9:00–9:30 und 8:00–8:30 min/km), samstags etwa 8:30–9:30 min/km. Wir passen das Tempo an und machen Pausen, wenn du möchtest — niemand wird abgehängt.",
  },
  {
    id: "strava",
    question: "Brauche ich Strava?",
    answer:
      "Nein. Strava ist praktisch für Updates im Club, aber Instagram reicht völlig — besonders, wenn du gerade erst anfängst.",
  },
  {
    id: "level",
    question: "Für wen ist der Club gedacht?",
    answer:
      "Für alle, die entspannt laufen wollen: Einsteiger:innen, Wiedereinsteiger:innen und alle dazwischen. Du musst kein Profi sein.",
  },
  {
    id: "einmal",
    question: "Kann ich auch nur einmal mitlaufen?",
    answer:
      "Klar! Probier einfach einen Termin aus — wenn's passt, sehen wir uns beim nächsten Mal wieder.",
  },
  {
    id: "wetter",
    question: "Was passiert bei schlechtem Wetter?",
    answer:
      "Bei richtig schlechtem Wetter oder Ausnahmen posten wir auf Instagram (und im Strava Club). Schau kurz vor dem Lauf rein — dann weißt du, ob wir loslegen oder den Termin schieben.",
  },
  {
    id: "mitbringen",
    question: "Was soll ich mitbringen?",
    answer:
      "Laufschuhe, bequeme Klamotten fürs Wetter — und gute Laune. Getränke kannst du vorher oder nachher mitnehmen; unterwegs pausieren wir bei Bedarf.",
  },
  {
    id: "hunde",
    question: "Sind Hunde erlaubt?",
    answer:
      "Ja! Gut sozialisierte Hunde an der Leine sind willkommen. Achte nur darauf, dass dein Hund die anderen nicht stört und du mit der Gruppe mitkommst. Unsicher? Schreib uns vorher kurz auf Instagram.",
  },
  {
    id: "treffpunkt",
    question: "Wo genau ist der Treffpunkt?",
    answer:
      "Montags an der Günther-Klotz-Anlage beim Bootsverleih zwischen den beiden Seen, samstags vor dem Café Nello. Karten und Links findest du auf der Startseite.",
  },
  {
    id: "verein",
    question: "Ist das ein Verein?",
    answer:
      "Nein — wir sind eine lockere Laufcrew in Karlsruhe, kein Verein. Einfach gemeinsam laufen, ohne Papierkram.",
  },
];

/** Fragen, die auf der Startseite als Teaser erscheinen */
export const faqHomePreviewCount = 4;
