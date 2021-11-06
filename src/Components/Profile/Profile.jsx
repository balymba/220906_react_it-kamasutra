import React from "react";
import P from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts.jsx";

const Profile = () => {
    return (
        <div className={P.main}>
            <div className={P.logo}>
                <img src='https://dvbsinc.com/wp-content/uploads/2021/03/Workshops-Header-Background.png' alt='test'></img>
            </div>
            <div>
                avatar + description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;