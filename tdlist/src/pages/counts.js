/**
 * create by <714195347@qq.com> 小公主
 */
import React, { Component } from 'react'
import {connect} from 'react-redux'
import Counter from '../components/Counter'
import { incrementAction, descrementAction} from '../store/counter/actionCreator'

const mapStateToProps = state=>{
    return {
        count: state.counter.count
    }
}

const mapDispatchToProps = dispatch=>{
    return {
        incrementClick:()=>{
            dispatch(incrementAction)
        },
        descrementClick:()=>{
            dispatch(descrementAction)
        }
    }
}

const  Counts = connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counts;
