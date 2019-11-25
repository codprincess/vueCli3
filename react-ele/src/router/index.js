 import React, { Component } from 'react'
// import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import Login from '../pages/login/index';
import Profile from '../pages/profile/index'
export default class RouteConfig extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/profile" component={Profile}></Route>
                    <Route path="/login" component={Login}></Route>
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