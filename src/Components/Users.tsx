import React, { useEffect, useState } from 'react';
import UserModel from '../types/models';
import User from './User';

const Users = () => {
    const [users, setUsers] = useState<UserModel[]>([]);
    const [team, setTeam] = useState<UserModel[]>([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data));
    }, []);

    const handleAddUser = (user: UserModel) => {
        const newTeam = [...team, user];
        setTeam(newTeam);
    }
    return (
        <div>
            <h1>Users</h1>
            <h3>Team Length: {team.length}</h3>
            {
                users.map(user => <User user={user} addUser={handleAddUser}
                />)
            }
        </div>
    );
};

export default Users;