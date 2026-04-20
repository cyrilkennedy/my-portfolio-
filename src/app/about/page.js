import Image from "next/image";
import PageHero from "../../components/PageHero";
import Reveal from "../../components/Reveal";
import { principles, siteConfig } from "../../lib/portfolio-data";

export const metadata = {
  title: "About | Kennedy Portfolio",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A builder focused on clean execution, secure thinking, and strong presentation"
        description="My goal is to create digital products that are clear to use, dependable under pressure, and compelling enough to be remembered."
        aside={
          <div className="mini-metrics">
            <div>
              <strong>MERN</strong>
              <span>primary application stack</span>
            </div>
            <div>
              <strong>IBM</strong>
              <span>certification paths in progress</span>
            </div>
          </div>
        }
      />

      <section className="section">
        <div className="shell split-layout">
          <Reveal className="story-card">
            <h2>The approach</h2>
            <p>
              I enjoy the point where software engineering and cybersecurity meet. Building useful systems is important, but
              understanding how to keep them resilient is what makes the work feel complete.
            </p>
            <p>
              That mindset shapes how I approach frontend quality, API structure, authentication flows, and the way technical
              work is explained to real users. Good products should not only work well, they should also communicate trust.
            </p>
            <p>
              Alongside development, graphic design has helped me think more deliberately about hierarchy, tone, and visual
              storytelling. That perspective shows up in how I design interfaces and present project work.
            </p>
          </Reveal>

          <Reveal className="photo-stack" delay={120}>
            <div className="media-frame media-frame-portrait">
              <Image src={siteConfig.profileImage} alt="Kennedy portrait" width={900} height={1200} className="media-image" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <div className="principle-grid">
            {principles.map((principle, index) => (
              <Reveal key={principle} className="principle-card" delay={index * 100}>
                <span className="principle-index">0{index + 1}</span>
                <p>{principle}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
