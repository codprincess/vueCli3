import React, { Component } from 'react'
import {connect} from 'react-redux'
import { increase, descrease} from '../store/prices/actionCreator'
import { Link } from 'react-router-dom'
class Prices extends Component {
    componentDidMount(){
        console.log('12344',this.props)
    }
    render() {
        const {PayIncrease,PayDecrease} = this.props;
        return (
            <div>
                <h2>当月工资为{this.props.salary}</h2>
                <button onClick={PayIncrease}>升职加薪</button>
                <button onClick={PayDecrease}>迟到罚款</button>
                <div>
                    <Link to="/counts">跳转</Link>
                </div>
               
            </div>
           
        )
    }
}

//需要渲染的数据
function mapStateToProps(state){
    return {
        salary: state.reducerPrice.salary
    }
}

//执行
function mapDispatchToProps(dispatch){
    return{
        PayIncrease: () => dispatch(increase),
        PayDecrease: () => dispatch(descrease)
    }
}

export default Prices = connect(mapStateToProps, mapDispatchToProps)(Prices)