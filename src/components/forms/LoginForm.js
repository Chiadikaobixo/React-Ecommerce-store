import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Formik } from 'formik';
import { auth } from '../../firebase/firebase';
import { Link } from "react-router-dom"


const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required';
    } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
        errors.email = 'Invalid email address';
    }
    return errors;
}

const LoginForm = ({ history: { push } }) => {
    const [error, setError] = useState(null);
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values, { setSubmitting }) => {
        console.log('values', values);
        const { email, password } = values;
        try {
            
            await auth.signInWithEmailAndPassword(email, password);
            setSubmitting(false);
            push('/shop');

        } catch (error) {
            console.log('error', error);
            setSubmitting(false);
            setError(error);
        }

    }

    return (
        <div className='sign-up'>
            <h1>Sign In</h1>
            <div className='form-container'>
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={handleSubmit}>
                    {({
                        values,
                        errors,
                        handleChange,
                        handleSubmit,
                        isSubmitting
                    }) => {
                        const { email } = errors;
                        return (
                            <form onSubmit={handleSubmit} >
                                <div>
                                    <input
                                        type='email'
                                        name='email'
                                        onChange={handleChange}
                                        value={values.email}
                                        placeholder='Email'
                                        className={'shopxo-input email ' + (email ? 'error' : '')}
                                    />
                                </div>
                                <div>
                                    <input
                                        type='password'
                                        name='password'
                                        onChange={handleChange}
                                        value={values.password}
                                        placeholder='Password'
                                        className='shopxo-input password'
                                    />
                                </div>
                                <div className='submit-btn'>
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="button is-black shopxo-btn submit">
                                        Submit
                                    </button>
                                </div>
                                <div className='error-message'>
                                    {
                                        error && <p>Wrong email or password</p>
                                    }
                                </div>
                                <div>
                                    <p>
                                        dont have an account?
                                        <Link to="/signup">
                                            signup
                                        </Link>
                                    </p>
                                </div>
                            </form>
                        )
                    }
                    }
                </Formik>
            </div>
        </div>
    );
}

export default withRouter(LoginForm);