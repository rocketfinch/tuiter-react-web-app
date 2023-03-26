import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)[0];

    const dob_formatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    const dj_formatter = new Intl.DateTimeFormat('en-US', { month: 'short', year: 'numeric' });

    const dateOfBirth_formatted = dob_formatter.format(new Date(profile.dateOfBirth));
    const dateJoined_formatted = dj_formatter.format(new Date(profile.dateJoined));

    return (
        <>
            <div className="row">
                <div className="col-1">
                    <Link to="/tuiter/"><i class="bi bi-arrow-left text-muted"></i></Link>
                </div>
                <div className="col-11">
                    <h5>{profile.firstName} {profile.lastName}</h5>
                    <h6 className="text-muted">{profile.tuitsCount} Tuits</h6>
                </div>
            </div>
            <div className="row d-flex">
                <img className="w-100" alt="" src={`/tuiter/images/${profile.bannerPicture}`}></img>
                <img width={100} className="w-25 rounded-circle position-absolute top-50 start-0 translate-middle-y mx-2" alt="" src={`/tuiter/images/${profile.profilePicture}`}></img>
            </div>
            <div className="row mb-5">
                <div className="col-8">
                </div>
                <div className="col-4 d-flex align-items-end flex-column">
                    <Link to="/tuiter/edit-profile/">
                        <button className="rounded-pill btn text-dark btn-outline-secondary mx-2 mt-2 ps-3 pe-3 fw-bold">
                            Edit Profile
                        </button>
                    </Link>
                </div>
            </div>
            <div className="row mt-5">
                <div className="mx-2 px-1">
                    <h4 className="fw-bold">{profile.firstName} {profile.lastName}</h4>
                    <h6 className="fw-normal text-muted">{profile.handle}</h6>
                </div>
            </div>
            <div className="row my-2">
                <div className="mx-2 px-1">
                    {profile.bio}
                </div>
            </div>
            <div className="mt-3">
                <div className="d-flex flex-row align-items-start">
                    <div className={`d-flex align-items-start pe-2 ${profile.location === '' ? 'd-none' : ''}`}>
                        <i className="bi bi-geo-alt text-muted pe-1"></i>
                        <p className="text-muted">{profile.location}</p>
                    </div>
                    <div className={`d-flex align-items-start px-2 ${profile.website === '' ? 'd-none' : ''}`}>
                        <i className="bi bi-link-45deg text-muted pe-1"></i>
                        <p className="text-muted"><a href={profile.website}>{profile.website}</a></p>
                    </div>
                    <div className={`d-flex align-items-start px-2 ${profile.dateOfBirth === '' ? 'd-none' : ''}`}>
                        <i className="bi bi-balloon text-muted pe-1"></i>
                        <p className="text-muted">Born {dateOfBirth_formatted}</p>
                    </div>
                    <div className="d-flex align-items-start px-2">
                        <i className="bi bi-calendar3 text-muted pe-1"></i>
                        <p className="text-muted">Joined {dateJoined_formatted}</p>
                    </div>
                </div>
            </div>
            <div>
                <div className="d-flex flex-row align-items-start">
                    <div className="d-flex align-items-start pe-3">
                        <p className="fw-bold pe-1">{profile.followingCount}</p><p className="text-muted px-1">Following</p>
                    </div>
                    <div className="d-flex align-items-start px-3">
                        <p className="fw-bold pe-1">{profile.followersCount}</p><p className="text-muted px-1">Followers</p>
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProfileComponent;
