import Link from "next/link";
import ContactForm from "../../components/ContactForm";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { siteConfig, socialLinks } from "../../lib/portfolio-data";

function SocialIcon({ label }) {
  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M6.94 8.5H3.56V20h3.38V8.5Zm.22-3.55A1.96 1.96 0 0 0 5.24 3a1.96 1.96 0 0 0-1.93 1.95c0 1.06.84 1.92 1.9 1.92h.03c1.1 0 1.92-.86 1.92-1.92ZM20.44 13.08c0-3.46-1.85-5.08-4.32-5.08a3.75 3.75 0 0 0-3.4 1.87V8.5H9.34c.04.9 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.93.27-.68.88-1.38 1.92-1.38 1.36 0 1.9 1.04 1.9 2.56V20H20v-6.92Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 2C6.48 2 2 6.6 2 12.28c0 4.54 2.87 8.4 6.84 9.76.5.1.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.46-1.18-1.11-1.49-1.11-1.49-.9-.63.07-.62.07-.62 1 .07 1.52 1.04 1.52 1.04.88 1.54 2.32 1.09 2.89.84.09-.66.35-1.09.63-1.34-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.04 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.75 1.05A9.36 9.36 0 0 1 12 6.92c.85 0 1.71.12 2.51.36 1.9-1.32 2.74-1.05 2.74-1.05.56 1.4.21 2.44.1 2.7.64.71 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.31.68.92.68 1.86 0 1.35-.01 2.43-.01 2.76 0 .27.18.59.69.49A10.3 10.3 0 0 0 22 12.28C22 6.6 17.52 2 12 2Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (label === "X") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M18.9 3H21l-4.58 5.24L21.8 21h-4.94l-3.88-5.08L8.53 21H6.4l4.9-5.6L2.2 3h5.06l3.5 4.62L18.9 3Zm-1.73 16h1.37L6.53 4.9H5.06L17.17 19Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M16.6 13.6c-.27-.14-1.6-.8-1.85-.88-.25-.1-.43-.14-.61.13-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.14-1.13-.42-2.15-1.35-.8-.72-1.34-1.6-1.5-1.87-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.14-.61-1.5-.84-2.05-.22-.54-.44-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.95-.95 2.31s.98 2.67 1.11 2.85c.14.18 1.91 3.01 4.63 4.22.65.29 1.16.46 1.56.59.65.21 1.25.18 1.72.11.52-.08 1.6-.65 1.83-1.27.23-.63.23-1.16.16-1.27-.07-.11-.25-.18-.52-.31ZM12.02 2C6.49 2 2 6.55 2 12.15c0 1.97.56 3.9 1.62 5.56L2.56 22l4.17-1.1a9.9 9.9 0 0 0 5.29 1.54H12c5.53 0 10.02-4.55 10.02-10.15C22.02 6.55 17.53 2 12.02 2Zm0 18.7h-.01a8.3 8.3 0 0 1-4.22-1.16l-.3-.18-2.47.65.66-2.4-.2-.31a8.4 8.4 0 0 1-1.3-4.45c0-4.64 3.72-8.42 8.32-8.42 2.22 0 4.3.88 5.87 2.46a8.46 8.46 0 0 1 2.43 5.97c0 4.65-3.72 8.43-8.31 8.43Z"
        fill="currentColor"
      />
    </svg>
  );
}

export const metadata = {
  title: "Contact | Kennedy Portfolio",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s talk about your next project or opportunity"
        description="If you need a developer with growing full-stack range, security awareness, and a strong eye for presentation, this is the right place to start."
        aside={
          <div className="mini-metrics">
            <div>
              <strong>Available</strong>
              <span>{siteConfig.availability}</span>
            </div>
            <div>
              <strong>Resume</strong>
              <span>ready to share on request or download</span>
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="shell contact-grid">
          <Reveal className="contact-panel">
            <h2>Send a message</h2>
            <p>
              Share a project brief, internship role, freelance request, or collaboration idea and I&apos;ll respond as soon as
              I can.
            </p>
            <ContactForm />
          </Reveal>

          <Reveal className="contact-panel contact-panel-secondary" delay={120}>
            <h2>Other ways to connect</h2>
            <div className="contact-links">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link-card"
                  aria-label={`${item.label} ${item.actionLabel ?? "Open link"}`}
                >
                  <span className="contact-link-icon" aria-hidden="true">
                    <SocialIcon label={item.label} />
                  </span>
                  <span className="contact-link-content">
                    <span>{item.label}</span>
                    <span className="text-link">{item.actionLabel ?? "Open link"}</span>
                  </span>
                </a>
              ))}
            </div>
            <div className="resume-callout">
              <p>Prefer starting with the portfolio overview and resume?</p>
              <a href={siteConfig.resumeUrl} target="_blank" rel="noreferrer" className="button button-small">
                Download resume
              </a>
              <Link href="/projects" className="button button-ghost button-small">
                Browse projects
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
