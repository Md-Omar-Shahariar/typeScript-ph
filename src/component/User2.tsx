import React from 'react';
import UserModel from './UserModel';

interface Props {
    user:UserModel;
    addUser: ()=>void
}

const User2 = ({user, addUser}:Props) => {
    console.log(user)
    return (
        <div>
            <h1>{user.name}</h1>
            <h1>{user.age}</h1>
        </div>
    );
};

export default User2;