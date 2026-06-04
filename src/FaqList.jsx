import { faqItems } from "./faq.js";

/**
 * @param {{ items?: typeof faqItems, limit?: number }} props
 */
export default function FaqList({ items = faqItems, limit }) {
  const list = limit != null ? items.slice(0, limit) : items;

  return (
    <div className="faq-list">
      {list.map((item) => (
        <details key={item.id} className="faq-item">
          <summary className="faq-question">{item.question}</summary>
          <p className="faq-answer">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
