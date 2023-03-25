import React from "react";
import { useSelector } from "react-redux";
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    const whoArray = useSelector(
        (state) => state.who);
    return (
        <div>
            <ul className="list-group">
                <li className="list-group-item d-flex position-relative">
                    <h4>Who to follow</h4>
                </li>
                {
                    whoArray.map(who =>
                        <WhoToFollowListItem
                            key={who._id}
                            who={who} />
                    )
                }
            </ul>
        </div>
    );
};

export default WhoToFollowList;
