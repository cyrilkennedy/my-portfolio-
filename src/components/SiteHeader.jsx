"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navigation, siteConfig } from "../lib/portfolio-data";

export default function SiteHeader() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", isOpen);

    return () => document.body.classList.remove("menu-open");
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Link href="/" className="brand-mark" aria-label={`${siteConfig.name} home`}>
          <span className="brand-kicker">Portfolio</span>
          <span className="brand-name">{siteConfig.name}</span>
        </Link>

        <button
          type="button"
          className={`nav-toggle ${isOpen ? "is-open" : ""}`}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-surface ${isOpen ? "is-open" : ""}`}>
          {navigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link ${active ? "is-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
          <a
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            className="button button-small"
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}
