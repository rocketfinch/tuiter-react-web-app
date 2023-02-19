import posts from "./posts.js";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (`
            <div class="card-body p-0">
            ${posts.map(post => {
        return (PostSummaryItem(post));
    }).join('')}
            </div>
    `);
}
export default PostSummaryList;
