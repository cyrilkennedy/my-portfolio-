import Image from "next/image";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { cyberHighlights } from "../../lib/portfolio-data";

export const metadata = {
  title: "Cybersecurity | Kennedy Portfolio",
};

export default function CybersecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Cybersecurity"
        title="Security learning grounded in lab work and troubleshooting"
        description="This side of the portfolio captures ethical testing workflows, Linux debugging, reconnaissance, and tooling practice that strengthens engineering judgment."
        aside={
          <div className="mini-metrics">
            <div>
              <strong>Kali Linux</strong>
              <span>daily lab environment</span>
            </div>
            <div>
              <strong>Ethical</strong>
              <span>lab-only testing approach</span>
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="shell content-grid">
          {cyberHighlights.map((item, index) => (
            <Reveal key={item.title} className="showcase-card" delay={index * 100}>
              <div className="media-frame">
                <Image src={item.image} alt={item.title} width={1200} height={800} className="media-image" />
              </div>
              <div className="card-body">
                <div className="tag-row">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <div className="detail-stack">
                  {item.writeup?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
