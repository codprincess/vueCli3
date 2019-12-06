
import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
const Test = () => {
    function gotolist() {
        Router.push('/list')
    }
    return (
        <>
            <div>我是首页</div>
            <div>A page .  </div>
            <Link href="/list"><a>跳转到list页面</a></Link>
            <div><button onClick={gotolist}>编程式导航去到list页面</button></div>
        </>
    )

}
export default Test