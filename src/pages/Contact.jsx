import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../assets/style/ContactStyle.module.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <div className={styles.contactContainer}>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Fill out the form below and we'll get back to you.</p>
        {submitted ? (
          <p className={styles.successMessage}>Thank you! We'll be in touch soon.</p>
        ) : (
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
}
