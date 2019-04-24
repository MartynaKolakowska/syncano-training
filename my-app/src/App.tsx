
import * as React from 'react';
import './App.css';

import Header from './components/Header';
import MainList from './components/MainList'

import {Card} from 'antd';

const App : React.SFC<any> = ({store}) => (
  <div className="main-app">
    <Card 
    title="TODO" 
    bordered={false} 
    style={{ width: 300, margin:'20px' }}
    >
      <Header store = {store} />
      <MainList store ={store} />    
    </Card>
  </div>
)



export default App;
