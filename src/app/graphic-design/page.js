import Image from "next/image";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { designWorks } from "../../lib/portfolio-data";

export const metadata = {
  title: "Graphic Design | Kennedy Portfolio",
};

export default function GraphicDesignPage() {
  return (
    <>
      <PageHero
        eyebrow="Graphic Design"
        title="Visual work that supports clarity, identity, and promotion"
        description="The design side of the portfolio focuses on bold composition, practical branding, and visuals that help ideas land quickly."
        aside={
          <div className="mini-metrics">
            <div>
              <strong>Posters</strong>
              <span>campaign-focused layouts</span>
            </div>
            <div>
              <strong>Brand</strong>
              <span>identity-first visual treatment</span>
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="shell gallery-grid">
          {designWorks.map((work, index) => (
            <Reveal key={work.title} className="gallery-card" delay={index * 120}>
              <div className="media-frame media-frame-tall">
                <Image src={work.image} alt={work.title} width={900} height={1200} className="media-image" />
              </div>
              <div className="card-body">
                <h2>{work.title}</h2>
                <p>{work.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Reveal className="story-card">
            <h2>Design write-up</h2>
            <p>
              The original portfolio used this section to show actual visual pieces, so I have kept the image-led layout
              instead of turning it into a text-only page. The goal here is to show that the design work is not separate
              from the development work, it supports how products are introduced, branded, and remembered.
            </p>
            <p>
              Across the posters, campaign pieces, and brand visuals, the focus is on hierarchy, readability, and strong
              contrast. Those same design instincts also shape how the web pages in the portfolio are structured now.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
