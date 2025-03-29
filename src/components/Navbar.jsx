import React from "react";
import { Link } from "react-router-dom";
import styles from "../assets/style/NavBarStyle.module.css"; // Import CSS Module

const tagLinks = [
    "history",
    "american",
    "crime",
    "french",
    "fiction",
    "english",
    "magical",
    "mystery",
    "love",
    "classic",
    "memory",
    "nostalgia",
];

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-top"]}>
                <Link to="/subscribe" className={styles.subscribe}>Subscribe</Link>
                <Link to="/" className={styles.logo}>BloggingKa</Link>
                <div className={styles.actions}>
                    <button className={styles["search-btn"]}>🔍</button>
                    <button className={styles["signup-btn"]}>Sign up</button>
                </div>
            </div>
            <div className={styles["navbar-bottom"]}>
                {tagLinks.map((tag, index) => (
                    <Link to={`/tag/${tag}`} key={index}> {tag}</Link>
                ))}
            </div>
        </nav>
    );
}
