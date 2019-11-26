import React, { Component } from 'react'
import './header.css'
import  PropTypes from 'prop-types'
class Header extends Component {
    static propTypes = {
        title:PropTypes.string.isRequired,
        signUp:PropTypes.bool,
        goBack:PropTypes.func,
        goHome:PropTypes.func,
        edit:PropTypes.func,
    }
    state = {
        headTitle:'首页'
    }
    handleBack=()=>{
        this.props.goBack()
    }
    handleEdit=()=>{
        this.props.edit()
    }

    render() {
        return (
            <header className="header-container">
                {this.props.goBack && <div className="icon-back header-back"></div>}
                
                <div className="header-title">{this.props.title}</div>
                {this.props.signUp ? (this.props.userInfo ? <span className='icon-account user-avatar' onClick={this.props.goHome}></span>
                    : <span>登录|注册</span>) : ''}
                {this.props.edit && <div onClick={this.handleEdit} className='user-avatar'></div>}
           </header>
        )
    }
}
export default Header
