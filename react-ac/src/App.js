import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './containers/Home';
import Create from './containers/Create';

function App() {
  return (
    <div className="App">
      {/* <Home></Home> */}
      {/* <PriceList 
        items={items} 
        onModifyItem={(item) => { alert(item.id) }} 
        onDeleteItem={(item) => { alert(item.id) }}></PriceList>
      <ViewTab activeTab={LIST_VIEW} onTabChange={(view)=>{console.log(view)}}></ViewTab>
      <TotalPrice income={5500} outcome={10000}></TotalPrice>
      <MonthPicker year={2019} month={11} onChange={(year,month)=>{console.log(year,month)}}></MonthPicker>
      <CreateBtn onClick={()=>{}}></CreateBtn> */}
      <Router>
        <div className="container pb-5">
          <Route path="/" exact component={Home}></Route>
          <Route path="/create" component={Create}></Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
