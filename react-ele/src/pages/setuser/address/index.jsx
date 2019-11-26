import React, { Component } from 'react'
import './address.css'
class Address extends Component {
    render() {
        return (
            <div>
                <header className="header_warp">
                    <div className="header_box">
                        <span className="icon-back header-back"></span>
                        <h1 className="header_title">我的地址</h1>
                    </div>
                </header>
                <div className="container_address">
                    <div className="address_view">
                        <div className="address">
                            <div className="addresscard">
                                <div className="addresscart-body">
                                    <p className="addresscart-title">
                                        <span className="username">傻啦吧唧</span>
                                        <span className="gender">女士</span>
                                        <span className="phone">172****1073</span>
                                    </p>
                                    <p className="addresscart-address">
                                        <span className="address-tag" content="公司">公司</span>
                                        <span className="address-text">
                                             宏禄大厦招商中心广西壮族自治区南宁市西乡塘区高新大道安吉万达广场旁VIP洽谈室                        
                                        </span>
                                    </p>
                                </div>
                                <div className="addresscart-edit">
                                    <span style={{ fontSize: "20px", color: "#ccc" }} className="icon-dingdan"></span>
                                    <span style={{fontSize:"20px",color:"#ccc"}}>X</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="address_bottom"></div>
                </div>
            </div>
        )
    }
}

export default Address
