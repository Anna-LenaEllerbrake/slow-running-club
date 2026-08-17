import { Link } from "preact-router/match";
import { contactEmail, legal } from "../config.js";
import { useDocumentTitle } from "../useDocumentTitle.js";

export default function Datenschutz() {
  useDocumentTitle("Datenschutz");

  return (
    <main className="container legal-page">
      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>

      <section className="card">
        <h1>Datenschutzerklärung</h1>
        <p className="legal-meta">Stand: Juni 2026</p>

        <h2>1. Verantwortliche</h2>
        <p>
          Verantwortlich für die Datenverarbeitung auf dieser Website:
          <br />
          {legal.operatorName}
          <br />
          {legal.operatorStreet}
          <br />
          {legal.operatorZipCity}
          <br />
          E-Mail:{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
        </p>

        <h2>2. Überblick</h2>
        <p>
          Wir nehmen den Schutz deiner personenbezogenen Daten ernst. Diese
          Website informiert über den Slow Running Club in Karlsruhe. Wir
          betreiben keine Werbe-Tracking-Tools (z. B. Google Analytics) und
          setzen keine Marketing-Cookies ein.
        </p>

        <h2>3. Hosting</h2>
        <p>
          Diese Website wird bei <strong>AWS Amplify</strong> (Amazon Web
          Services EMEA SARL) gehostet. Beim Aufruf der Seite werden technisch
          erforderliche Daten verarbeitet, z. B. IP-Adresse, Datum und Uhrzeit
          des Zugriffs, aufgerufene Seite und Browsertyp — in Server-Logdateien,
          um die Website auszuliefern und abzusichern.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
          einem sicheren und stabilen Webangebot).
        </p>

        <h2>4. Kontakt per E-Mail</h2>
        <p>
          Wenn du uns per E-Mail kontaktierst, speichern wir die von dir
          übermittelten Daten (z. B. E-Mail-Adresse, Inhalt der Nachricht), um
          deine Anfrage zu bearbeiten. Die Daten geben wir nicht ohne deine
          Einwilligung weiter.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche
          Kommunikation) bzw. Art. 6 Abs. 1 lit. f DSGVO (allgemeine Anfragen).
        </p>
        <p>
          Wir löschen E-Mails, sobald sie für den Zweck nicht mehr erforderlich
          sind, spätestens nach Ablauf gesetzlicher Aufbewahrungsfristen.
        </p>

        <h2>5. Eingebettete Google Maps-Karten</h2>
        <p>
          Auf unserer Seite sind Karten von <strong>Google Maps</strong>{" "}
          eingebunden (iframe), um Treffpunkte unserer Läufe anzuzeigen. Beim
          Laden der Seite kann Google (Google Ireland Limited bzw. verbundene
          Unternehmen) Daten verarbeiten, z. B. deine IP-Adresse und
          Informationen zum genutzten Gerät.
        </p>
        <p>
          Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Interesse an einer
          verständlichen Darstellung von Treffpunkten).
        </p>
        <p>
          Weitere Informationen:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung von Google
          </a>
          . Du kannst die Karte auch über den Link „In Google Maps öffnen“
          aufrufen, ohne die eingebettete Vorschau zu nutzen.
        </p>

        <h2>6. Links zu Instagram und Strava</h2>
        <p>
          Unsere Website enthält Links zu{" "}
          <strong>Instagram</strong> (Meta) und <strong>Strava</strong>. Erst
          wenn du auf einen Link klickst und die jeweilige Plattform besuchst,
          gelten deren Datenschutzbestimmungen. Auf unserer Website selbst werden
          keine Instagram- oder Strava-Inhalte eingebettet.
        </p>
        <p>
          Instagram:{" "}
          <a
            href="https://privacycenter.instagram.com/policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutz bei Instagram
          </a>
          <br />
          Strava:{" "}
          <a
            href="https://www.strava.com/legal/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutz bei Strava
          </a>
        </p>

        <h2>7. Cookies</h2>
        <p>
          Diese Website verwendet <strong>keine Cookies</strong> zu Analyse- oder
          Marketingzwecken. Technisch können beim Hosting oder beim Laden
          externer Dienste (z. B. Google Maps) vergleichbare Technologien in
          Spiel kommen; das unterliegt den jeweiligen Anbietern.
        </p>

        <h2>8. Deine Rechte</h2>
        <p>Du hast gegenüber uns u. a. folgende Rechte:</p>
        <ul className="legal-list">
          <li>Auskunft über deine gespeicherten Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung (Art. 17 DSGVO)</li>
          <li>Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Widerspruch (Art. 21 DSGVO)</li>
          <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>
            Beschwerde bei einer Aufsichtsbehörde, z. B. dem Landesbeauftragten
            für den Datenschutz und die Informationsfreiheit Baden-Württemberg
          </li>
        </ul>
        <p>
          Zur Ausübung deiner Rechte genügt eine Nachricht an{" "}
          <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
        </p>

        <h2>9. Änderungen</h2>
        <p>
          Wir passen diese Datenschutzerklärung an, wenn sich unsere Website oder
          die Rechtslage ändert. Die jeweils aktuelle Version findest du auf
          dieser Seite.
        </p>
      </section>
    </main>
  );
}
