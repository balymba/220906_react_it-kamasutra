import React from "react";
import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

let Profile = (props) => {

    return (
        <div>
            <ProfileInfo />
            <div className={style.main}>
                <MyPostsContainer />
            </div>
        </div>
    )
}

export default Profile;