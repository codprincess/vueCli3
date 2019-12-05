import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import Money from './workPlace/Money'
import Getup from './workPlace/Getup'
import Example6 from './workPlace/Example6';
import Example7 from './workPlace/Example7';
export default class Workplace extends Component {
    render() {
        return (
            <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/Moeny">useContext</Link></li>
                    <li><Link to="/workplace/Getup">useReducer的使用</Link></li>
                    <li><Link to="/workplace/Example6">useReducer代替Redux</Link></li>
                    <li><Link to="/workplace/Example7">useMemo优化React Hooks</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场软技能</h3></div>
                <Route path="/workplace/Moeny/" component={Money} />
                <Route path="/workplace/Getup/" component={Getup} />
                <Route path="/workplace/Example6" component={Example6}></Route>
                    <Route path="/workplace/Example7" component={Example7}></Route>
            </div>
            </div>
        )
    }
}
