import React from "react";
import "./../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h2 className="fade-in">My Projects</h2>
      <div className="project-list">
        <div className="project-card fade-in">
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1758884904/Screenshot_50_ozvmwm.png" alt="Portfolio Screenshot" className="img-zoom" />
          <h3>User Registration API – Backend Development & Testing</h3>
          <p>Built and tested a /register API endpoint (localhost:5000) using Postman. Successfully handled JSON user data, returned a 200 OK response, and validated secure user registration flow—first step toward a complete authentication system.</p>
          <a href="https://github.com/cyrilkennedy/api-with-postman-first-.git" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>

        <div className="project-card fade-in" style={{ animationDelay: "0.3s" }}>
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1758890618/Screenshot_40_erseux.png" alt="Cybersecurity Tool" className="img-zoom" />
          <h3> CryptoTrade – Demo Cryptocurrency Trading Platform</h3>
          <p> 
Here’s the shortened, portfolio-ready version for that project:

CryptoTrade – Demo Cryptocurrency Trading Platform
Developed with React + Vite and deployed on Vercel. Features a dark-themed fintech UI with landing page CTAs and a coin listing section (BTC, ETH, XRP). Demonstrates skills in front-end development, deployment, and presenting complex financial data in a user-friendly way. </p>
          <a href="https://github.com/cyrilkennedy/firstapi.git" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
      </div>

      
       <div className="project-list">
       

        <div className="project-card fade-in" style={{ animationDelay: "0.3s" }}>
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759162151/params_bdl8ev.png" alt="Cybersecurity Tool" className="img-zoom" />
          <h3>Node.js/Express API for User Authentication and Account Management</h3>
          <p> Developed a set of RESTful API routes in Node.js/Express to manage user accounts. Features include login, logout, registration, and password reset flows. Implemented dynamic routing with parameters, structured JSON responses, and basic authentication logic — providing the foundation for secure user management in web applications.  </p>
          <a href="https://github.com/cyrilkennedy/register-login-param.git" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>

         <div className="project-card fade-in">
          <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759162009/api_t0cssy.png" alt="Portfolio Screenshot" className="img-zoom" />
          <h3> RESTful API Development — Drug Data Management (Node.js/Express) </h3>
          <p> Built and tested RESTful API endpoints in Node.js/Express for managing drug data. Demonstrated backend skills including data filtering (/drugs/antibiotics, /drugs/prescription), dynamic routing with parameters (/drugs/category/:category), and data transformation (/drugs/names/lowercase, /drugs/formatted) using JavaScript array methods. Added logging via /drugs/log for debugging and monitoring, showcasing practical backend routing and data manipulation techniques.</p>
          <a href="https://github.com/cyrilkennedy/med-tech.git" target="_blank" rel="noreferrer" className="btn">GitHub</a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
