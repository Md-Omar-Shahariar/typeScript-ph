import React, { FC } from 'react';
interface Person{
    firstUser:{name: string
    age?: number},
    count:number,
    setCounter:()=>void
       
  }

  
const User = (props:Person) => {
    console.log(props);
    
    return (
        <div>
            <h1>{props.firstUser.name}</h1>
            <h2>{props.count}</h2>
            <button onClick={()=>props.setCounter()}>ADD</button>
            
        </div>
    );
};

export default User;