import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
class TodoListUI extends Component {
    //要用props来接收父组件传过来的值了
    render() {
        return (
            <div style={{ margin: '10px' }}>
                <div>
                    <Input 
                        onChange={this.props.changeInputValue} 
                        placeholder={this.props.inputValue} 
                        style={{ width: '250px', marginRight: '10px' }} 
                    />
                    <Button onClick={this.props.clickBtn} type="primary">增加</Button>
                </div>
                <div style={{ margin: '10px', width: '300px' }}>
                    <List
                        bordered
                        dataSource={this.props.list}
                        renderItem={(item, index) => (<List.Item onClick={this.props.deleteItem.bind(this, index)}>{item}</List.Item>)}
                    ></List>
                </div>
            </div>
        )
    }
}

export default TodoListUI
