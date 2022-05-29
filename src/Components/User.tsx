import React, { FC } from 'react';
import UserModel from '../types/models';

interface UserObj {
    user: UserModel;
    addUser: (user: UserModel) => void;
}

const User: FC<UserObj> = ({ user, addUser }) => {
    return (
        <div>
            <h4>{user.name}</h4>
            <p>{user.id}</p>
            <p>{user.email}</p>
            <button onClick={() => addUser(user)}>Add to Team</button>
        </div>
    );
};

export default User;