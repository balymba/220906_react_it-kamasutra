import React from "react";
import P from './Post.module.css';

const Post = (props) => {

    return (
        <div className={P.item}>
            <img src='https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg' alt='ERROR!'></img>
            {props.message}
            <div>
                <span>likes: {props.like}</span>
            </div>
        </div>
    )
}

export default Post;