import { useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import FaqList from "../FaqList.jsx";
import { newcomerConcerns } from "../newcomerConcerns.js";
import { runs } from "../runs.js";

const runSteps = [
  "Komm zum Treffpunkt zur angegebenen Uhrzeit — einfach vorbeikommen, ohne Anmeldung.",
  "Kurzes Hallo: Wir zeigen dir die Gruppe(n) und erklären kurz Strecke und Tempo.",
  "Gemeinsames Warm-up und Auflockern — kurz in Bewegung kommen, bevor wir loslegen.",
  "Wir laufen in lockerem Tempo. Auf Wunsch machen wir Pausen — sag einfach Bescheid.",
  "Unterwegs ist es entspannt: Gespräche ja, Stille auch okay. Niemand muss mithalten um jeden Preis.",
  "Am Ende optional kurz zusammenstehen — du kannst aber auch einfach gehen, wenn du möchtest.",
  "Beim Samstags-Long Run enden wir in der Regel an einem Café — wer mag, bleibt dort noch zusammen.",
];

const bringItems = [
  "Laufschuhe, in denen du dich wohlfühlst",
  "Kleidung passend zum Wetter (Schichten helfen)",
  "Optional: kleine Trinkflasche — Pausen sind möglich",
  "Gute Laune — mehr brauchst du nicht",
];

const notRequired = [
  "Schnell zu sein oder eine bestimmte Pace zu halten",
  "Strava, teure Ausrüstung oder Wettkampferfahrung",
  "Eine Anmeldung, Mitgliedschaft oder jemanden, den du kennst",
  "Die ganze Strecke durchzulaufen — Pausen und langsamer werden sind okay",
  "Sicher zu sein, wie es genau läuft — wir erklären es vor Ort",
];

export default function NeuHier() {
  useEffect(() => {
    document.title = "Neu hier? | Slow Running Club Karlsruhe";
    return () => {
      document.title =
        "Slow Running Club Karlsruhe | Entspannt laufen in der Gruppe";
    };
  }, []);

  return (
    <main className="container legal-page new-here-page">
      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>

      <section className="card card-new-here-intro">
        <p className="new-here-eyebrow">Neu hier?</p>
        <h1>Zum ersten Mal dabei?</h1>
        <p className="legal-meta new-here-lead">
          Alles Wichtige auf einer Seite — damit du weißt, was dich beim ersten
          Lauf erwartet. Keine Anmeldung, kein Leistungsdruck.
        </p>
      </section>

      <section className="card">
        <h2>So läuft ein Run ab</h2>
        <p>
          Unsere Läufe sind immer gleich entspannt strukturiert — du musst nichts
          vorbereiten außer pünktlich da zu sein.
        </p>
        <ol className="new-here-steps">
          {runSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="card">
        <h2>Wo wir uns treffen</h2>
        <p>Zwei feste Termine pro Woche — wähl einfach den, der dir passt.</p>
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
          <Link href="/#laeufe">Karten und Details auf der Startseite →</Link>
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
          Gut sozialisierte Hunde an der Leine sind willkommen — bitte achte darauf,
          dass dein Hund die Gruppe nicht stört.
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
        <h2>Häufige Sorgen von Neulingen</h2>
        <p className="new-here-section-intro">
          Diese Fragen hören wir oft — die Antworten sind ehrlich und ohne
          Beschönigung.
        </p>
        <FaqList items={newcomerConcerns} />
      </section>

      <section className="card card-new-here-cta">
        <h2>Bereit für den ersten Lauf?</h2>
        <p>
          Schau dir die Termine an, komm einfach vorbei — oder schreib uns vorher,
          wenn du noch unsicher bist.
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
            Mehr Antworten in der{" "}
            <Link href="/faq">FAQ</Link>.
          </p>
        </div>
      </section>
    </main>
  );
}
