import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer/footer'
import avatar from '../../assets/img/avatar.png'
import './profile.css'
class Profile extends Component {
    render() {
        return (
            <div className="profile-container">
                <section>
                    <Link to="/info" className="profile_top">
                       <div className="profile_avatar">
                            <img src={avatar} alt=""/>
                       </div>
                       <div className="profile_des">
                           <p className="pro_re">登录/注册</p>
                            <p className="pro_ph"> <span className='icon-mobile-number'></span> 登录后享受更多特权</p>
                       </div>
                        <span className='icon-arrow-right' style={{color:"#ffffff"}}></span>
                   </Link> 
                </section>
                <div className="maininfo">
                    <a href="" className="redpag_link">
                        <p className="icon-huangguan order-icon"></p>
                        <p className="red_pag">红包</p>
                    </a>
                    <a href="" className="redpag_link">
                        <p className="icon-jifen1 order-icon"></p>
                        <p className="red_pag">金币</p>
                    </a>
                </div>
                <section className="profile_list">
                    <a href="" className="list_index">
                        <aside className="list_left">
                            <span style={{ color: "#0085ff"}} className="icon-zhinanzhen"></span>
                        </aside>
                        <div className="list_info">
                             我的地址
                             <span className="icon-arrow-right"></span>
                        </div>
                    </a>
                </section>

                <section className="profile_list">
                    <a href="" className="list_index">
                        <aside className="list_left">
                            <span style={{ color: "#0085ff" }} className="icon-jifen1 order-icon"></span>
                        </aside>
                        <div className="list_info">
                            金币商城
                            <span className="icon-arrow-right"></span>
                        </div>
                    </a>

                    <a href="" className="list_index">
                        <aside className="list_left">
                            <span style={{ color: "#0085ff" }} className="icon-huangguan order-icon"></span>
                        </aside>
                        <div className="list_info">
                            分享那20元现金
                            <span className="icon-arrow-right"></span>
                        </div>
                    </a>
                </section>

                <section className="profile_list">
                    <a href="" className="list_index">
                        <aside className="list_left">
                            <span style={{ color: "#0085ff" }} className="icon-yk_fangkuai_fill order-icon"></span>
                        </aside>
                        <div className="list_info">
                            我的客服
                            <span className="icon-arrow-right"></span>
                        </div>
                    </a>

                    <a href="" className="list_index">
                        <aside className="list_left">
                            <span style={{ color: "#0085ff" }} className="icon-yk_fangkuai_fill order-icon"></span>
                        </aside>
                        <div className="list_info">
                            下载饿了么APP
                            <span className="icon-arrow-right"></span>
                        </div>
                    </a>
                    <a href="" className="list_index">
                        <aside className="list_left">
                            <span style={{ color: "#0085ff" }} className="icon-dingdan order-icon"></span>
                        </aside>
                        <div className="list_info">
                            规则中心
                            <span className="icon-arrow-right"></span>
                        </div>
                    </a>
                </section>
                <Footer/>
            </div>
        )
    }
}
export default Profile;
