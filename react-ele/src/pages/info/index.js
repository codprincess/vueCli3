import React, { Component } from 'react'
import avatar from '../../assets/img/avatar.png'
import './info.css'
class Info extends Component {
    render() {
        return (
            <div className='rating-page'>
                <section>
                    <ul className="info_main">
                        <li className="info_list info_avatar">
                            <b className="toux">头像</b>
                            <span className="main-avatar">
                                <input type="file" className="profile-info-upload"></input>
                                <div className="profile-info-img">
                                    <img src={avatar} alt="头像"></img>
                                </div>
                                <span style={{ marginLeft: "10px" }} className="icon-arrow-right"></span>

                            </span>
                        </li>
                        <li className="info_list">
                            <b className="toux">用户名</b>
                            <span className="main_info_list">
                                傻啦吧唧的
                                <span style={{marginLeft:"10px"}} className="icon-arrow-right"></span>
                            </span>
                        </li>
                    </ul>
                    <h2 className="info_title">账号绑定</h2>
                    <ul className="info_main">
                        <li className="info_list">
                            <span>
                                <i style={{ color:"#0097ff"}} className="icon-shouji"></i>
                                <b className="toux">手机</b>
                            </span>
                            <span className="main_info_list">
                                152****1073
                                <span style={{ marginLeft: "10px" }} className="icon-arrow-right"></span>
                            </span>
                        </li>
                    </ul>
                    <h2 className="info_title">安全设置</h2>
                    <ul className="info_main">
                        <li className="info_list">
                            <b className="setcode">登录密码</b>
                            <span className="main_info_code">
                                未设置
                                <span style={{ marginLeft: "10px" }} className="icon-arrow-right"></span>
                            </span>
                        </li>
                    </ul>
                    <button type="button" className="logout_btn">退出登录</button>
                </section>
            </div>
        )
    }
}
export default Info
