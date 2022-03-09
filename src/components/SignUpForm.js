import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase";
import { Formik } from 'formik'
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom"


const validate = (values) => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.name) { errors.name = 'Required' }
    if (!values.password) { errors.password = 'Required' }
}


const SignUpForm = ({ history }) => {
    const [error, setError] = useState(null)
    const initialValues = {
        firstName: "",
        email: "",
        password: ""
    }

    const handleSignUp = async (values, { setSubmitting }) => {
        const { firstName, email, password } = values
        try {
            const { user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, { displayName: firstName })
            history.push('/shop')
            setSubmitting(false)
        } catch (error) {
            console.log(error)
            setSubmitting(false)
            setError(error)
        }
    }

    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
            <div className="form-container">
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={handleSignUp}
                >
                    {
                        ({values, errors, handleSubmit, handleChange, isSubmitting }) => {
                            const { firstName, email, password } = errors
                            return (
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <input
                                            type="text"
                                            name="firstName"
                                            placeholder="fullname"
                                            autoFocus
                                            className={"shopxo-input" + (firstName ? 'error' : '')}
                                            value={values.firstName}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="email"
                                            className={"shopxo-input" + (email ? 'error' : '')}
                                            label="email"
                                            value={values.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="password"
                                            className={"shopxo-input" + (password ? 'error' : '')}
                                            label="password"
                                            value={values.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="submit-btn">
                                        <button
                                            type="submit"
                                            disabled= {isSubmitting}
                                            className="button is-black shopxo-btn submit"
                                        >Submit</button>
                                    </div>
                                    <div className="error-message">
                                        {error && <p>{error.message}</p>}
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
                            )
                        }
                    }
                </Formik>
            </div>
        </div>
    )
}
export default withRouter(SignUpForm)