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
          <a className="button" href="mailto:hello@slowrunningclub.de">
            Mitmachen
          </a>
        </div>
      </header>

      <main className="container">
        <section className="card">
          <h2>Was wir machen</h2>
          <p>
            Der Slow Running Club ist für alle, die Bewegung lieben, aber auf
            Tempo und Druck verzichten wollen. Wir laufen in lockerem Rhythmus,
            feiern Konstanz statt Bestzeiten und motivieren uns gegenseitig.
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
        <div className="container">
          <p>© {year} Slow Running Club</p>
        </div>
      </footer>
    </>
  );
}
