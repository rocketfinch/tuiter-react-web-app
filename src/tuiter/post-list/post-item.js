import React from "react";

const PostItem = (
    {
        post
        = {
            type: "withPicture",
            userName: 'NASA',
            userImg: "../images/nasa.jpg",
            userHandle: 'NASA',
            time: '2h',
            caption: "It’s a great big universe\… Webb’s new view of Pandora’s Cluster stitches 4 snapshots together into a panorama, showing 3 separate galaxy clusters merging into a megacluster and some 50,000 sources of near-infrared light.",
            image: './images/webb-pandora-cluster.jpg',
            numComments: "205",
            numReTuits: "2357",
            numLikes: "13.7K"
        }
    }
) => {
    let linked_div = <></>;
    if (post.type === "linkedArticle") {
        linked_div = (
            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-11">
                    <div className="card border-secondary">
                        <img className="card-img-top" src={post.articleImage} />
                        <div className="mt-3">
                            <div className="card-title fw-bold mx-2">
                                {post.articleTitle}
                            </div>
                            <div className="card-text text-muted my-1 mx-2">
                                {post.articleCaption}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    let post_image = <></>;
    if (post.type === "withPicture") {
        post_image = (
            <div className="row mt-2">
                <div className="col-1"></div>
                <div className="col-11">
                    <img
                        className='py-2 w-100 wd-border-rounded' src={post.image} />
                </div>
            </div>
        );
    }

    return (
        <li className="list-group-item">
            <div className="row">
                <div className="row position-relative">
                    <div className="col-1 float-left px-1">
                        <img className="w-100 rounded-circle float-left" src={post.userImg} />
                    </div>
                    <div className="col-11 float-left">
                        <div id="user-post-details-primary">
                            {post.userName}
                        </div>
                        <div id="user-post-details-secondary" className="text-muted mx-2 float-left">
                            @{post.userHandle} &#183; {post.time}
                        </div>
                        <div id="user-post-caption" className="float-left">
                            {post.caption}
                        </div>
                    </div>
                </div>
                {linked_div}
                {post_image}
                <div id="user-post-statistics" className="row mx-4 py-2">
                    <div className="col-3 w-100 wd-user-post-stat">
                        <a href="#"><i className="bi bi-chat-fill px-2"></i>
                            <p className="wd-user-post-stat-numbers">{Object.hasOwn(post, "numComments") === true ? post.numComments : ""}</p>
                        </a>
                    </div>
                    <div className="col-3 w-100 wd-user-post-stat">
                        <a href="#"><i className="bi bi-arrow-repeat px-2"></i>
                            <p className="wd-user-post-stat-numbers">{Object.hasOwn(post, "numReTuits") === true ? post.numReTuits : ""}</p>
                        </a>
                    </div>
                    <div className="col-3 w-100 wd-user-post-stat wd-selected-stat">
                        <a href="#"><i className="bi bi-heart-fill px-2"></i>
                            <p className="wd-user-post-stat-numbers">{Object.hasOwn(post, "numLikes") === true ? post.numLikes : ""}</p>
                        </a>
                    </div>
                    <div className="col-3 w-100 wd-user-post-stat">
                        <a href="#"><i className="bi bi-upload px-2"></i>{Object.hasOwn(post, "numShares") === true ? post.numShares : ""}</a>
                    </div>
                </div>
            </div>
        </li>
    );
}
export default PostItem;
