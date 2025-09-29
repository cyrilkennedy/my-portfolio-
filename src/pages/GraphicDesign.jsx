import React from "react";
import "./../styles/GraphicDesign.css";

function GraphicDesign() {
  return (
    <div className="graphic-design">
      <h2 className="fade-in">Graphic Design Works</h2>
      <p className="fade-in">Here are some of my logos, posters, and UI designs:</p>
      <div className="design-gallery">
        <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759163167/BOOKBUCKS_ej0phj.jpg" alt="Logo Design" className="img-zoom fade-in" />
        <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759163163/sommy_ukesxs.jpg" alt="Poster Design" className="img-zoom fade-in" style={{ animationDelay: "0.3s" }} />
        <img src="https://res.cloudinary.com/djj2lukes/image/upload/v1759163167/HUB_1_ijjhjc.jpg" alt="UI Mockup" className="img-zoom fade-in" style={{ animationDelay: "0.6s" }} />
      </div>
    </div>
  );
}

export default GraphicDesign;
