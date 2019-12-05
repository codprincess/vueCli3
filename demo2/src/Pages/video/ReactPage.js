import React, { useState ,useEffect } from 'react'

//React Hooks 写法：
//useState是react自带的一个hook函数，它的作用是用来声明状态变量。
function ReactPage(){
    const [count,setCount] = useState(0);
    // useEffect(()=>{
    //     console.log(`useEffect=>You clicked ${count} times`)
    // })

    //useEffect 实现 componentWillUnmount生命周期函数
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
        return () => {
            console.log('====================')
        };
    }, [count])
    return (
        <div>
            <p>You clicked {count} times</p>
            {/* 直接调用setCount函数，这个函数接收的参数是修改过的新状态值 */}
            <button onClick={()=>{setCount(count+1)}}>click me!</button>
        </div>
    )
}
export default ReactPage