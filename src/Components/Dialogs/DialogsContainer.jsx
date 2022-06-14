import React from "react";
import { connect } from "react-redux";
import { AddNewMessageActionCreator, UpdateNewMessageTextActionCreator } from "../../Redux/dialogsPageReducer";
import Dialogs from "./Dialogs";

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage}
}

let mapDispatchToProps = (dispatch) => {
    return {
        UpdateNewMessageTextActionCreator: () => {
            dispatch(AddNewMessageActionCreator());},
        AddNewMessageActionCreator: (text) => {
            dispatch(UpdateNewMessageTextActionCreator(text));}}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;