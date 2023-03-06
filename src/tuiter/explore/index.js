import React from "react";
import PostSummaryList from "../post-summary-list";
import "../styles.css";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                        className="form-control rounded-pill ps-5" />
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 wd-font-color-tuiter-blue float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <div id="tab-row" className="w-100 d-inline-block m-0">
                <ul className="w-100 nav nav-tabs border-0 my-2">
                    <li className="nav-item d-flex justify-content-center float-left">
                        <a className="nav-link wd-custom-tag active wd-nav-link-active-custom-color" href="#">For
                            you</a>
                    </li>
                    <li className="nav-item d-flex justify-content-center float-left">
                        <a className="nav-link wd-nav-link-custom-color" href="#">Trending</a>
                    </li>
                    <li className="nav-item d-flex justify-content-center float-left">
                        <a className="nav-link wd-nav-link-custom-color" href="#">News</a>
                    </li>
                    <li className="nav-item d-flex justify-content-center float-left">
                        <a className="nav-link wd-nav-link-custom-color" href="#">Sports</a>
                    </li>
                    <li className="nav-item d-flex justify-content-center float-left">
                        <a className="nav-link wd-nav-link-custom-color" href="#">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div className="position-relative mb-2">
                <img src="/tuiter/images/Starship-Mk1-Day.jpg" className="w-100" alt="SpaceX's Starship" />
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList />
        </>
    );
};
export default ExploreComponent;
