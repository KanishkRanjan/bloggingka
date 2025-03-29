import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../assets/style/NavBarStyle.module.css"; 

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
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            if (searchTerm.trim()) {
                navigate(`/search/${encodeURIComponent(searchTerm.trim())}`);
            }
        }
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles["navbar-top"]}>
                <Link to="/" className={styles.subscribe}>Subscribe</Link>
                <Link to="/" className={styles.logo}>BloggingKa</Link>
                <div className={styles.actions}>
                    <input
                        type="text"
                        placeholder="Search... eg.love"
                        className={styles["search-input"]}
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
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
