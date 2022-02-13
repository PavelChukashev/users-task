import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/user';
import { Button } from '@mui/material'


const LogoutBtn = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }
  return <Button variant="outlined" type='button' onClick={handleLogout}>LogOut</Button>;
};

export default LogoutBtn;
