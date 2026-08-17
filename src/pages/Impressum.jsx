import { Link } from "preact-router/match";
import { contactEmail, legal } from "../config.js";
import { useDocumentTitle } from "../useDocumentTitle.js";

export default function Impressum() {
  useDocumentTitle("Impressum");
  return (
    <main className="container legal-page">
      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>

      <section className="card">
        <h1>Impressum</h1>
        <p className="legal-meta">Angaben gemäß § 5 DDG</p>

        <h2>Anbieterin dieser Website</h2>
        <p>
          {legal.siteLabel}
          <br />
          {legal.operatorName}
          <br />
          {legal.operatorStreet}
          <br />
          {legal.operatorZipCity}
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>

        <h2>Hinweis zum Slow Running Club</h2>
        <p>
          Der Slow Running Club ist eine informelle Laufgruppe in Karlsruhe — kein
          eingetragener Verein und kein Unternehmen. Die Website dient der
          Information über gemeinsame Läufe und den Kontakt zur Gruppe.
        </p>

        <h2>Haftung für Inhalte</h2>
        <p>
          Als Diensteanbieterin sind wir für eigene Inhalte auf diesen Seiten
          nach den allgemeinen Gesetzen verantwortlich. Wir sind nicht
          verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
          überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
          Tätigkeit hinweisen.
        </p>
        <p>
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von
          entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
          entfernen.
        </p>

        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter (z. B.
          Instagram, Strava, Google Maps), auf deren Inhalte wir keinen Einfluss
          haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
          übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
          Anbieter oder Betreiber der Seiten verantwortlich.
        </p>

        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der
          jeweiligen Autorin bzw. Erstellerin.
        </p>
      </section>
    </main>
  );
}
