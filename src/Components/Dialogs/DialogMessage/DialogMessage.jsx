import React from 'react';
import style from './DialogMessage.module.css'

const DialogMessage = (props) => {
    return (
        <div>
            <div className={style.message}>{props.msg}</div>
        </div>
    )
}

export default DialogMessage;
