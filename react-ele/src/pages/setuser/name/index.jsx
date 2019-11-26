import React, { Component } from 'react'
import './name.css'
class Name extends Component {
    render() {
        return (
            <div className="username_warp">
                <div className="username_box">
                    <input type="text" placeholder="用户名"/>
                </div>
                <div className="username_btn">
                    <p className="username_des">用户名只能修改一次（5-24个字）</p>
                    <button type="button" className="user_btn active_user_btn">确认修改</button>
                </div>
            </div>
        )
    }
}

export default Name

