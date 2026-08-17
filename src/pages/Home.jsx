import { Link } from "preact-router/match";
import {
  contactEmail,
  contactName,
  instagramHandle,
  instagramUrl,
  stravaLabel,
  stravaUrl,
} from "../config.js";
import FaqList from "../FaqList.jsx";
import { faqHomePreviewCount } from "../faq.js";
import InstagramIcon from "../InstagramIcon.jsx";
import StravaIcon from "../StravaIcon.jsx";
import { runs } from "../runs.js";

export default function Home() {
  return (
    <>
      <header className="hero">
        <div className="container">
          <img
            className="logo"
            src="/logo.svg"
            alt="Slow Running Club Karlsruhe Logo"
          />
          <h1 className="sr-only">Slow Running Club Karlsruhe</h1>
          <p className="lead">
            Locker laufen, gemeinsam dranbleiben — ganz ohne Leistungsdruck.
          </p>
          <div className="hero-cta">
            <Link href="/neu-hier" className="button button-lg">
              Zum ersten Mal dabei?
            </Link>
            <Link
              href="/was-ist-slow-running"
              className="button button-outline button-lg"
            >
              Was ist Slow Running?
            </Link>
          </div>
        </div>
      </header>

      <main className="container">
        <section className="card card-runs" id="laeufe">
          <h2>
            <span className="runs-heading-emoji" aria-hidden="true">
              🏃‍♀️
            </span>{" "}
            Unsere Läufe
          </h2>
          <p className="runs-intro">
            Zwei feste Termine pro Woche — einfach vorbeikommen. Kein Formular,
            kein Stress. 📍
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

        <section className="card">
          <h2>Gemeinsam im Tempo</h2>
          <p>
            Wir passen das Tempo an und machen gemeinsam Pausen, wenn du magst.
            Niemand wird abgehängt — wirklich.
          </p>
          <p>
            Langsamer werden oder Pause? Sag einfach Bescheid — das ist bei uns
            völlig normal und erwünscht.
          </p>
        </section>

        <section className="card card-faq" id="faq">
          <h2>Häufige Fragen</h2>
          <p className="faq-intro">
            Kurze Antworten auf die wichtigsten Fragen — noch mehr auf der
            FAQ-Seite.
          </p>
          <FaqList limit={faqHomePreviewCount} />
          <p className="faq-footer">
            <Link href="/faq" className="faq-footer-link">
              Alle Fragen →
            </Link>
          </p>
        </section>

        <section className="card card-social">
          <h2>
            <span className="section-emoji" aria-hidden="true">
              🧡
            </span>{" "}
            Community
          </h2>
          <p>
            Termine, News und spontane Updates gibt's auf Instagram und im
            Strava Club — so verpasst du nichts.
          </p>
          <p className="social-note">
            Du brauchst kein Strava zum Mitlaufen. Instagram reicht völlig —
            besonders am Anfang.
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
            Wir sind die Laufgruppe für alle, die Bewegung mögen, aber keinen
            Speed- und Leistungsdruck wollen. Lockeres Tempo, Beständigkeit statt
            Bestzeiten — und wir feuern uns gegenseitig an.
          </p>
        </section>

        <section className="card">
          <h2>Für wen?</h2>
          <ul>
            <li>Du startest gerade (oder wieder) mit dem Laufen</li>
            <li>Du willst ohne Druck in Bewegung bleiben</li>
            <li>Du suchst Leute, die Tempo und Pausen ernst nehmen</li>
          </ul>
        </section>

        <section className="card card-contact" id="kontakt">
          <h2>Kontakt</h2>
          <p className="contact-intro">
            Frage, Mitmach-Wille oder einfach Hallo — wir freuen uns, von dir zu
            hören.
          </p>
          <div className="contact-options">
            <a
              className="contact-channel"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              <span>Schreib uns auf Insta · {instagramHandle}</span>
            </a>
            <a
              className="contact-email"
              href={`mailto:${contactEmail}`}
              title={`Schreib ${contactName} eine E-Mail`}
            >
              <img
                className="contact-avatar"
                src="/anna.png"
                alt={`${contactName} vom Slow Running Club`}
                width="80"
                height="80"
              />
              <span className="contact-email-text">
                <span className="contact-hint">
                  Mail an {contactName}
                </span>
                <span className="contact-address">{contactEmail}</span>
              </span>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
