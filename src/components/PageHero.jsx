import Reveal from "./Reveal";

export default function PageHero({ eyebrow, title, description, aside }) {
  return (
    <section className="page-hero">
      <div className="shell page-hero-grid">
        <Reveal className="page-hero-copy">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-description">{description}</p>
        </Reveal>
        <Reveal className="hero-panel" delay={120}>
          {aside}
        </Reveal>
      </div>
    </section>
  );
}
