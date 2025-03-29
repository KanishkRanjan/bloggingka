import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../assets/style/Post.module.css"; // Import CSS Module
import Footer from "../components/Footer";

export default function Post() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/posts/${id}`);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setPost(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPost();
    }, [id]);

    if (loading) return <p>Loading post...</p>;
    if (error) return <p>Error fetching post: {error}</p>;
    if (!post) return <p>Post not found</p>;

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                {/* Main Content */}
                <div className={styles.content}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <p className={styles.date}>January 1, 2021 by <Link to={`/user/${post.userId}`}>Mark</Link></p>
                    <p className={styles.body}>{post.body}</p>

                    <blockquote className={styles.blockquote}>
                        Quoted text goes here.
                    </blockquote>

                    <ul className={styles.list}>
                        <li>First list item</li>
                        <li>Second list item with a longer description</li>
                        <li>Third list item to close it out</li>
                    </ul>

                    <p className={styles.tags}>
                        Tags: {post.tags?.map((tag, index) => (
                            <Link to={`/tag/${tag}`} key={index} className={styles.tag}>{tag}</Link>
                        ))}
                    </p>
                    <p className={styles.reactions}>
                        Reactions: {post.reactions?.likes} Likes, {post.reactions?.dislikes} Dislikes
                    </p>
                    <div className="link-btn">
                        {id != 1 && (
                            <Link to={`/post/${id - 1}`} className={styles.previousLink}>Previous</Link>
                        )}
                        <Link to={`/post/${parseInt(id) + 1}`} className={styles.previousLink}>Next</Link>
                    
                    </div>
                </div>

                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    <div className={styles.sidebarSection}>
                        <h3>About</h3>
                        <p>Customize this section to tell your visitors a little about your publication, writers, content, or something else entirely.</p>
                    </div>

                    <div className={styles.sidebarSection}>
                        <h3>Archives</h3>
                        <ul>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/contact">Contact Us</Link></li>
        
                        </ul>
                    </div>
                </aside>
            </div>
            <Footer/>
        </>
    );
}
