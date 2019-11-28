import React, { Component } from 'react'
import Ionicon from 'react-ionicons'
import ProtoTypes from 'prop-types'
import {Colors} from '../unit'
// class PriceList extends Component {
//     render() {
//         return (
//             <div>
                
//             </div>
//         )
//     }
// }
// export default PriceList
//只是传入数据可以只用简单的函数形式
const PriceList = ({items,onModifyItem,onDeleteItem})=>{
    return(
    <ul className="list-group list-group-flush">
        {
            items.map((item)=>(
                <li key="item.id" className="list-group-item d-flex justify-content-between align-items-center">
                    <span className="col-1">
                        <Ionicon
                            className="rounded-circle"
                            fontSize="30px"
                            style={{ backgroundColor: Colors.blue, padding: '5px' }}
                            color={'#fff'}
                            icon={item.category.iconName}
                        ></Ionicon>
                    </span>
                    <span className="col-5">{item.title}</span>
                    <span className="col-2 font-weight-bold">
                        {(item.category.type === 'income') ? '+' : '-'}
                        {item.price}元
                    </span>
                    <span className="col-2">{item.date}</span>
                    <a
                        className="col-1"
                        role="button"
                        onClick={(event) => { event.preventDefault(); onModifyItem(item) }}
                    >
                        <Ionicon
                            className="rounded-circle"
                            fontSize="30px"
                            style={{ backgroundColor: Colors.green, padding: '5px' }}
                            color={'#fff'}
                            icon='ios-create-outline'
                        />
                    </a>

                    <a className="col-1"
                        role="button"
                        onClick={(event) => { event.preventDefault(); onDeleteItem(item) }}
                    >
                        <Ionicon
                            className="rounded-circle"
                            fontSize="30px"
                            style={{ backgroundColor: Colors.red, padding: '5px' }}
                            color={'#fff'}
                            icon='ios-close'
                        />
                    </a>
                </li>
            ))
        }
        
    </ul>
    )
}
//类型检查
PriceList.protoTypes = {
    items:ProtoTypes.array.isRequired,
    onModifyItem:ProtoTypes.func.isRequired,
    onDeleteItem:ProtoTypes.func.isRequired
}
export default PriceList