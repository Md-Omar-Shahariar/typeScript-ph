import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './component/User';
import User2 from './component/User2';
import UserModel from './component/UserModel';
interface User{
  name:string,
  age:number
 }
function App() {
  const [users,setUser]  = useState<UserModel[] | null>([])
  const addUser = ():void=>{

  }

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(res =>res.json()).then(data=>setUser(data))

  },[])

  const [count,setCount] = useState<number>(0)
  
  const handleCount =():void=>{
    setCount(count+1)
  }
 
  

  const firstUser:User = {
    name:"Afridi",
    age:23
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      {
        users?.map(user =><User2 user = {user} addUser={addUser}></User2>)
      }
      
      <User firstUser = {firstUser} count = {count} setCounter={handleCount}></User>
    </div>
  );
}

export default App;
