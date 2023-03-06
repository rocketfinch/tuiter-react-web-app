import React from "react";
import "../styles.css"

function PostSummaryItemTopic(post) {
    if (Object.hasOwn(post, "topic") && (post.topic !== "")) {
        return (
            <div className="px-1 text-muted wd-fs-13px fw-bolder">
                {post.topic}
            </div>
        );
    }
}

function PostSummaryItemTuits(post) {
    if (Object.hasOwn(post, "tuits")) {
        return (
            <div className="px-1 text-muted wd-fs-13px">
                {post.tuits}
            </div>
        );
    }
}

const PostSummaryItem = (
    {
        post = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla.jpeg"
        }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row py-1">
                <div className="col-10 p-1">
                    <div className="fw-bold float-left px-1 wd-fs-15px">{post.userName}
                        <span className="text-muted fw-normal px-1 wd-fs-13px"> · {post.time}</span>
                    </div>
                    {PostSummaryItemTopic(post)}
                    <div className="wd-fs-15px w-100 px-1">{post.title}</div>
                    {PostSummaryItemTuits(post)}
                </div>
                <div className="col-2 py-3 px-1">
                    <img width={70} className="float-end rounded-3" src={`/tuiter/images/${post.image}`} />
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;
