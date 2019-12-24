import React from 'react';
import ReactDOM from 'react-dom';
// import TodoList from './TodoList'
import { BrowserRouter, Route } from 'react-router-dom';
import Counts from '../src/pages/counts'
import Prices from '../src/pages/prices'
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux'
import store from './store'

// const TodoList=(
//     <Provider store={store}>
//         <TodoList></TodoList>
//     </Provider>
// )
ReactDOM.render(
    <Provider store={store}>
        {/* <Counts></Counts> */}
        <BrowserRouter>
            <Route path='/' exact component={Prices}></Route>
            <Route path='/counts' exact component={Counts}></Route>
        </BrowserRouter>
        {/* <Prices></Prices> */}
     </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
