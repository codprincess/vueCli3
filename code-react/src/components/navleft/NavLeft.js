import React, { Component } from 'react';
import './index.less'
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom'
//import { connect } from 'react-redux'
//import { switchMenu, saveBtnList } from './../../redux/action'
import MenuConfig from '../../routes/config'
const SubMenu = Menu.SubMenu;
class NavLeft extends Component {

    state = {
        currentKey: ''
    }
    handleClick = ({ item, key }) => {
        // console.log(item);
        // const { dispatch } = this.props;
        // dispatch(switchMenu(item.props.title));
        // this.setState({
        //     currentKey: key
        // })
    }
    componentWillMount() {
        const menuTreeNode = this.renderMenu(MenuConfig);
        let currentKey = window.location.hash.replace(/#|\?.*$/g, '');

        this.setState({
            currentKey,
            menuTreeNode
        })
    }

    //菜单渲染
    renderMenu = (data) => {
        //console.log('111111',data);
        return data.map((item) => {
            if (item.children) {
                return (
                    <SubMenu style={{ background: "#000",color:"#fff" }} title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item style={{ background: "#000", color: "#fff" }} title={item.title} key={item.key}>
                <NavLink style={{ background: "#000", color: "#fff" }} to={item.key}>{item.title}</NavLink>
            </Menu.Item>
        })
    }

    render() {
        return (
            <div>
                <div className="logo">
                    {/* <img src="/assets/logo-ant.svg" alt="" /> */}
                    <h1>共享单车管理</h1>
                </div>
                <Menu
                    style={{ background: "#000", color: "#fff"}}
                    selectedKeys={this.state.currentKey}
                    onClick={this.handleClick}
                >

                    {this.state.menuTreeNode}
                </Menu>
            </div>
        );
    }
}

export default NavLeft;