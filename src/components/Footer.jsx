import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/style/Footer.module.css"; // Import CSS Module

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/features">Features</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/about">About</Link>
      </nav>
      <hr className={styles.divider} />
      <p className={styles.copyright}>&copy; 2024 Company, Inc</p>
    </footer>
  );
}
