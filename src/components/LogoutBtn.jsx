import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user';


const LogoutBtn = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
  return <button type='button' onClick={handleLogout}>LogOut</button>;
};

export default LogoutBtn;
