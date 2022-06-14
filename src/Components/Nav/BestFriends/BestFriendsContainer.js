import React from "react";
import MyContext from "../../../StoreContext";
import style from '../Nav.module.css';

const BestFriendsContainer = (props) => {
    return(
        <MyContext.Consumer style={props}>
            {(store) => {

                let state = store.getState().sidebarPage;

                let friends = state.bestFriends.map(name => {

                    return (
                        <div className={style.listTopFriends}>
                            <img src='https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg' alt='ERROR!'></img>
                            <p className={style.listTopFriends}>{name.name}</p>
                        </div>)})
                debugger
                return (
                    <div>
                        <p className={style.text}>Best friends</p>
                        {friends}
                    </div>)}}
        </MyContext.Consumer>
    )
}

// export default BestFriendsContainer;