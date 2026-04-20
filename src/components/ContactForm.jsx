"use client";

import emailjs from "@emailjs/browser";
import { useState } from "react";

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_793pd09";
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_mcywy3q";
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "NfgYoXW9nEbWEa3lE";

export default function ContactForm() {
  const [status, setStatus] = useState({ type: "idle", message: "" });

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus({ type: "loading", message: "Sending your message..." });

    try {
      await emailjs.sendForm(serviceId, templateId, event.currentTarget, publicKey);
      event.currentTarget.reset();
      setStatus({
        type: "success",
        message: "Message sent successfully. I will get back to you soon.",
      });
    } catch {
      setStatus({
        type: "error",
        message: "The message could not be sent right now. Please try again shortly.",
      });
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label className="field">
        <span>Name</span>
        <input type="text" name="name" placeholder="Your name" required />
      </label>
      <label className="field">
        <span>Email</span>
        <input type="email" name="email" placeholder="Your email" required />
      </label>
      <label className="field">
        <span>Message</span>
        <textarea name="message" placeholder="Tell me about your project or opportunity" rows="6" required />
      </label>
      <button type="submit" className="button">
        {status.type === "loading" ? "Sending..." : "Send message"}
      </button>
      <p className={`form-status is-${status.type}`} aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
