import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import styles from "../assets/style/HomeStyle.module.css"; 
import Footer from "../components/Footer";

export default function Home() {
    const { tag, userid, page , search } = useParams();
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    

    useEffect(() => {
        let API_URL = 'https://dummyjson.com/posts';
        if (tag) {
            API_URL += `/tag/${tag}`;
        }
        if (userid) {
            API_URL += `/user/${userid}`;
        }

        if(search){
            API_URL += `/search?q=${search}`
        }

        API_URL += `${search ? "&":"?"}limit=9&skip=${9 * (page ? parseInt(page) : 0)}`;

        console.log(API_URL);

        const fetchPosts = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setPosts(data.posts);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [tag, userid, page ,search]);

    if (loading) {
        return (
            <>
                <Navbar />
                <div className={styles.loading}>
                    <p>
                        page is loading please wait
                    </p>
                </div>
                <Footer/>
            </>
        );
    }

    if (error) {
        return <p>Error fetching posts: {error}</p>;
    }

    return (
        <>
            <Navbar />
            <div className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.jumbotron}>
                        <h1>Welcome to Bloggingka</h1>
                        <p>
                            Using a series of utilities, you can create this jumbotron, just like
                            the one in previous versions of Bootstrap. Check out the examples
                            below for how you can remix and restyle it to your liking.
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles["post-container"]}>
                {posts.map((post, index) => (
                    <PostCard key={index} postInfo={post} />
                ))}
            </div>
            <div className={styles.pagination}>
                <button
                    className={styles.pageButton}
                    onClick={() => navigate(`/page/${(parseInt(page) || 0) - 1}`)}
                    disabled={parseInt(page) === 0 || !page}
                >
                    Previous
                </button>
                <span className={styles.pageNumber}> Page {parseInt(page) + 1 || 1} </span>
                <button
                    className={styles.pageButton}
                    onClick={() => navigate(`/page/${(parseInt(page) || 0) + 1}`)}
                >
                    Next
                </button>
            </div>
            <Footer />
        </>
    );
}
