import React, { Component } from 'react'
import Footer from '../../components/footer/footer'
import './search.css'
export default class Search extends Component {
    render() {
        return (
            <div className="search_warp">
                <section className="search_section">
                    <header className="header_search_warp">
                        <div className="header_search_box">
                            <span className="icon-back header-back"></span>
                            {/* <h1 className="header_title">我的地址</h1> */}
                        </div>
                    </header>
                    <form className="search_form">
                        <span></span>
                        <input type="search" placeholder="输入商家\商品名称" className="search_input"></input>
                        <button type="submit" className="search_btn">搜索</button>
                    </form>

                </section>
                {/* 历史记录 */}
                <div className="hot_search">
                    <div className="not_data" style={{display:"none"}}>
                        <p>暂时没有搜索记录</p>
                    </div>
                    <div className="has_data">
                        <section style={{marginTop:"4vw"}}>
                            <header className="hot_title">热门搜索</header>
                        </section>
                        <section style={{ padding:"0 3.333333vw 3.333333vw"}}>
                            <button className="hot_btn"> 乐多多炸鸡汉堡</button>
                            <button className="hot_btn"> 麻辣香锅</button>
                            <button className="hot_btn"> 乐多多炸鸡汉堡</button>
                            <button className="hot_btn"> 柳玉南五星螺蛳粉</button>
                        </section>
                    </div>
                </div>
                <Footer></Footer>                
            </div>
        )
    }
}
