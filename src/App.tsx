import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './component/User';
import User2 from './component/User2';

function App() {

  const [count,setCount] = useState<number>(0)
  
  const handleCount =():void=>{
    setCount(count+1)
  }
  const clickHandler = ()=>{

  }
  

  const firstUser = {
    name:"Afridi",
    age:23
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <User2 name="Saad"></User2>
      <User firstUser = {firstUser} count = {count} setCounter={handleCount}></User>
    </div>
  );
}

export default App;
