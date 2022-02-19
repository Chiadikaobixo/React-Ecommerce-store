import React from "react";
import { Link } from "react-router-dom"

const SignUpForm = () => (
    <div>
        <form>
            <div>
                <p>Name</p>
                <input
                    type="text"
                    placeholder="fullname"
                    autoFocus
                    className="text-input"
                />
            </div>
            <div>
                <p>Email</p>
                <input
                    type="text"
                    placeholder="email"
                    className="text-input"
                />
            </div>
            <div>
                <p>Create Password</p>
                <input
                    type="text"
                    placeholder="password"
                    className="text-input"
                />
            </div>
            <div>
                <p>Confirm Password</p>
                <input
                    type="text"
                    placeholder="password"
                    className="text-input"
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

export default SignUpForm