const WhoToFollowListItem = (who) => {
    return (`
        <div class="list-group-item d-flex position-relative w-100">
            <div class="m-0 w-25 float-left">
                <img src="${who.avatarIcon}" class="rounded-circle w-50 float-left">
            </div>
            <div class="m-0 w-50 float-left">
                <div class="fw-bold wd-fs-13px">${who.userName}
                    <span class="fa-stack fa-1x wd-fa-stack-no-pad pt-1">
                        <i class="fas fa-circle fa-stack-1x wd-fa-stack-1x-no-pad"></i>
                        <i class="fas fa-check fa-xs fa-stack-1x wd-fa-stack-1x-no-pad fa-inverse"></i>
                    </span>
                </div>
                <div class="fw-normal text-muted wd-fs-13px">@${who.handle}</div>
            </div>
            <div class="m-0 pr-2 w-25 float-left">
                <button class="btn btn-primary rounded-pill pt-1 mt-1 mr-2 float-left">Follow</button>
            </div>
        </div>

    `);
}
export default WhoToFollowListItem;
