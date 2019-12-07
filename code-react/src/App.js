import React, { Component } from 'react'
import service from './axios/request'
import axios from 'axios'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  async getList(){
    const res = await service.get('/mock.json', {})
    console.log(res)
  }
  componentWillMount(){
    // service.get('api/example/list',{}).then((res)=>{
    //   if(res){
    //     console.log(res)
    //   }
    // })
    this.getList()
  }
  render() {
    return (
      <div>
        首页
      </div>
    )
  }
}

export default App;