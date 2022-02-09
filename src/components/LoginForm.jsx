import React from 'react';
import * as yup from 'yup';
import { Formik } from 'formik'
import { login } from '../features/user';
import { useDispatch } from 'react-redux';

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
                {({ values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                    <div className='login__form'>
                        <label htmlFor={"name"}>Name</label>
                        <input
                            type='text'
                            name={'name'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.name}
                        />
                        {touched.name && errors.name && <p className='error'>{errors.name}</p>}
                        <label htmlFor={"email"}>E-mail</label>
                        <input
                            type='email'
                            name={'email'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.email}
                        />
                        {touched.email && errors.email && <p className='error'>{errors.email}</p>}
                        <label htmlFor={"password"}>Password</label>
                        <input
                            type='password'
                            name={'password'}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                        />
                        {touched.password && errors.password && <p className='error'>{errors.password}</p>}
                        <button
                            type='submit'
                            onClick={handleSubmit}
                            disabled={!isValid && !dirty}
                        >LogIn</button>
                    </div>
                )}
            </Formik>
        </div>
    );
};

export default LoginForm;