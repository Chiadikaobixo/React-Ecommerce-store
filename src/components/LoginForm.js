import React, { useState } from "react";
import { Link } from "react-router-dom"

const LoginForm = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
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
        <div>
        <h1>Login</h1>
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div>
                        <input
                            type="email"
                            placeholder="Email"
                            autoFocus
                            className="shopxo-input"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="password"
                            placeholder="Password"
                            className="shopxo-input"
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
                            dont have an account?
                            <Link to="/signup">
                                signup
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )

}
export default LoginForm