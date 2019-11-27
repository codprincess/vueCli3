import React, { Component } from 'react'
import avatar from '../../assets/img/avatar.png'
import Footer from '../../components/footer/footer'
import './order.css'
class Order extends Component {
    render() {
        return (
            <div>
                <div className="ordercard">
                    <div className="order-body">
                        <div className="ordercard-avatar">
                            <img className="ordercard-logo" src={avatar} alt="pic"/>
                        </div>
                        <div className="ordercard-content">
                            <div className="ordercard-head">
                                <div className="title">
                                    <div className="name">
                                        <span className="name-title">老友部落酸菜鱼专门店</span>
                                        <span style={{marginLeft:"5px"}}>></span>
                                    </div>
                                    <p className="status">订单已送达</p>
                                </div>
                                <p className="datetime">14小时4分钟前</p>
                            </div>
                            <div className="ordercard-detail">
                                <p className="detail">
                                    <span className="productname">
                                         老坛●酸菜鱼+米饭+鸭血
                                    </span>
                                </p>
                                <p className="price">¥12.50</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-bottom">
                        <button className="card_btn">再来一单</button>
                        <button className="card_alert">评价得金币</button>
                    </div>
                </div>

                <div className="ordercard">
                    <div className="order-body">
                        <div className="ordercard-avatar">
                            <img className="ordercard-logo" src={avatar} alt="pic" />
                        </div>
                        <div className="ordercard-content">
                            <div className="ordercard-head">
                                <div className="title">
                                    <div className="name">
                                        <span className="name-title">老友部落酸菜鱼专门店</span>
                                        <span style={{ marginLeft: "5px" }}>></span>
                                    </div>
                                    <p className="status">订单已送达</p>
                                </div>
                                <p className="datetime">14小时4分钟前</p>
                            </div>
                            <div className="ordercard-detail">
                                <p className="detail">
                                    <span className="productname">
                                        老坛●酸菜鱼+米饭+鸭血
                                    </span>
                                </p>
                                <p className="price">¥12.50</p>
                            </div>
                        </div>
                    </div>
                    <div className="order-bottom">
                        <button className="card_btn">再来一单</button>
                        <button className="card_alert">评价得金币</button>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}
export default Order