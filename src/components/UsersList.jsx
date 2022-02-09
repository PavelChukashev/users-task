import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../features/usersSlice';

const UsersList = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch]);
    
    const users = useSelector((state) => state.usersList.users)
    console.log(users);

    const ShowUsers = () => {
        return users.map((user) => 
            <tr className='user' key={user.id}>
                <td>{user.id}</td>
                <td>{user.username}</td>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
            </tr>
        )
    };
    
    return (
        <div>
            <table>
                <thead>
                    <th>ID</th>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                </thead>
                <tbody>
                    <ShowUsers />
                </tbody>
            </table>
        </div>
    );
};

export default UsersList;
