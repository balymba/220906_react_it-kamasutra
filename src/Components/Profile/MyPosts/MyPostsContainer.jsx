import React from "react";
import { connect } from "react-redux";
import { AddPostActionCreator, UpdateNewPostTextActionCreator } from "../../../Redux/profilePageReducer";
import MyPosts from "./MyPosts";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let MapDispatchToProps = (dispatch) => {
    return{
        UpdateNewPostTextActionCreator: (text) => {
            let action = UpdateNewPostTextActionCreator(text);
            dispatch(action);},
            addPost: () => { dispatch(AddPostActionCreator()); }
        }
    }

const MyPostsContainer = connect(mapStateToProps, MapDispatchToProps)(MyPosts);

export default MyPostsContainer;