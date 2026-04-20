import Image from "next/image";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { projects } from "../../lib/portfolio-data";

export const metadata = {
  title: "Projects | Kennedy Portfolio",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Practical builds across frontend and backend work"
        description="These case studies focus on implementation, clarity, and technical growth. Together they show a strong base in API work, interface design, and product presentation."
        aside={
          <div className="mini-metrics">
            <div>
              <strong>4</strong>
              <span>core engineering case studies</span>
            </div>
            <div>
              <strong>React + Node</strong>
              <span>main build stack</span>
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="shell content-grid">
          {projects.map((project, index) => (
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
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div className="detail-stack">
                  {project.writeup?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <ul className="detail-list">
                  {project.highlights?.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={project.href} target="_blank" rel="noreferrer" className="button button-small">
                  View repository
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
