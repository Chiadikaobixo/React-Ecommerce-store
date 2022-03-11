import { Formik } from "formik";
import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { Link } from "react-router-dom"


const validate = (values) => {
    const errors = {}
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    return errors
}

const LoginForm = ({ history }) => {
    const [ error, setError] = useState(null)
    const initialValues = {
        email: '',
        password: ''
    }

    const handleLogin = async(values, {setSubmitting}) => {
        console.log('values', values)
        const { email, password} = values
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setSubmitting(false)
            history.push('/shop')
        } catch (error) {
            console.log(error)
            setSubmitting(false)
            setError(error)
        }
    }

    return (
        <div>
            <h1>Login</h1>
            <div className="form-container">
                <Formik
                    initialValues={initialValues}
                    validate={validate}
                    onSubmit={handleLogin}
                >
                    {
                        ({values, errors, handleChange, handleLogin, isSubmitting}) => {
                            const { email } = errors
                            return (
                                <form onSubmit={handleLogin}>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            autoFocus
                                            className={"shopxo-input email" + (email ? 'error' : '')}
                                            onChange={handleChange}
                                            value={values.email}
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="shopxo-input password"
                                            onChange={handleChange}
                                            value={values.password}
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
                                    {
                                        error && <p>{error.message}</p>
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
    )

}
export default withRouter(LoginForm)