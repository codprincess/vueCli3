import React, { Component } from 'react'
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import App from '../App'
import Admin from '../pages/admin/Admin'
import Home from '../pages/home/Home'
import Buttons from '../pages/general/buttons'
import Icons from '../pages/general/Icons'
class IRouter extends Component {
    render() {
        return (
            <HashRouter>
                <App></App>
                <Switch>
                    <Route path="/" render={()=>
                        <Admin>
                            <Switch>
                                <Route path='/home' component={Home}></Route>
                                <Route path="/general/buttons" component={Buttons}></Route>
                                <Route path="/general/Icons" component={Icons}></Route>
                                <Redirect to="/home" />
                            </Switch>
                        </Admin>
                    }></Route>
                </Switch>
            </HashRouter>
        )
    }
}

export default IRouter
