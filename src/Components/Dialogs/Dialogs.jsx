import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem.jsx";
import DialogMessage from "./DialogMessage/DialogMessage";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElement = state.dialogs.map( dialog => { return <DialogItem name={dialog.name} id={dialog.id}/>} );
    let messagesElements = state.messages.map( messages => { return <DialogMessage msg={messages.msg} />});
    let newMessageBody = state.newMessageText;
    
    let newMessageElement = React.createRef();
    
    let newMessage = () => {
        props.AddNewMessageActionCreator();}

    let onMessageChange = (e) => {
        let text = e.target.value;
        props.UpdateNewMessageTextActionCreator(text);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>

                {dialogsElement}

            </div>
            <div className={style.messages}>

                {messagesElements}

                <textarea onChange={onMessageChange} ref={newMessageElement} value={newMessageBody} placeholder='Введите сообшение'></textarea>
                <button onClick={newMessage}>SEND</button>

            </div>
        </div>
    )
}

export default Dialogs;