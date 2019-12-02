import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button ,List} from 'antd'
import store from './store/index'

// const date = [
//     '早8点开晨会，分配今天的开发工作',
//     '早9点和项目经理作开发需求讨论会',
//     '晚5:30对今日代码进行review'
// ]
class TodoList extends Component {
    constructor(props){
        super(props)
        //从store中取出来的数据
        //console.log(store.getState())
        this.state = store.getState();
       // console.log(this.state)
       //订阅redux状态
        store.subscribe(this.storeChange)
    }

    changeInputValue =(e)=>{
        // console.log(e.target.value)
        const action = {
            type:'changInput',
            value: e.target.value
        }
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
        const action = {type:'addItem'}
        store.dispatch(action)
        console.log('1223456');
    }
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input onChange={this.changeInputValue} placeholder={this.state.inputValue} style={{ width: '250px', marginRight: '10px'}} />
                    <Button onClick={this.clickBtn} type="primary">增加</Button>
                </div>
                <div style={{margin:'10px',width:'300px'}}>
                    <List
                        bordered
                        dataSource={this.state.list}
                        renderItem={item=>(<List.Item>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
        )
    }
}
export default TodoList