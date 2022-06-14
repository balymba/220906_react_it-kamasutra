import React from 'react';
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={style.main}>
                <div className={style.logo}>
                    <img src='https://dvbsinc.com/wp-content/uploads/2021/03/Workshops-Header-Background.png' alt='test'></img>
                </div>
                <div>
                    <p>avatar + description</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;
