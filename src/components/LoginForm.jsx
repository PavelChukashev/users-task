import React from 'react';
import * as yup from 'yup';
import { Form, Formik, ErrorMessage } from 'formik'
import { login } from '../features/user';
import { useDispatch } from 'react-redux';
import { Button, TextField } from '@mui/material'


const LoginForm = () => {
    
    const dispatch = useDispatch()
    
    function loginUser (values, e) {
        dispatch(login({name: values.name, email: values.email, password: values.password, isAuth: true}))
    }

    const validationsSchema = yup.object().shape({
        name: yup.string().typeError('Must be a string').required('Is necessary'),
        email: yup.string().email('Insert correct e-mail').required('Is necessary'),
        password: yup.number().typeError('Must be a number').required('Is necessary')
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
                                label="E-mail" 
                                variant="standard" 
                                type='email'
                                name={'email'}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                fullWidth
                            />
                            <ErrorMessage name='email'/>
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