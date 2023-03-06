import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
        <div class="row mt-4 pt-2">
            <div class="input-group" id="search-bar">
                <span class="input-group-text bg-white border-right-0 wd-search-bar-icon"><i
                        class="fa fa-search p-1" aria-hidden="true"></i></span>
                <input type="text" class="form-control border-left-0 wd-search-bar-input"
                    placeholder="Search Tuiter" aria-label="Search Tuiter">
            </div>
            <div class="wd-explore-settings p-1">
                <a id="settings-link" href="#"><i class="fa fa-cog fa-2x"></i></a>
            </div>
        </div>
        <div id="tab-row" class="w-100 d-inline-block m-0">
            <ul class="w-100 nav nav-tabs border-0 my-2">
                <li class="nav-item d-flex justify-content-center float-left">
                    <a class="nav-link wd-custom-tag active wd-nav-link-active-custom-color" href="#">For
                        you</a>
                </li>
                <li class="nav-item d-flex justify-content-center float-left">
                    <a class="nav-link wd-nav-link-custom-color" href="#">Trending</a>
                </li>
                <li class="nav-item d-flex justify-content-center float-left">
                    <a class="nav-link wd-nav-link-custom-color" href="#">News</a>
                </li>
                <li class="nav-item d-flex justify-content-center float-left">
                    <a class="nav-link wd-nav-link-custom-color" href="#">Sports</a>
                </li>
                <li class="nav-item d-flex justify-content-center float-left">
                    <a class="nav-link wd-nav-link-custom-color" href="#">Entertainment</a>
                </li>
            </ul>
        </div>
        <div class="card d-inline-block w-100" id="posts-row">
            <div class="d-flex position-relative">
                <img src="../images/Starship-Mk1-Day.jpg" class="card-img-top" alt="SpaceX's Starship">
                <div class="card-img-overlay">
                    <h3 class="card-title text-white position-absolute bottom-0 pb-2">SpaceX's
                        Starship</h3>
                </div>
            </div>
            ${PostSummaryList()}
        </div>
    `);
}
export default ExploreComponent;
