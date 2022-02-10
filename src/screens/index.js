import React from 'react';
import { useSelector } from 'react-redux';
import LoginScreen from './Login/LoginScreen';
import MainScreen from './Main/MainScreen'

export default function Main() {
    const user = useSelector((state) => state.user.value)
    return (
        <div className='main'>
            {user.isAuth ? <MainScreen /> : <LoginScreen />}
        </div>
    );
}
