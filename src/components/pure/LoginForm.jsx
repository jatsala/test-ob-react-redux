import React from 'react';
import PropTypes from 'prop-types';

import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

// import { useNavigate } from 'react-router-dom';

const loginShema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),
        password: Yup.string().required('Password is required')
    }
);

const LoginForm = ({ loged, fetching, onLogin }) => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    // const navigate = useNavigate();

    return (
        <Formik
            // *** Initial values that the form will take
            initialValues={initialCredentials}
            // **** Yup validation Shema ****
            validationSchema={loginShema}
            // *** onSubmit Event
            onSubmit={async (values) => {
                onLogin(values.email, values.password)
            }}
        >

            {/* we obtain props from Fromik */}
            {({ values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting }) => (
                <Form>
                    <label htmlFor="email">Email</label>
                    <Field id="email" type="email" name="email" placeholder="example@email.com" />

                    {/* Email Errors */}
                    {
                        errors.email && touched.email &&
                        (
                            <ErrorMessage name='email' component='div'></ErrorMessage>
                        )
                    }

                    <label htmlFor="password">Password</label>
                    <Field
                        id="password"
                        name="password"
                        placeholder="password"
                        type="password"
                    />
                    {/* Password Errors */}
                    {
                        errors.password && touched.password &&
                        (
                            <ErrorMessage name='password' component='div' ></ErrorMessage>
                        )
                    }

                    <button type="submit">Login</button>
                    {fetching ? (<p>LOADING...</p>) : null}
                    {isSubmitting ? (<p>Login your credentials...</p>) : null}
                </Form>
            )}
        </Formik>
    );
};


LoginForm.propTypes = {
    loged: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    onLogin: PropTypes.func.isRequired
};


export default LoginForm;
