import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button ,List} from 'antd'
import store from './store/index'
// import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM} from './store/todoList/actionCreators'
import { changeInputAction, addItemAction, deleteItemAction, getListAction, getTodoList } from './store/todoList/actionCreators'
import TodoListUI from './TodoListUI'
import {connect} from 'react-redux'

class TodoList extends Component {
    constructor(props){
        super(props)
        //从store中取出来的数据
        //console.log(store.getState())
        this.state = store.getState();
       // console.log(this.state)
       //订阅redux状态
       //Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数
        store.subscribe(this.storeChange)
    }

    componentDidMount(){
        // axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
        //    // console.log(res)
        //    const data = res.data
        //     const action = getListAction(data)
        //     store.dispatch(action)
        // })
        //引入Redux-thunk
        const action = getTodoList()
        store.dispatch(action)
    }
    changeInputValue =(e)=>{
        // console.log(e.target.value)
        // const action = {
        //     type: CHANGE_INPUT,
        //     value: e.target.value
        // }
        const action = changeInputAction(e.target.value)
        //要通过dispatch()方法传递给store
        store.dispatch(action)
    }

    //获得新数据
    storeChange=()=>{
        this.setState(store.getState())
    }

    //增加
    clickBtn=()=>{
        //在clickBtn方法里增加Action，然后用dispatch()方法传递给store
       // const action = { type: ADD_ITEM}
        const action = addItemAction()
        store.dispatch(action)
        console.log('1223456');
    }

    //删除,不写bind而是用括号的话,就会直接调用
    deleteItem(index){
        // const action = {
        //     type: DELETE_ITEM,
        //     index
        // }
        const action = deleteItemAction(index)
        store.dispatch(action)
        //console.log(index)
    }

    // changeInputValues=(e)=>{
    //     console.log(e.target.value)
    // }
    render() {
        return (
            <div>
                <TodoListUI
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    changeInputValue={this.changeInputValue}
                    clickBtn={this.clickBtn}
                    deleteItem={this.deleteItem}
                ></TodoListUI>

                {/* <div>
                    <Input onChange={this.props.changeInputValues} value={this.props.inputValue} style={{ width: '250px', marginRight: '10px'}} />
                    <Button type="primary">增加</Button>
                </div> */}
            </div>
        )
    }
}


const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue
    }
}

//编写DispatchToProps
//DispatchToProps就是要传递的第二个参数，通过这个参数才能改变store中的值。
const dispatchToProps = (dispatch)=>{
    return {
        changeInputValues(e){
            console.log(e.target.value)
        }
    }
}
export default connect(stateToProps, dispatchToProps)(TodoList);