import {withRouter} from 'next/router'
import Link from 'next/link'
import axios from 'axios'
////在getInitialProps中用Axios获取远端数据

const Detail = ()=>{
    return(
        <div>
            {/* <p>{router.query.name},<br/>{list}</p> */}
            <Link href="/">返回首页</Link>
        </div>
    )
}

Detail.getInitialProps = async () => {
    const promise = new Promise((resolve) => {
        axios('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then(
            (res) => {
                console.log('数据结果', res)
                resolve(res.data.data)
            }
        )
    })
    return await promise
}

// Detail.getInitialProps = async function(){
    
// }

export default Detail