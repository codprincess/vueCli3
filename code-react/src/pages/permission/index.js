import React, { Component } from 'react'
import ETable from '../../components/ETable/index'
import { Modal } from 'antd';

class Permission extends Component {
    state = {}
    componentWillMount(){
        this.requestList();   
    }
    // requestList = () => {
    //     axios.ajax({
    //         url: '/role/list',
    //         data: {
    //             params: {}
    //         }
    //     }).then((res) => {
    //         if (res.code == 0) {
    //             let list = res.result.item_list.map((item, i) => {
    //                 item.key = i;
    //                 return item;
    //             })
    //             this.setState({
    //                 list
    //             })
    //         }
    //     })
    // }

    //角色创建
    handleRole = ()=>{
        this.setState({
            isRoleVisible:true
        })
    }

    //角色提交
    handleRoleSubmit = ()=>{
        //获取提交用户表单数据
        let data = this.roleForm.props.form.getFieldsValue();
        axios.ajax({
            url: 'role/create',
            data: {
                params: {
                    ...data
                }
            }
        }).then((res) => {
            if (res) {
                this.setState({
                    isRoleVisible: false
                })
                //重置表单
                this.roleForm.props.form.resetFields();
                this.requestList();
            }
        })
    }

    //设置权限
    handlePermission=()=>{
        if (!this.state.selectedItem){
            Modal.info({
                title: '提示',
                content: '请选择一个角色'
            })
            return;
        }
        this.setState({
            isPermVisible: true,
            detailInfo: this.state.selectedItem
        });
        let menuList = this.state.selectedItem.menus;
        this.setState({
            menuInfo: menuList
        })

    }

    handlePermEditSubmit =()=>{
        let data = this.roleForm.props.form.getFieldsValue();
        //获得角色id
        data.role_id = this.state.selectedItem.id;
        data.menus = this.state.menuInfo;
        //请求编辑接口
        // axios.ajax({
        //     url: '/permission/edit',
        //     data: {
        //         params: {
        //             ...data
        //         }
        //     }
        // }).then((res) => {
        //     if (res) {
        //         this.setState({
        //             isPermVisible: false
        //         })
        //         this.requestList();
        //     }
        // })
    }

    //用户授权
    handleUserAuth=()=>{
        if(!this.state.selectedItem){
            Modal.info({
                title: '信息',
                content: '未选中任何项目'
            })
            return;
        }
        this.getRoleUserList(this.state.selectedItem.id);
        this.setState({
            isUserVisible: true,
            isAuthClosed: false,
            detailInfo: this.state.selectedItem
        });

    }
    //获取一个角色的权限信息
    getRoleUserList = (id) => {
        axios.ajax({
            url: '/role/user_list',
            data: {
                params: {
                    id: id
                }
            }
        }).then((res) => {
            if (res) {
                this.getAuthUserList(res.result);
            }
        })
    }

    //筛选目标用户
    getAuthUserList = (dataSource)=>{
        const mockData = [];
        const targetKeys = [];
        
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default Permission
