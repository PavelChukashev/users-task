import React from 'react';

const Login = () => {
    return (
        <div className='login'>
            <h2>Hello</h2>
            <form className='login__form'>
                <input type="name" placeholder='Name'/>
                <input type="email" placeholder='E-mail'/>
                <input type="password" placeholder='Password'/>
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;
