import React, { useState } from 'react'
//useState的用法，分别是声明、读取、使用（修改）
// export default class More extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }

// 在使用useState的时候只赋了初始值，
// 并没有绑定任何的key, 
// 那React是怎么保证这三个useState找到它自己对应的state呢
//答案是：React是根据useState出现的顺序来确定的
//就是React Hooks不能出现在条件判断语句中，因为它必须有完全一样的渲染顺序。
function More(){
    const [age,setAge] = useState(18)
    const [sex,setSex] = useState('女')
    const [work,setWork] = useState('前端程序员')
    return (
        <div>
            <p>jing:今年:{age}岁</p>
            <p>性别:{sex}</p>
            <p>工作:{work}</p>
        </div>
    )
}

export default More