
import * as React from 'react';
import './App.css';

import Header from './components/Header';
import MainList from './components/MainList'

const App : React.SFC<any> = ({store}) => (
  <div>
    <Header store = {store} />
    <MainList store ={store} />
  </div>
)



export default App;
