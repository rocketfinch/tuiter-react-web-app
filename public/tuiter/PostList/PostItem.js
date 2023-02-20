const PostItem = (post) => {

    const top_post = (`
        <div class="position-relative d-inline-block">
            <div class="float-left w-25 px-1">
                <img id="user-photo" src="${post.userImg}">
            </div>
            <div id="user-post-details" class="float-left px-1">
                <div id="user-post-details-primary">
                    ${post.userName}
                </div>
                <div id="user-post-details-secondary">
                    @${post.userHandle} &#183; ${post.time}
                </div>
                <div id="user-post-caption">
                    ${post.caption}
                </div>
            </div>
        </div>
    `);

    let linked_div = "";
    if (post.type === "linkedArticle") {
        linked_div = (`
            <div id="user-post-linked-article">
                <img id="user-post-article-photo" src="`) + post.articleImage + (`">
                <div id="user-post-article-text">
                    <div id="user-post-article-title">
                        `) + post.articleTitle + (`
                    </div>
                    <div id="user-post-article-caption">
                        `) + post.articleCaption + (`
                    </div>
                </div>
            </div>
        `);
    }

    const post_image = post.type === "withPicture" ? ("<img id='user-post-tuit-photo' class='pt-1 px-4' src=" + post.image + ">") : "";

    const post_statistics = (`
        <div id="user-post-statistics" class="mx-2 pt-1 pb-2">
            <div class="wd-user-post-stat">
                <a href="#"><i class="fa fa-comment"></i>
                    <p class="wd-user-post-stat-numbers">${Object.hasOwn(post, "numComments") === true ? post.numComments : ""}</p>
                </a>
            </div>
            <div class="wd-user-post-stat">
                <a href="#"><i class="fa fa-retweet"></i>
                    <p class="wd-user-post-stat-numbers">${Object.hasOwn(post, "numRetuits") === true ? post.numRetuits : ""}</p>
                </a>
            </div>
            <div class="wd-user-post-stat wd-selected-stat">
                <a href="#"><i class="fa fa-solid fa-heart"></i>
                    <p class="wd-user-post-stat-numbers">${Object.hasOwn(post, "numLikes") === true ? post.numLikes : ""}</p>
                </a>
            </div>
            <div class="wd-user-post-stat">
                <a href="#"><i class="fa fa-upload"></i>${Object.hasOwn(post, "numShares") === true ? post.numShares : ""}</a>
            </div>
        </div>
    `);


    return top_post + linked_div + post_image + post_statistics;

}
export default PostItem;
