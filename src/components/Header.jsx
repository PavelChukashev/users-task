import React from 'react';
import LogoutBtn from './LogoutBtn';
import { useSelector } from 'react-redux';


const Header = () => {

    const user = useSelector((state) => state.user.value)

    return (
        <header>
            <h2>Welcome {user.name}</h2>
            <LogoutBtn />
        </header>
    );
};

export default Header;
