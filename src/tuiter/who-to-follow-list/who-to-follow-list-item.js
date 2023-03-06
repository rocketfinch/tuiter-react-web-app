import React from "react";
const WhoToFollowListItem = (
    {
        who = { userName: 'NASA', handle: 'NASA', avatarIcon: 'nasa.jpg' }
    }
) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} alt="" src={`/tuiter/images/${who.avatarIcon}`} />
                </div>
                <div className="col-8">
                    <div className="fw-bold">{who.userName}</div>
                    <div className="d-flex position-relative">@{who.handle}</div>
                </div>
                <div className="col-2 py-1">
                    <button className="btn btn-primary rounded-pill float-end
                    wd-bg-color-tuiter-blue wd-border-color-tuiter-blue">Follow</button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;
