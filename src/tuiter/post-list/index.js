import React from "react";
import postsArray from "./posts.json";
import PostItem from "./post-item";
import "../styles.css";

const PostList = (
    {
        posts = postsArray
    }
) => {
    return (
        <ul className="list-group pt-1 d-inline-block position-relative w-100">
            {
                posts.map(post =>
                    <PostItem
                        key={post._id} post={post} />)
            }
        </ul>
    );
};
export default PostList;
