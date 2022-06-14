import React from "react";
import style from './BestFriends.module.css';

const BestFriends = (props) => {

    let friends = props.state.sidebarPage.bestFriends.map(name => {
        return (
            <div className={style.listTopFriends}>
                <img src='https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg' alt='ERROR!'></img>
                <p className={style.listTopFriends}>{name.name}</p>
            </div>
        )
    })

    return (
        <div>
            <p className={style.text}>Best friends</p>
            {friends}
        </div>
    )

}

export default BestFriends;