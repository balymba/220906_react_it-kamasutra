import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements = 
        props.posts.map( post => { return <Post key={post.id} message={post.message} like={post.likesCount} />});

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        debugger
        props.UpdateNewPostTextActionCreator(text);
    }
        
    return (
        <div className={styles.content}>
            <div>
                My posts
                <div>
                    <div>
                        <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
                    </div>
                    <div>
                        <button onClick={onAddPost}>Add post</button>
                    </div>
                </div>
                <div className={styles.posts}>

                    {postsElements}

                </div>
            </div>
        </div>
    )
}

export default MyPosts;