import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";
import "../styles.css";


const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <div>
            <div className="list-group my-1">
                <a href="./#" className="list-group-item list-group-item-action">
                    <i className="bi bi-twitter wd-font-color-tuiter-blue py-1"></i></a>
                <Link to="/tuiter/home/" className={`list-group-item list-group-item-action wd-custom-list-group-item
                        ${active === 'home' ? 'active' : ''}`}>
                    <i className="bi bi-house-door-fill py-1" aria-hidden="true"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Home
                    </span>
                </Link>
                <Link to="/tuiter/explore/" className={`list-group-item list-group-item-action wd-custom-list-group-item
                        ${active === 'explore' ? 'active' : ''}`}>
                    <i className="bi bi-hash py-1" aria-hidden="true"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Explore
                    </span>
                </Link>
                <Link to="/" className="list-group-item">
                    <i className="bi bi-card-text py-1" aria-hidden="true"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Labs
                    </span>
                </Link>
                <a href="./#" className={`list-group-item list-group-item-action wd-custom-list-group-item
                        ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="bi bi-bell-fill py-1" aria-hidden="true"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Notifications
                    </span>
                </a>
                <a href="./#" className={`list-group-item list-group-item-action wd-custom-list-group-item
                        ${active === 'messages' ? 'active' : ''}`}>
                    <i className="bi bi-envelope-fill py-1" aria-hidden="true"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Messages
                    </span>
                </a>
                <a href="bookmarks/index.html" className={`list-group-item list-group-item-action wd-custom-list-group-item
                        ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="bi bi-bookmark-fill py-1" aria-hidden="true"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Bookmarks
                    </span>
                </a>
                <a href="./#" className={`list-group-item list-group-item-action wd-custom-list-group-item
                        ${active === 'lists' ? 'active' : ''}`}>
                    <i className="bi bi-list-ul py-1" aria-hidden="true"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Lists
                    </span>
                </a>
                <a href="profile.html" className={`list-group-item list-group-item-action wd-custom-list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                    <i className="bi bi-person-fill py-1"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        Profile
                    </span>
                </a>
                <a href="./#" className={`list-group-item list-group-item-action wd-custom-list-group-item
                        ${active === 'more' ? 'active' : ''}`}>
                    <i className="bi bi-three-dots py-1" aria-hidden="true"></i>
                    <span className="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                        More
                    </span>
                </a>
            </div>
        </div>

    );
};
export default NavigationSidebar;
