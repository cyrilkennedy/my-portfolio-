import React from "react";
import "./../styles/About.css";

function About() {
  return (
    <div className="about">
      <div className="about-container fade-in">
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi, I'm Kennedy. I specialize in Full-Stack Development (React, Node.js), 
            Cybersecurity (ethical hacking, penetration testing), and Graphic Design.
          </p>
          <p>
            I studied at <b>Smart Hub Tech School</b> and completed an internship 
            focusing on web development and security analysis.
          </p>
        </div>
        <div className="about-img fade-in" style={{ animationDelay: "0.3s" }}>
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1758839183/WhatsApp_Image_2025-08-05_at_14.17.10_db9d8238_g8klxm.jpg" alt="Kennedy Working" className="img-zoom" />
        </div>
      </div>
    </div>
  );
}

export default About;
