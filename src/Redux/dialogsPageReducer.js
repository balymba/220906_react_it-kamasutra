let SEND_MESSAGE = 'SEND-MESSAGE';
let UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    };

const dialogsReducer = (state = initialState, action) => {
    switch(action.type){
        case SEND_MESSAGE:
            let newMessage = {
                id: 4,
                msg: state.newMessageText};
    
                state.messages.push(newMessage);
                state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
        default: 
            return state;
    }
}

export const AddNewMessageActionCreator = () => ({type: SEND_MESSAGE})
export const UpdateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text})

export default dialogsReducer;