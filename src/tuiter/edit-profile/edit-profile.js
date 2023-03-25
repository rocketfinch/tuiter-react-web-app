import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { updateProfile } from "../reducers/profile-reducer";
import "../styles.css";
import "./index.css";

const EditProfileComponent = () => {
    const currentProfile = useSelector(state => state.profile)[0];
    const [currentProfile_firstName, setProfile_firstName] = useState(currentProfile.firstName);
    const [currentProfile_lastName, setProfile_lastName] = useState(currentProfile.lastName);
    const [currentProfile_bio, setProfile_bio] = useState(currentProfile.bio);
    const [currentProfile_location, setProfile_location] = useState(currentProfile.location);
    const [currentProfile_website, setProfile_website] = useState(currentProfile.website);
    const [currentProfile_dateOfBirth, setProfile_dateOfBirth] = useState(currentProfile.dateOfBirth);

    const dispatch = useDispatch();
    const saveProfileClickHandler = () => {
        const savedProfile = {
            firstName: currentProfile_firstName,
            lastName: currentProfile_lastName,
            handle: currentProfile.handle,
            profilePicture: currentProfile.profilePicture,
            bannerPicture: currentProfile.bannerPicture,
            bio: currentProfile_bio,
            website: currentProfile_website,
            location: currentProfile_location,
            dateOfBirth: currentProfile_dateOfBirth,
            dateJoined: currentProfile.dateJoined,
            followingCount: currentProfile.followingCount,
            followersCount: currentProfile.followersCount,
            tuitsCount: currentProfile.tuitsCount,
        }
        dispatch(updateProfile(savedProfile));
    }

    return (
        <>
            <div className="container border">
                <div className="row my-1">
                    <div className="col-1 mt-2 pt-1">
                        <Link to="/tuiter/profile/">
                            <i className="bi bi-x-lg text-muted float-start"></i>
                        </Link>
                    </div>
                    <div className="col-5 mt-2 pt-1">
                        <h5>Edit Profile</h5>
                    </div>
                    <div className="col-6 mt-1">
                        <Link to="/tuiter/profile/">
                            <button className="rounded-pill btn btn-dark float-end ps-3 pe-3 fw-bold" onClick={saveProfileClickHandler}>Save</button>
                        </Link>
                    </div>
                </div>
                <div className="row mt-2">
                    <img className="w-100 px-0" alt="" src={`/tuiter/images/${currentProfile.bannerPicture}`}></img>
                    <div className="row mt-5 position-relative">
                        <img width={100} className="w-25 rounded-circle position-absolute bottom-0 start-0 mx-2 mt-5" alt="" src={`/tuiter/images/${currentProfile.profilePicture}`}></img>
                    </div>

                </div>
                <div className="row mt-5 mx-2">
                    <div className="border">
                        <label for="first-name-field" className="text-muted wd-label-small-size">First name</label>
                        <textarea id="first-name-field" rows="1" value={currentProfile_firstName}
                            className="form-control border-0 p-0 wd-textarea"
                            onChange={(event) => setProfile_firstName(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-2 mx-2">
                    <div className="border">
                        <label for="last-name-field" className="text-muted wd-label-small-size">Last name</label>
                        <textarea id="last-name-field" rows="1" value={currentProfile_lastName}
                            className="form-control border-0 p-0 wd-textarea"
                            onChange={(event) => setProfile_lastName(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-2 mx-2">
                    <div className="border">
                        <label for="bio-field" className="text-muted wd-label-small-size">Bio</label>
                        <textarea id="bio-field" rows="auto" value={currentProfile_bio}
                            className="form-control border-0 p-0 wd-textarea"
                            onChange={(event) => setProfile_bio(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-2 mx-2">
                    <div className="border">
                        <label for="location-field" className="text-muted wd-label-small-size">Location</label>
                        <textarea id="location-field" rows="1" value={currentProfile_location}
                            className="form-control border-0 p-0 wd-textarea"
                            onChange={(event) => setProfile_location(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-2 mx-2">
                    <div className="border">
                        <label for="website-field" className="text-muted wd-label-small-size">Website</label>
                        <textarea id="website-field" rows="1" value={currentProfile_website}
                            className="form-control border-0 p-0 wd-textarea"
                            onChange={(event) => setProfile_website(event.target.value)}>
                        </textarea>
                    </div>
                </div>
                <div className="row my-2 mx-2">
                    <div className="border">
                        <label for="dob-field" className="text-muted wd-label-small-size">Birth date</label>
                        <textarea id="dob-field" rows="1" value={currentProfile_dateOfBirth}
                            className="form-control border-0 p-0 wd-textarea"
                            onChange={(event) => setProfile_dateOfBirth(event.target.value)}>
                        </textarea>
                    </div>
                </div>
            </div>
        </>
    );
}
export default EditProfileComponent;
