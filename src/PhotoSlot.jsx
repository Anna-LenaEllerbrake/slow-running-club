import { useState } from "preact/hooks";

/**
 * Bildplatzhalter: zeigt das Foto, sobald es unter `src` existiert — bis
 * dahin einen beschrifteten Platzhalter, statt eines kaputten Bild-Icons.
 * @param {{ src: string, alt: string, caption?: string, aspect?: string, className?: string }} props
 */
export default function PhotoSlot({ src, alt, caption, aspect = "4 / 3", className = "" }) {
  const [status, setStatus] = useState("loading");

  return (
    <figure
      className={`photo-slot ${status === "loaded" ? "photo-slot-loaded" : ""} ${className}`}
      style={{ "--photo-aspect": aspect }}
    >
      {status !== "error" ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      ) : null}
      {status !== "loaded" ? (
        <figcaption className="photo-slot-caption" aria-hidden="true">
          <span className="photo-slot-icon">📷</span>
          <span>{caption ?? "Foto folgt"}</span>
        </figcaption>
      ) : null}
    </figure>
  );
}
