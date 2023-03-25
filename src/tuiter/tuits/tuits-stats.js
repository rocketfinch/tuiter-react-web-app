import React from "react";
import { likeTuit, unlikeTuit } from "../tuits/tuits-reducer";
import { useDispatch } from "react-redux";

const TuitStats = (
    {
        tuit
        = {
            _id: 234,
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            image: "../images/spacex.jpeg",
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {

    let like_icon_classes = (tuit.liked === true ? "bi bi-heart-fill text-danger px-2" : "bi bi-heart text-secondary px-2");
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        if (tuit.liked === false) {
            dispatch(likeTuit(tuit._id));
        } else {
            dispatch(unlikeTuit(tuit._id));
        }
    }
    return (
        <div id="user-post-statistics" className="row wd-fs-15px mx-4 py-2">
            <div className="col-3 w-100 wd-user-post-stat">
                <a href="./#"><i className="bi bi-chat-fill text-secondary px-2"></i>
                    <p className="text-secondary">{Object.hasOwn(tuit, "replies") === true ? tuit.replies : ""}</p>
                </a>
            </div>
            <div className="col-3 w-100 wd-user-post-stat">
                <a href="./#"><i className="bi bi-arrow-repeat text-secondary px-2"></i>
                    <p className="text-secondary">{Object.hasOwn(tuit, "retuits") === true ? tuit.retuits : ""}</p>
                </a>
            </div>
            <div className="col-3 w-100 wd-user-post-stat wd-selected-stat">
                <a href="./#" onClick={() => likeTuitHandler(tuit)}><i className={like_icon_classes}></i>
                    <p className="text-secondary">{Object.hasOwn(tuit, "likes") === true ? tuit.likes : ""}</p>
                </a>
            </div>
            <div className="col-3 w-100 wd-user-post-stat">
                <a href="./#"><i className="bi bi-share text-secondary px-2"></i></a>
            </div>
        </div>
    );
}
export default TuitStats;
