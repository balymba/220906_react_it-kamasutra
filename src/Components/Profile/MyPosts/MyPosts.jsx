import React from "react";
import P from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={P.content}>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={P.posts}>
                    <Post message='How are you?' like='15'/>
                    <Post message='It`s my first post!' like='20'/>
                    {/* <Post/>
                    <Post/> */}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;