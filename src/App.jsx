import { instagramHandle, instagramUrl } from "./config.js";
import InstagramIcon from "./InstagramIcon.jsx";
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
          <h2>Unsere Läufe</h2>
          <p className="runs-intro">
            Zwei feste Termine pro Woche — einfach vorbeikommen, keine Anmeldung
            nötig.
          </p>
          <div className="runs-grid">
            {runs.map((run) => (
              <article key={run.id} className="run-card">
                <h3>{run.title}</h3>
                <p className="run-day">{run.day}</p>
                <dl className="run-details">
                  <div>
                    <dt>Treffpunkt</dt>
                    <dd>{run.meetingPoint}</dd>
                  </div>
                  <div>
                    <dt>Strecke</dt>
                    <dd>{run.distance}</dd>
                  </div>
                  {run.groups ? (
                    <div>
                      <dt>Gruppen</dt>
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
                    <div>
                      <dt>Pace</dt>
                      <dd>{run.pace}</dd>
                    </div>
                  )}
                </dl>
              </article>
            ))}
          </div>
        </section>

        <section className="card card-instagram">
          <h2>Folge uns auf Instagram</h2>
          <p>
            Hier teilen wir Läufe, Termine und Einblicke aus dem Club — der
            einfachste Weg, auf dem Laufenden zu bleiben.
          </p>
          <a
            className="button button-instagram button-lg"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`@${instagramHandle} auf Instagram`}
          >
            <InstagramIcon />
            <span>{instagramHandle}</span>
          </a>
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
          <a
            className="footer-link instagram-link"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`@${instagramHandle} auf Instagram`}
          >
            <InstagramIcon />
            <span>{instagramHandle}</span>
          </a>
        </div>
      </footer>
    </>
  );
}
