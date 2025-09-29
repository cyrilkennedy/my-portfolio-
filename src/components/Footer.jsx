import React from "react";
import "./../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Kennedy. All Rights Reserved.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/cyril-kennedy-28130b306" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="https://github.com/cyrilkennedy" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://x.com/Kennyford70?t=HGGfSpBKcOXAN_tfD3GeVw&s=09" target="_blank" rel="noreferrer"> X [Twitter]</a>
      </div>
    </footer>
  );
}

export default Footer;
