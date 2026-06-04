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
            src="/logo.png"
            alt="Slow Running Club Karlsruhe Logo"
          />
          <p className="eyebrow">Karlsruhe</p>
          <h1>Slow Running Club</h1>
          <p className="lead">
            Entspannt laufen. Gemeinsam dranbleiben. Ohne Leistungsdruck.
          </p>
          <p className="hero-cta">
            <Link href="/neu-hier" className="button button-lg">
              Zum ersten Mal dabei?
            </Link>
          </p>
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

        <section className="card">
          <h2>Gemeinsam im Tempo</h2>
          <p>
            Wir passen unser Tempo bei Bedarf an und machen auf Wunsch gemeinsam
            (Geh-)pausen. Niemand soll abgehängt oder zurückgelassen werden.
          </p>
          <p>
            Es ist ausdrücklich erwünscht, zu sagen, wenn du langsamer laufen
            möchtest oder eine Pause brauchst — sprich uns einfach an.
          </p>
        </section>

        <section className="card card-faq" id="faq">
          <h2>Häufige Fragen</h2>
          <p className="faq-intro">
            Die wichtigsten Antworten auf einen Blick — mehr findest du auf der
            FAQ-Seite.
          </p>
          <FaqList limit={faqHomePreviewCount} />
          <p className="faq-footer">
            <Link href="/faq" className="faq-footer-link">
              Alle Fragen ansehen →
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

        <section className="card card-contact" id="kontakt">
          <h2>Kontakt</h2>
          <p className="contact-intro">
            Fragen, Mitmachen oder einfach Hallo sagen — wir freuen uns auf dich.
          </p>
          <div className="contact-options">
            <a
              className="contact-channel"
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
              <span>Schreib uns auf Instagram · {instagramHandle}</span>
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
                  Schreib {contactName} eine E-Mail
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
