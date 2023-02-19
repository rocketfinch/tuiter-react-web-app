const NavigationSidebar = () => {
    return (`
    <div id="back-link" class="p-1">
        <a href="../navigation.html">Back</a>
    </div>
    <div class="list-group my-1">
        <a href="../home.html" class="list-group-item list-group-item-action">
            <i class="fab fa-twitter pt-2 pb-2"></i></a>
        <a href="../../home.html" class="list-group-item list-group-item-action">
            <i class="fa fa-home py-1" aria-hidden="true"></i>
            <span class="float-left w-25 p-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                Home
            </span>
        </a>
        <a href="index.html" class="list-group-item list-group-item-action active">
            <i class="fa fa-hashtag py-1" aria-hidden="true"></i>
            <span class="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                Explore
            </span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-bell py-1" aria-hidden="true"></i>
            <span class="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                Notifications
            </span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-envelope py-1" aria-hidden="true"></i>
            <span class="float-left w-25 px-2 py-1 d-none d-xl-inline-block d-xxl-inline-block">
                Messages
            </span>
        </a>
        <a href="../../bookmarks/index.html" class="list-group-item list-group-item-action">
            <i class="fa fa-bookmark py-1" aria-hidden="true"></i>
            <span class="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                Bookmarks
            </span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <i class="fa fa-list py-1" aria-hidden="true"></i>
            <span class="w-25 px-2 py-1 d-none d-xl-inline-block d-xxl-inline-block">
                Lists
            </span>
        </a>
        <a href="../profile.html" class="list-group-item list-group-item-action">
            <i class="fa fa-user py-1"></i>
            <span class="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                Profile
            </span>
        </a>
        <a href="#" class="list-group-item list-group-item-action">
            <span class="fa-stack fa-1x wd-fa-stack-no-pad py-1">
                <i class="fas fa-circle fa-stack-1x wd-fa-stack-1x-no-pad"></i>
                <i class="fas fa-ellipsis-h fa-xs fa-stack-1x wd-fa-stack-1x-no-pad fa-inverse"></i>
            </span>
            <span class="float-left w-25 px-2 py-1 d-sm-none d-md-none d-lg-none d-xl-inline-block d-xxl-inline-block">
                More
            </span>
        </a>
    </div>
    <div class="d-grid mt-2">
        <a href="../tuit.html"
            class="btn btn-primary btn-block rounded-pill">
            Tuit</a>
    </div>
    `);
}
export default NavigationSidebar;
