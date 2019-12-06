import React, { Component } from 'react'
import Link from 'next/link'
class list extends Component {
    render() {
        return (
            <div>
                <p>list页面</p>
                <Link href="/test">返回测试页面</Link>
            </div>
        )
    }
}
export default list
