import React from "react";
import NavigationSidebar from "../navigation-sidebar";
import EditProfileComponent from "./edit-profile.js";
import WhoToFollowList from "../who-to-follow-list";


const ProfileScreen = () => {
    return (
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="profile" />
            </div>
            <div className="mt-4 pt-2 col-10 col-md-10 col-lg-7 col-xl-6"
                style={{ "position": "relative" }}>
                <EditProfileComponent />
            </div>
            <div className="mt-4 pt-2 d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList />
            </div>
        </div>
    );
}

export default ProfileScreen;
