import React, { Component } from 'react'
import { Route, Link } from "react-router-dom";
import Reactpage from './ReactPage'
import Vue from './Vue'
import Flutter from './Flutter'
import './style.css'
import More from './More';
class Video extends Component {
    render() {
        return (
            <div>
                <div className="topNav">
                    <ul>
                        <li><Link to="/video/reactpage">React Hooks 写法：</Link></li>
                        <li><Link to="/video/vue">Vue教程</Link></li>
                        <li><Link to="/video/flutter">原始写法</Link></li>
                        <li><Link to="/video/more">多状态声明的注意事项</Link></li>
                    </ul>
                </div>
                <div className="videoContent">
                    <div><h3>视频教程</h3></div>
                    <Route path="/video/reactpage/" component={Reactpage} />
                    <Route path="/video/vue/" component={Vue} />
                    <Route path="/video/flutter/" component={Flutter} />
                    <Route path="/video/more" component={More}></Route>
                </div>
            </div>
        )
    }
}
export default Video
