import React from 'react';
import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';


const Header = () => {

    const user = useSelector((state) => state.user.value)

    return (
        <header className='header'>
            <h2>Welcome <span className='user'>{user.name}</span></h2>
            <LogoutBtn className='main__btn' />
        </header>
    );
};

export default Header;
