import React, { useState } from 'react';
import '../Login.css'
import { Link } from 'react-router-dom';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from '../AppNavbar';
import { Button, Container } from 'reactstrap';

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            username: "Ramesha",
            password: "password"
        },
        {
            username: "Guest",
            password: "password"
        }
    ];

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const renderErrorMessage = (name) => name === errorMessages.name && (<div className="error">{errorMessages.message}</div>);

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
        var { uname, pass } = document.forms[0];

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    return (

        <>
            {
                isSubmitted ?
                    <>
                        {/* < AppNavbar /> */}
                        <Home />
                    </>
                    :
                    <div className="form">
                        {/* < AppNavbar /> */}
                        <div className="login-form login">
                            <div className="title">Sign In</div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label>Username </label>
                                    <input type="text" name="uname" required />
                                    {renderErrorMessage("uname")}
                                </div>
                                <div className="input-container">
                                    <label>Password </label>
                                    <input type="password" name="pass" required />
                                    {renderErrorMessage("pass")}
                                </div>
                                <div className="button-container">
                                    <input type="submit" />
                                </div>
                            </form>
                        </div>
                    </div>
            }
        </>
    )
}

export default Login