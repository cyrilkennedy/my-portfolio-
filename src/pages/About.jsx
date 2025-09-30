import React from "react";
import "./../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container fade-in">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm <b>Kennedy</b> — a <b>Full-Stack Developer</b> and 
            <b> Cybersecurity Analyst in training</b>, driven by the challenge of building 
            digital systems that are both <b>scalable</b> and <b>secure</b>. 
            My passion lies at the intersection of <b>software development</b> and 
            <b> cyber defense</b>, where creativity meets strategy.
          </p>
          <p>
            On the development side, I specialize in the <b>MERN stack (MongoDB, Express, React, Node.js)</b>, 
            with experience in <b>REST APIs, Git/GitHub, and CI/CD pipelines</b>. 
            I enjoy transforming ideas into functional applications that deliver clean user experiences, 
            efficient backend logic, and reliable database structures.
          </p>
          <p>
            At the same time, my background in <b>Cybersecurity</b> gives me a different perspective as a developer — 
            I don’t just think about what an app can do, but also about how it can be 
            <b> protected from vulnerabilities and attacks</b>. 
            I’ve worked with tools like <b>Kali Linux, Nmap, and Metasploit</b>, 
            while practicing <b>penetration testing, secure coding, authentication flows (JWT, OAuth)</b>, 
            and <b>OWASP security principles</b>.
          </p>
          <p>
            I am also pursuing <b>IBM Cybersecurity Analyst</b> and 
            <b> IBM Full Stack JavaScript Developer</b> certifications, sharpening both skillsets 
            through hands-on labs and real-world projects.
          </p>
          <p>
            My ultimate goal is to create impactful technology that is not only 
            <b> innovative and user-friendly</b>, but also <b>resilient and secure by design</b>. 
            Whether building a platform from the ground up or reinforcing existing systems, 
            I bring a mindset of <b>precision, curiosity, and innovation</b> to every project.
          </p>
          <p>
            <i>"I don’t just code applications — I engineer secure digital experiences."</i>
          </p>
        </div>
        <div className="about-img fade-in" style={{ animationDelay: "0.3s" }}>
          <img
            src="https://res.cloudinary.com/djj2lukes/image/upload/v1758839183/WhatsApp_Image_2025-08-05_at_14.17.10_db9d8238_g8klxm.jpg"
            alt="Kennedy Working"
            className="img-zoom"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
