import React from "react";
import { useDispatch } from "react-redux";
import { deleteTuit } from "../tuits/tuits-reducer";
import TuitStats from "./tuits-stats.js";

const TuitItem = (
    {
        tuit
        = {
            _id: 234,
            topic: "Space",
            userName: "SpaceX",
            time: "2h",
            title: "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            image: "./images/spacex.jpeg",
            liked: true,
            replies: 123,
            retuits: 432,
            likes: 2345,
            handle: "@spacex",
            tuit: "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="row position-relative">
                    <div className="col-auto float-left px-1">
                        <img className="rounded-circle float-left" width={50} alt="" src={`/tuiter/images/${tuit.image}`} />
                    </div>
                    <div className="col-10 float-left">
                        <div>
                            <i className="bi bi-x-lg float-end"
                                onClick={() => deleteTuitHandler(tuit._id)}></i>
                            <div id="user-post-details-primary">
                                {tuit.userName}
                            </div>
                            <div id="user-post-details-secondary" className="text-muted mx-2 float-left">
                                {tuit.handle} &#183; {tuit.time}
                            </div>
                            <div id="user-post-caption" className="float-left">
                                {tuit.tuit}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TuitStats key={tuit._id} tuit={tuit} />
        </li>
    );
}

export default TuitItem;
