import React, { useState } from "react";
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
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        name="name"
                        placeholder="fullname"
                        autoFocus
                        className="text-input"
                        label= "Name"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="email"
                        className="text-input"
                        label="email"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="password"
                        placeholder="password"
                        className="text-input"
                        label="password"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        name="confirmPassword"
                        placeholder="confirm Password"
                        className="text-input"
                        label="confirm Password"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <button>Submit</button>
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
    )
}
export default SignUpForm