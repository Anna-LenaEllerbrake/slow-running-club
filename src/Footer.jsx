import { Link } from "preact-router/match";
import {
  instagramHandle,
  instagramUrl,
  stravaLabel,
  stravaUrl,
} from "./config.js";
import InstagramIcon from "./InstagramIcon.jsx";
import StravaIcon from "./StravaIcon.jsx";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-legal">
          <p>© {year} Slow Running Club</p>
          <Link href="/was-ist-slow-running" className="footer-legal-link">
            Slow Running
          </Link>
          <Link href="/neu-hier" className="footer-legal-link">
            Neu hier?
          </Link>
          <Link href="/faq" className="footer-legal-link">
            FAQ
          </Link>
          <Link href="/impressum" className="footer-legal-link">
            Impressum
          </Link>
          <Link href="/datenschutz" className="footer-legal-link">
            Datenschutz
          </Link>
        </div>
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
  );
}
