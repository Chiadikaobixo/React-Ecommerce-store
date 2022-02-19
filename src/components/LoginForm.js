import React from "react";
import { Link } from "react-router-dom"

const LoginForm = () => (
    <div>
        <form>
            <div>
                <p>Email</p>
                <input
                    type="text"
                    placeholder="Email"
                    autoFocus
                />
            </div>
            <div>
                <p>Password</p>
                <input
                    type="text"
                    placeholder="Passworld"
                />
            </div>
            <div>
                <Link to="/">
                    <button>Submit</button>
                </Link>
            </div>
        </form>
    </div>
)

export default LoginForm