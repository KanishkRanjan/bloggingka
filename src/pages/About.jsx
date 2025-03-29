import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../assets/style/AboutStyle.module.css";

export default function About() {
  return (
    <>
      <Navbar />
      <div className={styles.aboutContainer}>
        <div className={styles.heroSection}>
          <h1>About Us</h1>
          <p>Empowering creators, one story at a time.</p>
        </div>
        <div className={styles.contentSection}>
          <h2>Our Mission</h2>
          <p>
            At Bloggingka, we believe in the power of stories. Our platform is
            dedicated to giving writers, influencers, and thought leaders the
            space to share their experiences and insights with the world.
          </p>
          <h2>Who We Are</h2>
          <p>
            Bloggingka was founded with the vision of creating a modern, sleek,
            and easy-to-use blogging platform. With a minimalistic yet bold
            design, we aim to provide a seamless reading and writing experience.
          </p>
          <h2>Join Us</h2>
          <p>
            Whether you're here to share your thoughts or discover new ideas,
            Bloggingka is your space to grow and engage with a like-minded
            community.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
