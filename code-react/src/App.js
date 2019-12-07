import React, { Component } from 'react'
// import service from './axios/request'
// import axios from 'axios'
import { _getList} from './axios/api'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data:[]
    }
  }
  async getList(){
    const res = await _getList()
    console.log(res)
  }
  componentWillMount(){
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