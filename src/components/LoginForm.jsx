import React from 'react';
import * as yup from 'yup';
import { Form, Formik, ErrorMessage } from 'formik'
import { getToken, login } from '../features/user';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material'


const LoginForm = () => {
    
    const dispatch = useDispatch()

    
    const USER = 'test_super'
    const PASSWORD = 'Nf<U4f<rDbtDxAPn'
    
    localStorage.setItem('user', USER)
    localStorage.setItem('password', PASSWORD)

    let user = localStorage.getItem('user')
    let password = localStorage.getItem('password')

    function loginUser (values) {
        if (values.name === user && values.password === password) {
            dispatch(getToken())
            setTimeout(() => {
                dispatch(login({name: values.name, password: values.password, isAuth: true}))
            }, 700);
        }
    }

    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Incorrect name').required('Is necessary'),
        password: yup.string().typeError('Incorrect password').required('Is necessary')
    })

    return (
        <div className='login'>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password: '',
                }}
                validateOnBlur
                validationSchema={validationsSchema}
                onSubmit={(values) => loginUser(values)}
            >
                {({ values, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <Form className='login__form'>
                        <div className='login__input'>
                            <TextField 
                                id="outlined-basic" 
                                label="Name" 
                                variant="standard" 
                                type='text'
                                name={'name'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                fullWidth
                            />
                            <ErrorMessage name='name' className='login__input-error'/>
                        </div>
                        <div className='login__input'>
                            <TextField
                                id="outlined-basic" 
                                label="Password" 
                                variant="standard" 
                                type='password'
                                name={'password'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                fullWidth
                            />
                            <ErrorMessage name='password'/>
                        </div>
                        <Button 
                            variant="contained"
                            type='submit'
                            className='main__btn'
                            onClick={handleSubmit}
                            disabled={!isValid && !dirty}
                        >Login</Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;