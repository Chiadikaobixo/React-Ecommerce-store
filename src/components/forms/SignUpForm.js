import React, { useState } from 'react';
import { Formik } from 'formik';
import { auth, createUserProfileDocument } from '../../firebase/firebase';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.firstname) { errors.firstname = 'Required' }
    if (!values.password) { errors.password = 'Required' }
    return errors;
}

const SignUpForm = ({ history: { push } }) => {
    const [error, setError] = useState(null);
    const initialValues = {
        firstname: '',
        email: '',
        password: '',
    }

    const handleSignUp = async (values, { setSubmitting }) => {
        const { firstname, email, password } = values;

        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName: firstname });
            push('/shop');
            setSubmitting(false);
        } catch (error) {
            console.log('error', error);
            setSubmitting(false);
            setError(error);
        }
    }

    return (
        <div className='sign-up'>
            <h1>Sign Up</h1>
            <div className='form-container'>
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={handleSignUp}
                >
                    {
                        ({ values, errors, handleChange, handleSubmit, isSubmitting }) => {
                            const { firstname, email, password } = errors;
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type='text'
                                            name='firstname'
                                            onChange={handleChange}
                                            value={values.firstname}
                                            placeholder='First Name'
                                            className={'shopxo-input ' + (firstname ? 'error' : '')}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            name='email'
                                            onChange={handleChange}
                                            value={values.email}
                                            placeholder='Email'
                                            className={'shopxo-input ' + (email ? 'error' : '')}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type='password'
                                            name='password'
                                            onChange={handleChange}
                                            value={values.password}
                                            placeholder='Password'
                                            className={'shopxo-input ' + (password ? 'error' : '')}
                                        />
                                    </div>
                                    <div className='submit-btn'>
                                        <button
                                            type='submit'
                                            disabled={isSubmitting}
                                            className='button is-black shopxo-btn submit'
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                    <div className='error-message'>
                                        {
                                            error && <p>Email address already exist</p>
                                        }
                                    </div>
                                    <div>
                                        <p>
                                            already have an account?
                                            <Link to="/login">
                                                Login
                                            </Link>
                                        </p>
                                    </div>
                                </form>
                            );
                        }
                    }
                </Formik>
            </div>
        </div>
    );
}

export default withRouter(SignUpForm);
