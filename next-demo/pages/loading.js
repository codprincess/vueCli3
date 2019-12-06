import React,{useState} from 'react'
// import moment from 'moment'
// 使用next / dynamic的timeout选项设置超时；
// 使用next / dynamic的delay选项设置组件加载延迟。
// 例如，如果导入非常快，可以通过这个选项让加载组件在渲染加载状态之前等待一小段时间。
import dynamic from 'next/dynamic'
const One = dynamic(import('../components/one'))
function Loading(){
    const [nowTime,setTime] = useState(Date.now())
    // const changeTime=()=>{
    //     setTime(moment(Date.now()).format())
    // }

    //异步懒加载
    const changeTime = async ()=>{
        const moment = await import('moment')
        setTime(moment.default(Date.now()).format())
    }
    return (
        <>
            <div>显示时间为:{nowTime}</div>
            <One></One>
            <div><button onClick={changeTime}>改变时间格式</button></div>
        </>
    )
}

export default Loading