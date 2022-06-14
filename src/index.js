import React from 'react';
import store from './Redux/reduxStore.js';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);


// store.subscribe(() => {
//     let state = store.getState();
//     reRenderEntireTree(state);
// });