import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={styles.content}>
            <div>
                My posts
                <div>
                    <textarea></textarea>
                    <button>Add post</button>
                </div>
                <div className={styles.posts}>
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