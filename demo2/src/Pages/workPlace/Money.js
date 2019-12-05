import React, { useState, createContext, useContext } from 'react'
//Context的作用就是对它所包含的组件树提供全局共享数据的一种技术。

//count变量允许跨层级实现传递和使用了（也就是实现了上下文），
//当父组件的count变量发生变化时，子组件也会发生变化。
const CountContext = createContext()

function Counter(){
    const count = useContext(CountContext)
    return (<h2>{count}</h2>)
}

function Money(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>click me</button>
            <CountContext.Provider value={count}>
                <Counter></Counter>
            </CountContext.Provider>
        </div>
    )
}

export default  Money