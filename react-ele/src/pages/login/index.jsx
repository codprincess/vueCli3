import React, { Component } from 'react'
import logo from '../../assets/img/logo.png';
import './login.css'
class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <form className="login_form">
                    <section className="input-container">
                        <input type="text" placeholder="手机号" />
                        <button disabled="disabled" className="varifycode">获取验证码</button>
                    </section>

                    <section className="input-container">
                        <input type="password" placeholder="密码"/>
                       
                    </section>

                    <section className="input-container">
                        <input type="text" placeholder="密码" maxLength='4' />
                        <div className="img-change-img">
                            <img src={logo} alt="codeimg"/>
                            <div className="change_img">
                                <p>看不清</p>
                                <p>换一张</p>
                            </div>
                        </div>
                    </section>
                    <section className="login_des">
                        新用户登录即自动注册，并表示已同意
                        <a href="//h5.ele.me/service/agreement/#initTitle=%E7%94%A8%E6%88%B7%E6%9C%8D%E5%8A%A1%E5%8D%8F%E8%AE%AE&amp;key=ruleQue18">《用户服务协议》</a>
                        和
                        <a href="http://terms.alicdn.com/legal-agreement/terms/suit_bu1_other/suit_bu1_other201903051859_43484.html">《隐私权政策》</a>
                    </section>
                    <button className="login_btn">登录</button>
                </form>
            </div>
        )
    }
}
export default Login;