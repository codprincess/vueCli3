import React, { Component } from 'react'
import './rebind.css'
class Rebind extends Component {
    render() {
        return (
            <div>
               <form>
                    <div className="rebind_warp">
                        <div className="rebind_form">
                            <label className="form_lable">手机号</label>
                            <input type="text" maxLength="11" value="15277381073" className="form_input"/>
                            <input type="tel" maxLength="11" className="form_input" style={{display:"none"}} />
                            <button type="button" className="tel_code active_tel_code">获取验证码</button>
                        </div>
                        <div className="rebind_form" style={{ borderTop: "1px solid #eee"}}>
                            <label className="form_lable">验证码</label>
                            <input type="tel"maxLength="6" className="form_input" placeholder="请输入验证码" />
                        </div>
                    </div>
                    <div className="rebind_btn_warp">
                        <button disabled="disabled" type="submit" className="rebind_btn">验证后绑定新手机</button>
                    </div>
               </form>
            </div>
        )
    }
}

export default Rebind
