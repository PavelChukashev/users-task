import React from 'react';
import Header from '../../components/Header';
import UsersList from '../../components/UsersList';

const MainScreen = () => {

    return (
        <div className='main-container'>
            <Header />
            <UsersList />
        </div>
    );
};

export default MainScreen;