import React from "react";
import { NavLink } from 'react-router-dom';
import style from './DialogItem.module.css'

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div className={style.item}>
            <img src='https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg' alt='ERROR!'></img>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
}

export default DialogItem;