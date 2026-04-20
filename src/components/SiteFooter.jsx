import Link from "next/link";
import { navigation, socialLinks, siteConfig } from "../lib/portfolio-data";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <p className="footer-label">Built to communicate range with clarity.</p>
          <h2>{siteConfig.name}</h2>
          <p>{siteConfig.summary}</p>
        </div>

        <div>
          <p className="footer-heading">Navigation</p>
          <div className="footer-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="footer-heading">Connect</p>
          <div className="footer-links">
            {socialLinks.map((item) => (
              <a key={item.href} href={item.href} target="_blank" rel="noreferrer">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="shell footer-bar">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
