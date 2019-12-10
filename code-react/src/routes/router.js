import React, { Component } from 'react'
import {HashRouter,Redirect,Route,Switch} from 'react-router-dom'
import App from '../App'
import Admin from '../pages/admin/Admin'
import Home from '../pages/home/Home'
import Buttons from '../pages/general/buttons'
import Icons from '../pages/general/Icons'
import Loadings from '../pages/general/loadings'
import Modals from '../pages/general/modals'
import Notifications from '../pages/general/notifications'
import TabsR from '../pages/general/tabs'
import Carousels from '../pages/general/carousels'
import Editor from '../pages/general/editor'
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
                                <Route path="/general/loadings" component={Loadings}></Route>
                                <Route path="/general/modals" component={Modals}></Route>
                                <Route path="/general/notifications" component={Notifications}></Route>
                                <Route path="/general/tabs" component={TabsR}></Route>
                                <Route path="/general/carousels" component={Carousels}></Route>
                                <Route path="/general/editor" component={Editor}></Route>
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
