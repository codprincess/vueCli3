import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import PriceList from './components/priceList';
import ViewTab from './components/viewTab';
import { LIST_VIEW } from './unit';

const items = [
  {
    "id": 1,
    "title": "丽江三日游",
    "price": 200,
    "date": "2019-11-28",
    "category": {
      "id": "1",
      "name": "旅行",
      "type": "outcome",
      "iconName":"ios-plane"
    }
  }
]
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <PriceList 
        items={items} 
        onModifyItem={(item) => { alert(item.id) }} 
        onDeleteItem={(item) => { alert(item.id) }}></PriceList>
      <ViewTab activeTab={LIST_VIEW} onTabChange={(view)=>{console.log(view)}}></ViewTab>
    </div>
  );
}

export default App;
