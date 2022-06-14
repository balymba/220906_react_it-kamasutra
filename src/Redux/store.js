import dialogsReducer from "./dialogsPageReducer";
import profileReducer from "./profilePageReducer";
import sidebarReducer from "./sidebarReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'How are you?', likesCount: '15' },
                { id: 2, message: 'It`s my first post!', likesCount: '25' }],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            messages: [
                { id: 1, msg: 'Hi!' },
                { id: 2, msg: 'How are you?' },
                { id: 3, msg: 'Good!' }],
            newMessageText: '',
            dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Artem' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Dasha' },
                { id: 6, name: 'Alina' }]
        },
        sidebar: {
            bestFriends: [
                { id: 1, name: 'Dima', img: 'test1'},
                { id: 2, name: 'Artem', img: 'test2'},
                { id: 3, name: 'Sveta', img: 'test3'}
            ]
        }},
    _callSubcsriber() {
        console.log('state changed');},
    getState() {
        return this._state;},
    subscribe(observer) {
        this._callSubcsriber = observer;},
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubcsriber(this._state);
        
    }
}

export default store;
window.store = store;