import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/user';


const MainScreen = () => {
    const user = useSelector((state) => state.user.value)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <div>
            <div>
                <h2>Welcome {user.name}</h2>
                <button type='button' onClick={handleLogout}>LogOut</button>
                <p>Here is your users list</p>
            </div>
        </div>
    );
};

export default MainScreen;