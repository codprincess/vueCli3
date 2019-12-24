/**
 * create by <714195347@qq.com> 小公主
 */
import React, { Component } from 'react'
class Counter extends Component {
    constructor(props){
        super(props)
        this.state = {
            count: props.count || 0,
        }
    }
    render() {
        const {count,incrementClick, descrementClick} = this.props
        // const { count } = this.state
        return (
            <div>
                <h1>{count}</h1>
                <button onClick={incrementClick}>增加</button>
                <button onClick={descrementClick}>减少</button>
            </div>
        )
    }
}

export default Counter
