import { useEffect } from "preact/hooks";
import { Link } from "preact-router/match";
import FaqList from "../FaqList.jsx";
import { faqItems } from "../faq.js";

export default function Faq() {
  useEffect(() => {
    document.title = "FAQ | Slow Running Club Karlsruhe";
    const schema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "faq-jsonld";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.title =
        "Slow Running Club Karlsruhe | Entspannt laufen in der Gruppe";
      document.getElementById("faq-jsonld")?.remove();
    };
  }, []);

  return (
    <main className="container legal-page">
      <p className="legal-back">
        <Link href="/">← Zurück zur Startseite</Link>
      </p>

      <section className="card">
        <h1>Häufige Fragen</h1>
        <p className="legal-meta">
          Alles, was du übers Mitlaufen bei uns wissen willst — kurz und ehrlich.
        </p>
        <FaqList items={faqItems} />
        <p className="faq-footer">
          Noch was offen? Meld dich auf{" "}
          <Link href="/#kontakt">Instagram oder per Mail</Link>.
        </p>
      </section>
    </main>
  );
}
