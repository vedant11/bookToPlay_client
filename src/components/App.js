import React from 'react'
import ReactDOM from 'react-dom'
import '../style/App.css';
import BasicExample from '../BasicExample';
import Form from '../components/Form.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import Card from './Card';

function App() {
  return (
    <div className='App'>
       <Card image="carrom"/>
      <Card image="pool"/>
      <Card image="tt"/>
      <Card image="chess"/>
      {/* <Form /> */}
    </div>
  );
}

export default App;
