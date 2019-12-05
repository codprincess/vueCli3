import React, { Component } from 'react'

//原始写法
class Flutter extends Component {
    constructor(props){
        super(props)
        this.state = {count:0}
    }
    //首次渲染
    componentDidMount(){
        console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
    }
    //更新导致的重新渲染
    componentDidUpdate(){
        console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
    }
    addCount =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    render() {
        return (
            <div>
                <p>You click {this.state.count} times</p>
                <button onClick={this.addCount}>click me</button>
            </div>
        )
    }
}
export default Flutter