import SiteFooter from "../components/SiteFooter";
import SiteHeader from "../components/SiteHeader";
import { siteConfig } from "../lib/portfolio-data";
import "./globals.css";

export const metadata = {
  title: `${siteConfig.name} | Portfolio`,
  description: siteConfig.summary,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="site-backdrop" />
        <div className="site-ambient">
          <span className="ambient-veil ambient-veil-one" />
          <span className="ambient-veil ambient-veil-two" />
          <span className="ambient-orb ambient-orb-one" />
          <span className="ambient-orb ambient-orb-two" />
          <span className="ambient-orb ambient-orb-three" />
          <span className="ambient-orb ambient-orb-four" />
          <span className="ambient-line ambient-line-one" />
          <span className="ambient-line ambient-line-two" />
          <span className="ambient-grid-glow" />
        </div>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
