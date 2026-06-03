import {
  instagramHandle,
  instagramUrl,
  stravaLabel,
  stravaUrl,
} from "./config.js";
import InstagramIcon from "./InstagramIcon.jsx";
import StravaIcon from "./StravaIcon.jsx";
import { runs } from "./runs.js";

export default function App() {
  const year = new Date().getFullYear();

  return (
    <>
      <header className="hero">
        <div className="container">
          <img
            className="logo"
            src="/logo.png"
            alt="Slow Running Club Karlsruhe Logo"
          />
          <p className="eyebrow">Karlsruhe</p>
          <h1>Slow Running Club</h1>
          <p className="lead">
            Entspannt laufen. Gemeinsam dranbleiben. Ohne Leistungsdruck.
          </p>
        </div>
      </header>

      <main className="container">
        <section className="card card-runs">
          <h2>
            <span className="runs-heading-emoji" aria-hidden="true">
              🏃‍♀️
            </span>{" "}
            Unsere Läufe
          </h2>
          <p className="runs-intro">
            Zwei feste Termine pro Woche — einfach vorbeikommen, keine Anmeldung
            nötig. 📍
          </p>
          <div className="runs-grid">
            {runs.map((run) => (
              <article key={run.id} className="run-card">
                <header className="run-card-header">
                  <h3>{run.title}</h3>
                  <p className="run-day">📅 {run.day}</p>
                </header>

                <div className="run-map">
                  <iframe
                    title={`Karte: ${run.meetingPoint}`}
                    src={run.mapsEmbedUrl}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                  <a
                    className="map-link"
                    href={run.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    🗺️ In Google Maps öffnen
                  </a>
                </div>

                <dl className="run-details">
                  <div className="run-detail-row">
                    <dt>📍 Treffpunkt</dt>
                    <dd>{run.meetingPoint}</dd>
                  </div>
                  <div className="run-detail-row">
                    <dt>🛤️ Strecke</dt>
                    <dd>{run.distance}</dd>
                  </div>
                  {run.groups ? (
                    <div className="run-detail-row">
                      <dt>⏱️ Gruppen</dt>
                      <dd>
                        <ul className="run-groups">
                          {run.groups.map((group) => (
                            <li key={group.name}>
                              <strong>{group.name}</strong>
                              <span>
                                {group.time} · {group.pace}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ) : (
                    <div className="run-detail-row">
                      <dt>⏱️ Pace</dt>
                      <dd>{run.pace}</dd>
                    </div>
                  )}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="card card-social">
          <h2>
            <span className="section-emoji" aria-hidden="true">
              🧡
            </span>{" "}
            Community
          </h2>
          <p>
            Termine, News und Updates teilen wir immer auf Instagram und im
            Strava Club — damit niemand etwas verpasst.
          </p>
          <p className="social-note">
            Du brauchst kein Strava, um mit uns zu laufen. Instagram reicht
            völlig — besonders für Laufanfänger:innen.
          </p>
          <div className="social-buttons">
            <a
              className="button button-social button-lg"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`@${instagramHandle} auf Instagram`}
            >
              <InstagramIcon />
              <span>{instagramHandle}</span>
            </a>
            <a
              className="button button-social button-lg button-strava"
              href={stravaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${stravaLabel} auf Strava`}
            >
              <StravaIcon />
              <span>{stravaLabel}</span>
            </a>
          </div>
        </section>

        <section className="card">
          <h2>Was wir machen</h2>
          <p>
            Der Slow Running Club ist für alle, die Bewegung lieben, aber auf
            Tempo und Druck verzichten wollen. Wir laufen in lockerem Rhythmus,
            feiern Beständigkeit statt Bestzeiten und motivieren uns gegenseitig.
          </p>
        </section>

        <section className="card">
          <h2>Für wen?</h2>
          <ul>
            <li>Einsteiger:innen</li>
            <li>Wiedereinsteiger:innen</li>
            <li>Alle, die entspannt in Bewegung bleiben wollen</li>
          </ul>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>© {year} Slow Running Club</p>
          <div className="footer-social">
            <a
              className="footer-link social-link"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`@${instagramHandle} auf Instagram`}
            >
              <InstagramIcon />
              <span>{instagramHandle}</span>
            </a>
            <a
              className="footer-link social-link social-link-strava"
              href={stravaUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${stravaLabel} auf Strava`}
            >
              <StravaIcon />
              <span>{stravaLabel}</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
