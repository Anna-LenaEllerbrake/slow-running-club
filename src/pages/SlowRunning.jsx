import { Link } from "preact-router/match";
import PhotoSlot from "../PhotoSlot.jsx";
import { slowRunningPhoto } from "../photos.js";
import { useDocumentTitle } from "../useDocumentTitle.js";

const myths = [
  {
    thought: "„Ich bin zu langsam.“",
    truth:
      "Slow Running heißt nicht zu langsam sein — sondern bewusst langsam laufen. Genau dafür gibt es uns.",
  },
  {
    thought: "„Ich halte die Gruppe auf.“",
    truth:
      "Niemand wird zurückgelassen. Wir passen das Tempo an und machen Pausen — das ist bei uns normal, nicht die Ausnahme.",
  },
  {
    thought: "„Ich bin noch Anfänger:in.“",
    truth:
      "Perfekt. Slow Running ist für den Einstieg gemacht — nicht für Bestzeiten.",
  },
];

const whoItsFor = [
  "Du startest gerade mit dem Laufen — oder startest wieder",
  "Du denkst, du bist „zu langsam“ für eine Laufgruppe",
  "Du willst Bewegung ohne Wettkampf- und Leistungsdruck",
  "Du brauchst keine Wettkampf-Erfahrung und keine perfekte Pace",
  "Du suchst Menschen, bei denen Pausen und langsamer werden selbstverständlich sind",
];

const whySlow = [
  {
    title: "Dranbleiben statt ausbrennen",
    text: "Langsames Laufen ist leichter in den Alltag zu integrieren — und genau das zählt langfristig mehr als ein schneller Kilometer.",
  },
  {
    title: "Körper & Kopf",
    text: "Weniger Druck bedeutet oft weniger Verletzungsrisiko — und mehr Spaß. Laufen darf sich gut anfühlen, nicht wie eine Prüfung.",
  },
  {
    title: "Gemeinsam geht's leichter",
    text: "In der Gruppe motiviert man sich gegenseitig — nicht durch Vergleich, sondern durch Zusammensein im gleichen Tempo.",
  },
];

const principles = [
  {
    emoji: "🚶",
    title: "Gehpausen sind okay",
    text: "Laufen und Gehen gehören zusammen. Wer pausieren will, sagt Bescheid — ohne Erklärung, ohne Scham.",
  },
  {
    emoji: "⏱️",
    title: "Keine Mindestpace",
    text: "Es gibt keine Geschwindigkeit, die du mitbringen musst. Unser Tempo ist lang — und passt sich an dich an.",
  },
  {
    emoji: "💪",
    title: "Laufen macht dich sportlich",
    text: "Wer mit uns läuft, ist sportlich — sobald du loslegst, bist du dabei. Du brauchst keinen Leistungssport-Hintergrund, nur Laufschuhe, Klamotten fürs Wetter und Lust.",
  },
  {
    emoji: "🧡",
    title: "Wir lassen niemanden zurück",
    text: "Tempo-Anpassungen und Pausen sind Teil des Konzepts — nicht ein Zeichen, dass du nicht dazugehörst.",
  },
  {
    emoji: "🏁",
    title: "Kein Wettkampf",
    text: "Keine Bestzeiten, kein Ranking, kein Druck. Es geht um Bewegung, die sich nachhaltig gut anfühlt.",
  },
];

export default function SlowRunning() {
  useDocumentTitle("Was ist Slow Running?");

  return (
    <main className="container legal-page manifest-page">
      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>

      <section className="card card-manifest-intro">
        <p className="manifest-eyebrow">Unser Ansatz</p>
        <h1>Was ist Slow Running?</h1>
        <p className="legal-meta manifest-lead">
          Slow Running ist kein Ausrede-Tempo. Es ist eine Haltung: gemeinsam
          laufen, im eigenen Rhythmus — ohne Leistungsdruck, ohne Scham, ohne
          Mindestpace.
        </p>
        <p className="manifest-lead-extra">
          Der Begriff ist noch nicht überall bekannt. Viele denken deshalb, sie
          seien „nicht schnell genug“ für eine Laufgruppe. Bei uns ist das
          Gegenteil der Fall.
        </p>
      </section>

      <PhotoSlot {...slowRunningPhoto} aspect="16 / 9" />

      <section className="card">
        <h2>Das denken viele — und so ist es wirklich</h2>
        <ul className="manifest-myths">
          {myths.map((item) => (
            <li key={item.thought} className="manifest-myth">
              <p className="manifest-myth-thought">{item.thought}</p>
              <p className="manifest-myth-truth">{item.truth}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Wer sich angesprochen fühlen darf</h2>
        <p className="manifest-section-intro">
          Slow Running ist eine Einladung — kein Filter. Wenn du dich in einem
          oder mehreren Punkten wiedererkennst: Du gehörst dazu.
        </p>
        <ul className="manifest-list">
          {whoItsFor.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Warum langsames Laufen sinnvoll ist</h2>
        <div className="manifest-why-grid">
          {whySlow.map((item) => (
            <article key={item.title} className="manifest-why-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card card-manifest-principles">
        <h2>Unsere Werte</h2>
        <p className="manifest-section-intro">
          Nicht nur Worte auf der Website — so läuft jeder Termin in Karlsruhe
          bei uns wirklich ab.
        </p>
        <div className="manifest-principles">
          {principles.map((item) => (
            <article key={item.title} className="manifest-principle">
              <span className="manifest-principle-emoji" aria-hidden="true">
                {item.emoji}
              </span>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Was das bei uns konkret heißt</h2>
        <p>
          Montags und samstags laufen wir in Karlsruhe in festen, langsamen
          Tempos — mit zwei Gruppen am Montag, damit du den Einstieg findest, der
          zu dir passt. Keine Anmeldung, kein Verein, kein Leistungsnachweis.
        </p>
        <p>
          Slow Running ist für uns keine Trend-Bezeichnung. Es ist das, wofür der
          Slow Running Club steht: eine offene Laufgruppe, in der du so laufen
          darfst, wie du bist.
        </p>
      </section>

      <section className="card card-manifest-cta">
        <h2>Lust, es auszuprobieren?</h2>
        <p>
          Komm einfach vorbei — oder lies vorher, wie dein erster Lauf abläuft.
        </p>
        <div className="manifest-cta-buttons">
          <Link href="/#laeufe" className="button button-lg">
            Termine & Karten
          </Link>
          <Link href="/neu-hier" className="button button-outline button-lg">
            Zum ersten Mal dabei?
          </Link>
        </div>
        <div className="manifest-cta-after">
          <p>
            Noch Fragen? Schau in die{" "}
            <Link href="/faq">FAQ</Link> oder{" "}
            <Link href="/#kontakt">schreib uns</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
