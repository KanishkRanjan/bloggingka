import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/style/NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className={styles.homeLink}>Go Back Home</Link>
    </div>
  );
};

export default NotFound;
