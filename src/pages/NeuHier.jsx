import { Link } from "preact-router/match";
import FaqList from "../FaqList.jsx";
import { newcomerConcerns } from "../newcomerConcerns.js";
import { runs } from "../runs.js";
import { useDocumentTitle } from "../useDocumentTitle.js";

const runSteps = [
  "Zur angegebenen Uhrzeit am Treffpunkt sein — einfach kommen, ohne Anmeldung.",
  "Kurzes Hallo: Wir zeigen dir die Gruppe(n) und sagen dir kurz, was auf der Strecke auf dich zukommt.",
  "Gemeinsames Warm-up und Auflockern — kurz in Bewegung kommen, dann geht's los.",
  "Wir laufen locker. Brauchst du eine Pause? Sag Bescheid — kein Drama.",
  "Unterwegs ist alles entspannt: Reden, lachen oder einfach laufen. Niemand muss um jeden Preis mithalten.",
  "Am Ende könnt ihr noch kurz zusammenbleiben — oder du gehst einfach, wenn du willst.",
  "Beim Samstags-Long Run landen wir meist an einem Café — wer Lust hat, hängt danach noch ein bisschen.",
];

const bringItems = [
  "Laufschuhe, in denen du dich wohlfühlst",
  "Klamotten fürs Wetter (am besten in Schichten)",
  "Optional: kleine Trinkflasche — Pausen sind immer möglich",
  "Gute Laune — mehr brauchst du wirklich nicht",
];

const notRequired = [
  "Schnell zu sein oder eine feste Pace zu halten",
  "Strava, teure Ausrüstung oder Wettkampf-Erfahrung",
  "Anmeldung, Mitgliedschaft oder jemanden, den du schon kennst",
  "Die ganze Strecke durchzuziehen — Pausen und langsamer werden sind völlig okay",
  "Alles schon zu wissen — wir erklären es dir vor Ort",
];

export default function NeuHier() {
  useDocumentTitle("Neu hier?");

  return (
    <main className="container legal-page new-here-page">
      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>

      <section className="card card-new-here-intro">
        <p className="new-here-eyebrow">Neu hier?</p>
        <h1>Zum ersten Mal dabei?</h1>
        <p className="legal-meta new-here-lead">
          Hier findest du alles Wichtige für deinen ersten Lauf — klar, ehrlich
          und ohne Druck. Keine Anmeldung nötig.
        </p>
      </section>

      <section className="card">
        <h2>So läuft ein Run ab</h2>
        <p>
          Unsere Läufe sind entspannt und immer ähnlich — du musst nur
          pünktlich da sein, den Rest machen wir gemeinsam.
        </p>
        <ol className="new-here-steps">
          {runSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="card">
        <h2>Wo wir uns treffen</h2>
        <p>Zwei feste Termine pro Woche — nimm einfach den, der dir passt.</p>
        <div className="new-here-meetings">
          {runs.map((run) => (
            <article key={run.id} className="new-here-meeting">
              <h3>{run.title}</h3>
              <p className="new-here-meeting-day">{run.day}</p>
              <p>{run.meetingPoint}</p>
              <p className="new-here-meeting-meta">
                {run.distance}
                {run.groups
                  ? ` · ${run.groups.map((g) => g.time).join(" & ")}`
                  : ` · ${run.pace}`}
              </p>
              {run.afterRun ? (
                <p className="new-here-meeting-after">{run.afterRun}</p>
              ) : null}
              <a
                className="map-link"
                href={run.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                🗺️ In Google Maps öffnen
              </a>
            </article>
          ))}
        </div>
        <p className="new-here-inline-link">
          <Link href="/#laeufe">Karten & Details auf der Startseite →</Link>
        </p>
      </section>

      <section className="card">
        <h2>Was du mitbringen solltest</h2>
        <ul className="new-here-list">
          {bringItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="new-here-aside">
          Dein Hund darf mit — gut sozialisiert und an der Leine. Achte nur darauf,
          dass er die Gruppe nicht stört.
        </p>
      </section>

      <section className="card">
        <h2>Was du nicht können musst</h2>
        <ul className="new-here-list new-here-list-positive">
          {notRequired.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="card">
        <h2>Was viele sich vor dem ersten Run fragen</h2>
        <p className="new-here-section-intro">
          Ehrlich beantwortet — ohne Beschönigung.
        </p>
        <FaqList items={newcomerConcerns} />
      </section>

      <section className="card card-new-here-cta">
        <h2>Bereit für deinen ersten Lauf?</h2>
        <p>
          Schau dir die Termine an und komm einfach vorbei — oder schreib uns
          vorher, wenn du noch Fragen hast.
        </p>
        <div className="new-here-cta-buttons">
          <Link href="/#laeufe" className="button button-lg">
            Termine & Karten
          </Link>
          <Link href="/#kontakt" className="button button-outline button-lg">
            Kontakt
          </Link>
        </div>
        <div className="new-here-cta-after">
          <p>
            Noch mehr Antworten in der{" "}
            <Link href="/faq">FAQ</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
