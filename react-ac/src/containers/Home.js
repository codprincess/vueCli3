import React, { Component } from 'react'
import logo from '../logo.svg';
import PriceList from '../components/priceList';
import ViewTab from '../components/viewTab';
import { LIST_VIEW, TYPE_OUTCOME, parseToYearAndMonth, padLeft} from '../unit';
import TotalPrice from '../components/totalPrice';
import MonthPicker from '../components/monthPicker';
import CreateBtn from '../components/createBtn';
const categories = {
    "1":{
        "id": "1",
        "name": "旅行",
        "type": "outcome",
        "iconName": "ios-plane"
    },
    "2":{
        "id": "2",
        "name": "游玩",
        "type": "income",
        "iconName": "ios-plane"
    },
    "3": {
        "id": "3",
        "name": "游玩",
        "type": "income",
        "iconName": "ios-plane"
    }
};
const items = [
    {
        "id": 1,
        "title": "丽江三日游",
        "price": 200,
        "date": "2019-11-28",
        "cid":1
    },
    {
        "id": 2,
        "title": "搭理",
        "price": 100,
        "date": "2019-11-29",
        "cid": 2
    }
]

const newItems = {
    "id": 3,
    "title": "丽江",
    "price": 100,
    "date": "2019-11-30",
    "cid": 3
}
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            items,
            currentDate: parseToYearAndMonth(),
            tabView:LIST_VIEW
        }
    }
    changeView = (index)=>{

    }
    changeDate = (year,month)=>{
        this.setState({
            currentDate:{year,month}
        })
    }
    //新建记录
    createItem = ()=>{
        this.setState({
            items:[newItems,...this.state.items]
        })
        console.log('222222')
    }
    //修改
    modifyItem = (modifyItem)=>{
        const modifyItems = this.state.items.map(item=>{
            if(item.id === modifyItem.id){
                return {...item,title:'更新'}
            }else{
                return item
            }
        })
        this.setState({
            items: modifyItems
        }) 
    }
    //删除
    deleteItem = (deleteItem)=>{
        const filteredItems = this.state.items.filter(item=>item.id !== deleteItem.id)
        this.setState({
            items:filteredItems
        }) 
    }
    render() {
        const { items,currentDate,tabView} = this.state
        const itemsWithCate = items.map(item=>{
            item.category = categories[item.cid]
            return item
        }).filter(item=>{
            return item.date.includes(`${currentDate.year}-${padLeft(currentDate.month)}`)
        })
        let totalIncome = 0,totalOutcome = 0
        itemsWithCate.forEach(item=>{
            if (item.category.type === TYPE_OUTCOME){
                totalOutcome += item.price
            }else{
                totalIncome += item.price
            }
        })
        return (
            <div>
                <div className="App-header">
                    <div className="row mb-5 justify-content-center">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                   <div className="row">
                       <div className="col">
                           <MonthPicker
                                year={currentDate.year} 
                                month={currentDate.month} 
                                onChange={this.changeDate}
                           ></MonthPicker>
                       </div>
                       <div className="col">
                           <TotalPrice income={totalIncome} outcome={totalOutcome}></TotalPrice>
                       </div>
                   </div>
                </div>

                <div className="content-area py-3 px-3">
                    <ViewTab
                        activeTab={LIST_VIEW} onTabChange={this.changeView}
                    ></ViewTab>
                    <CreateBtn onClick={this.createItem}/>
                    <PriceList
                        items={items}
                        onModifyItem={this.modifyItem}
                        onDeleteItem={this.deleteItem}
                    ></PriceList>
                </div>

            </div>
        )
    }
}
export default Home