import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './component/User';
import User2 from './component/User2';
import UserModel, { PhotoUrl } from './component/UserModel';

import Photo from './component/Photo';
interface User{
  name:string,
  age:number
 }
function App() {
  const [users,setUser]  = useState<UserModel[] | null>([])
  const [photos,setPhotos]  = useState<PhotoUrl[] | null>([])
  const addUser = ():void=>{

  }

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users").then(res =>res.json()).then(data=>setUser(data))

  },[])
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/photos").then(res =>res.json()).then(data=>setPhotos(data))

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
      {
        photos?.map(photo =><Photo photo ={photo}></Photo>)
      }
      
      <User firstUser = {firstUser} count = {count} setCounter={handleCount}></User>
    </div>
  );
}

export default App;
