import React from "react";
import emailjs from "emailjs-com";
import "./../styles/Contact.css";
import { toast } from "react-toastify";

function Contact() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_793pd09",   // Replace with your service ID
        "template_mcywy3q",  // Replace with your template ID
        e.target,
        "NfgYoXW9nEbWEa3lE"    // Replace with your public key
      )
      .then(() => {
        toast.success("Message sent successfully!");
      })
      .catch((err) => {
        toast.success("Failed to send: " + err.text);
      });
  }

  return (
    <div className="contact fade-in">
      <h2>Contact Me</h2>
      <form className="contact-form fade-in" onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send</button>
      </form>

      <div className="contact-extra fade-in" style={{ animationDelay: "0.3s" }}>
        <img
          src="https://res.cloudinary.com/djj2lukes/image/upload/v1758839183/WhatsApp_Image_2025-08-05_at_14.17.10_db9d8238_g8klxm.jpg"
          alt="Contact illustration"
          className="img-zoom"
        />
        <p>
          You can also reach me on: 
          <a href="https://linkedin.com" target="_blank" rel="noreferrer"> LinkedIn</a> | 
          <a href="https://github.com" target="_blank" rel="noreferrer"> GitHub</a>
        </p>
      </div>
    </div>
  );
}

export default Contact;
