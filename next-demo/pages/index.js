import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Router from 'next/router'
function gotoDetail1() {
  Router.push('/detail?name=111');
}
function gotoDetail2() {
  Router.push('/detail?name=222');
}

function gotoDetail3(){
  Router.push({
    pathname:'/detail',
    query:{
      name:'3333'
    }
  })
}
//路由 - 六个钩子事件的讲解
//1.routerChangeStart路由发生变化时
Router.events.on('routeChangeStart',(...args)=>{
  console.log('路由开始变化,参数为:',...args)
})

//2.routerChangeComplete路由结束变化时
Router.events.on('routerChangeComplete',(...args)=>{
  console.log('路由结束变化,参数为:', ...args)
})

//3.beforeHistoryChange浏览器history触发前
Router.events.on('beforeHistoryChange', (...args) => {
  console.log('路由结束变化,参数为:', ...args)
})

//4.routeChangeError路由跳转发生错误时
Router.events.on('routeChangeError', (...args) => {
  console.log('4,routeChangeError->跳转发生错误,参数为:', ...args)
})

//5.转变成hash路由模式
//hash模式下的两个事件hashChangeStart和hashChangeComplete
Router.events.on('hashChangeStart', (...args) => {
  console.log('5,hashChangeStart->hash跳转开始时执行,参数为:', ...args)
})

Router.events.on('hashChangeComplete', (...args) => {
  console.log('6,hashChangeComplete->hash跳转完成时,参数为:', ...args)
})

//在getInitialProps中用Axios获取远端数据

const Home = () => (
 
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <div>
        <Link href="/detail?name=111">详情一</Link>
        <Link href="/detail?name=222">详情二</Link>
    </div>

    <div>编程式跳转传递参数</div>
    <div>
      <button onClick={gotoDetail1}>详情一</button>
    </div>

    <div>
      <button onClick={gotoDetail2}>详情二</button>
    </div>

    <div>面向对象方式</div>
    <div>
      <button onClick={gotoDetail3}>详情三</button>
    </div>

    <div>hash跳转</div>
    <div>
      <Link href="#detail">hash跳转到list页面</Link>
    </div>
  </div>
)

export default Home
