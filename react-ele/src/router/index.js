 import React, { Component } from 'react'
// import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/login/index';
import Profile from '../pages/profile/index'
import Home from '../pages/home';
import Info from '../pages/info';
import Name from '../pages/setuser/name';
export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/info" component={Info}></Route>
                    <Route path="/setuser/name" component={Name}></Route>
                    {/* <Redirect exact from='/' to='/profile' />
                    <Route component={Profile} /> */}
                </Switch>
            </HashRouter>
        )
    }
}
// const routes =(
//     <HashRouter>
//         <Switch>
//             <Route path="/profile" component={Profile}></Route>
//             <Route path="/login" component={Login}></Route>
//             <Redirect exact from='/' to='/profile' />
//             <Route component={Profile} />
//         </Switch>
//     </HashRouter>
// )

// export { routes };