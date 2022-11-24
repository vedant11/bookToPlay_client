import React from 'react'
import ReactDOM from 'react-dom'
import '../style/App.css';
import BasicExample from '../BasicExample';

import Card from './Card';

function App() {
  return (
    <div className='App'>
      <Card image="carrom"/>
      <Card image="pool"/>
      <Card image="tt"/>
      <Card image="chess"/>
    </div>
  );
}

export default App;
