import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../assets/style/PostCard.module.css";

const PostCard = ({ postInfo }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate(`/post/${postInfo.id}`);
  };

  return (
    <div className={styles.post} onClick={handleRedirect} style={{ cursor: "pointer" }}>
      <div className={styles["post-image"]}>
        <img
          src={`https://picsum.photos/id/${postInfo.id}/600/400`}
          alt={postInfo.title}
        />
        <span className={styles.category}>{postInfo.tags[0] || "General"}</span>
      </div>

      <div className={styles["post-body"]}>
        <h3 className={styles["post-title"]}>{postInfo.title}</h3>
        <p className={styles["post-description"]}>{postInfo.body}</p>
        <div className={styles["post-footer"]}>
          <button className={styles.btn}>View</button>
          <span className={styles.time}>{postInfo.date || "Just now"}</span>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
