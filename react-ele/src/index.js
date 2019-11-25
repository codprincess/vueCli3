import React from 'react';
import ReactDOM from 'react-dom';
import Route from './router/index'
// import './index.css';
// import {Provider} from 'react-redux'
// import store from './store'
 import * as serviceWorker from './serviceWorker';
// import Login from './pages/login/index'
// import Profile from './pages/profile/index'
const render = Component=>{
    ReactDOM.render(
        // <Provider store={store}>
            <Component></Component>,
        // </Provider>,
        // <Profile />,
        document.getElementById('root')
    );
}

render(Route)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
