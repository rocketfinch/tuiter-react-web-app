function PostSummaryItemTopic(post) {
    if (Object.hasOwn(post, "topic") && (post.topic !== "")) {
        return (`
            <div class="px-1 text-muted wd-fs-13px">
                ${post.topic}
            </div>
        `);
    }
    return (``);
}

const PostSummaryItemAuthor = (post) => {
    return (`
        <div class="px-1 d-inline-block wd-suggested-post-author">
            <div class="float-left fw-bolder wd-fs-15px">
                ${post.userName}
                <span class="fa-stack fa-1x wd-fa-stack-no-pad pt-1">
                    <i class="fas fa-circle fa-stack-1x wd-fa-stack-1x-no-pad"></i>
                    <i class="fas fa-check fa-xs fa-stack-1x wd-fa-stack-1x-no-pad fa-inverse"></i>
                </span>
                <span class="text-muted fw-normal px-1 wd-fs-13px">&centerdot; ${post.time}</span>
            </div>
        </div>
    `);
}

const PostSummaryItemTitle = (post) => {
    return (`
        <div class="px-1 fw-bold wd-fs-15px">
            ${post.title}
        </div>
    `);
}

function PostSummaryItemTuits(post) {
    if (Object.hasOwn(post, "tuits")) {
        return (`
        <div class="px-1 text-muted wd-fs-13px">
            ${post.tuits}
        </div>
        `);
    }
    return (``);
}

const PostSummaryItemImage = (post) => {
    return (`
        <div class="p-1 d-inline-block wd-suggested-post-picture-section">
            <img class="wd-suggested-post-picture" src="${post.image}">
        </div>
    `);
}


const PostSummaryItem = (post) => {
    return (`
    <div class="py-1 d-inline-block position-relative w-100 wd-suggested-post-trending-border-top">
        <div class="p-1 wd-suggested-post-text-section">
            ${PostSummaryItemTopic(post)}
            ${PostSummaryItemAuthor(post)}
            ${PostSummaryItemTitle(post)}
            ${PostSummaryItemTuits(post)}
        </div>
        ${PostSummaryItemImage(post)}
    </div>
    `);
}
export default PostSummaryItem;
