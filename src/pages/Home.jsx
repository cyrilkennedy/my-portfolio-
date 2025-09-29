import React from "react";
import "./../styles/Home.css";

function Home() {
  return (
    <div className="home">

      {/* Hero Section */}
      <section className="hero fade-in">
        <div className="hero-text">
          <h1>Hi, I'm Kennedy 👋</h1>
          <p>Full-Stack Developer | Cybersecurity Analyst | Graphic Designer</p>
          <a href="https://drive.google.com/uc?export=download&id=1bzIzIfhGOQ4El1X6t2zp_mbCMluhqjkS
" download className="btn">Download Resume</a>
        </div>
        <div className="hero-img fade-in" style={{ animationDelay: "0.3s" }}>
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1758839183/WhatsApp_Image_2025-08-05_at_14.17.10_db9d8238_g8klxm.jpg" alt="Kennedy Profile" className="img-zoom" />
        </div>
      </section>

      {/* Skills Section */}
      <section className="skills fade-in">
  <h2>My Skills & Technologies</h2>

  <h3>Front-end / Back-end / Design</h3>
  <div className="skills-grid">
    <div className="skill-card">React.js</div>
    <div className="skill-card">Node.js</div>
    <div className="skill-card">CSS / HTML</div>
    <div className="skill-card">JavaScript</div>
    <div className="skill-card">Graphic Design</div>
  </div>

  <h3>Kali Linux / Tools</h3>
  <div className="skills-grid">
    <div className="skill-card">Kali Linux</div>
    <div className="skill-card">Nmap</div>
    <div className="skill-card">Metasploit</div>
    <div className="skill-card">Wireshark</div>
    <div className="skill-card">Burp Suite</div>
    <div className="skill-card">SQLmap</div>
    <div className="skill-card">Metasploit</div>
  </div>
   <h3> Graphic Design Tools </h3>
   <div className="skills-grid">
    <div className="skill-card">Corel Draw X7 </div>
    <div className="skill-card">Corel Designers </div>
    
  </div>
</section>

      {/* Featured Projects */}
      <section className="featured-projects fade-in">
        <h2>Highlighted Projects</h2>
        <div className="project-preview">
          <div className="project-card fade-in">
            <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1758890622/Screenshot_38_nrev3f.png" alt="Portfolio Screenshot" className="img-zoom" />
            <h3>Upgrade – Financial Service Landing Page</h3>
            <p> Built with React + Vite, featuring a modern dark-themed UI with green/yellow highlights. Showcases financial products (Loans, Card, Savings, Checking), strong CTAs, and 3D visuals (smartphone + Visa card) for a professional, trusted look.</p>
          </div>
          <div className="project-card fade-in" style={{ animationDelay: "0.3s" }}>
            <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1758884532/Screenshot_From_2025-05-13_09-21-39_f82f3t.png" alt="Kali Linux System Administration & Troubleshooting" className="img-zoom" />
            <h3>Kali Linux System Administration & Troubleshooting</h3>
            <p>Resolved repository/GPG key errors, handled missing package issues, and manually installed Go from binaries. Demonstrated strong Linux CLI skills in software installation, error handling, and system troubleshooting.</p>
          </div>
        </div>
        <a href="/projects" className="btn">View All Projects</a>
      </section>

      {/* Internship Snapshot */}
      <section className="internship fade-in">
        <h2>Internship Experience</h2>
        <p>
          I completed my internship at <b>Smart Hub Tech School</b>, where I worked on full-stack web development
          projects, cybersecurity research, and graphic design. I learned teamwork, project management, and hands-on technical skills.
        </p>
      </section>

      {/* Call to Action */}
      <section className="cta fade-in">
        <h2>Let's Work Together</h2>
        <p>If you have a project or opportunity, feel free to reach out!</p>
        <a href="/contact" className="btn">Contact Me</a>
      </section>

    </div>
  );
}

export default Home;
