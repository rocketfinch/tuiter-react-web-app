import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <div class="list-group mt-4 pt-2">
            <div class="list-group-item d-flex position-relative w-100">
                <h6 id="who-to-follow-header" class="pt-1">Who to follow</h6>
            </div>
            ${who.map(who => {
        return (WhoToFollowListItem(who));
    }).join('')}
        </div>
    `);
}

export default WhoToFollowList;
