import posts from "./posts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
        <div class="pt-1 d-inline-block position-relative w-100">
            ${posts.map(post => {
        return (PostItem(post));
    }).join('')}
    </div>
    `);
}
export default PostList;
