import React, { useState, useMemo } from 'react'

function ChildComponent({name,children}){
    function changeXiaohong(name){
        console.log('小红')
        return name+',来了'
    }
    //useMemo 优化性能
//const actionXiaohong = changeXiaohong(name)
    const actionXiaohong = useMemo(()=>changeXiaohong(name),[name])
    return (
        <div>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </div>
    )
}

function Example7(){
    const [xiaohong,setXiaohong] = useState('小红代课状态')
    const [xiaoming,setXiaoming] = useState('小明代课状态')
    return (
        <div>
            <button onClick={() => { setXiaohong(new Date().getTime()) }}>小红</button>
            <button onClick={() => { setXiaoming(new Date().getTime() + ',小明向我们走来了') }}>小明</button>
            <ChildComponent name={xiaohong}>{xiaoming}</ChildComponent>
        </div>
    )

}
export default Example7