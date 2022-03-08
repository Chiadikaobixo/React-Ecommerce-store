import React, { useState } from "react";
import { auth, createUserProfileDocument } from "../firebase/firebase";
import { Link } from "react-router-dom"

const SignUpForm = () => {
    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
        console.log(values)
    }

    return (
        <div className="sign-up">
            <h1>Sign Up</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="text"
                            name="name"
                            placeholder="fullname"
                            autoFocus
                            className="shopxo-input"
                            label="Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="email"
                            className="shopxo-input"
                            label="email"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="password"
                            className="shopxo-input"
                            label="password"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="confirm Password"
                            className="shopxo-input"
                            label="confirm Password"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="submit-btn">
                        <button
                        type="submit"
                        className="button is-black shopxo-btn submit"
                        >Submit</button>
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
            </div>
        </div>
    )
}
export default SignUpForm