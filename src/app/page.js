import Image from "next/image";
import Link from "next/link";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";
import {
  expertiseGroups,
  featuredProjects,
  heroStats,
  siteConfig,
  timeline,
} from "../lib/portfolio-data";

export default function HomePage() {
  return (
    <>
      <section className="hero-home">
        <div className="shell hero-grid">
          <Reveal className="hero-copy">
            <div className="hero-copy-main">
              <p className="eyebrow">Multidisciplinary portfolio</p>
              <h1 className="display-title">
                Building sharp web experiences with a developer&apos;s precision, a security mindset, and a designer&apos;s eye.
              </h1>
            </div>
          </Reveal>

          <Reveal className="hero-visual" delay={160}>
            <div className="portrait-card">
              <div className="portrait-orbit orbit-one" />
              <div className="portrait-orbit orbit-two" />
              <div className="portrait-chip portrait-chip-top">Secure by design</div>
              <div className="portrait-chip portrait-chip-bottom">Frontend + backend + brand</div>
              <Image
                src={siteConfig.profileImage}
                alt="Kennedy portrait"
                width={700}
                height={900}
                priority
                className="portrait-image"
              />
            </div>
          </Reveal>
        </div>

        <div className="shell">
          <Reveal className="hero-support" delay={120}>
            <div className="hero-support-copy">
              <p className="hero-copy-text">{siteConfig.summary}</p>
            </div>
            <div className="hero-support-aside">
              <div className="hero-support-top">
                <div className="hero-actions">
                  <Link href="/projects" className="button button-ghost hero-support-button">
                    Explore projects
                  </Link>
                  <a
                    href={siteConfig.resumeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="button button-ghost hero-support-button"
                  >
                    Download resume
                  </a>
                  <span className="hero-mini-card">{siteConfig.location}</span>
                </div>
              </div>
              <div className="hero-support-bottom">
                <span className="hero-long-card">{siteConfig.availability}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section section-tight">
        <div className="shell stats-grid">
          {heroStats.map((stat, index) => (
            <Reveal key={stat.label} className="stat-card" delay={index * 90}>
              <strong>{stat.value}</strong>
              <span>{stat.label}</span>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="What I bring"
            title="A portfolio built around range and focus"
            description="The strongest work usually comes from combining technical depth with communication skills. This site reflects that balance."
          />
          <div className="feature-grid">
            {expertiseGroups.map((group, index) => (
              <Reveal key={group.title} className="feature-card" delay={index * 120}>
                <div className="feature-card-top">
                  <p className="feature-card-label">{group.title}</p>
                  <h3>{group.description}</h3>
                </div>
                <div className="chip-wrap">
                  {group.items.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured work"
            title="Selected highlights"
            description="A mix of frontend, backend, and cybersecurity work chosen to show both practical execution and visual storytelling."
          />
          <div className="content-grid">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.title} className="showcase-card" delay={index * 100}>
                <div className="media-frame">
                  <Image src={project.image} alt={project.title} width={1200} height={800} className="media-image" />
                </div>
                <div className="card-body">
                  <div className="tag-row">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <Link href={project.href} className="text-link">
                    View details
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell journey-grid">
          <Reveal>
            <SectionHeading
              eyebrow="Growth"
              title="Momentum built through hands-on work"
              description="From internship projects to independent builds and cybersecurity labs, the recent path has been about stacking practical wins and turning them into stronger judgment."
            />
          </Reveal>

          <div className="timeline">
            {timeline.map((item, index) => (
              <Reveal key={item.title} className="timeline-card" delay={index * 100}>
                <span className="timeline-dot" />
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="cta-panel">
            <p className="eyebrow">Next step</p>
            <h2>Need a developer who can build, present, and think defensively?</h2>
            <p>
              Let&apos;s talk about your site, product idea, internship opening, or technical collaboration.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button">
                Start a conversation
              </Link>
              <Link href="/about" className="button button-ghost">
                Learn more
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
