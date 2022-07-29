import React, { useState } from 'react';
import '../Login.css'
import { Link } from 'react-router-dom';
import Home from './Home';
// import usernameIcon from "../assests/akar-icons_person.svg";

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
        debugger
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

    const toggle = () => {
        debugger
        var temp = document.getElementById("password");
        if (temp.type === "password") {
            temp.type = "text";
        }
        else {
            temp.type = "password";
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
                            <div className="title">Login</div>
                            <form onSubmit={handleSubmit}>
                                <div className="input-container">
                                    <label>Username </label>
                                    <input id='name' type="text" name="uname" required />
                                    {renderErrorMessage("uname")}
                                </div>
                                <div className="input-container">
                                    <label>Password </label>
                                    <input id='password' type="password" name="pass" required />
                                    {renderErrorMessage("pass")}
                                </div>
                                <p style={{ marginLeft: '2%' }}>Click on the checkbox to show
                                    or hide password: </p>
                                <input style={{ marginLeft: '2%' }} type="checkbox" onClick={toggle} />Show Password
                                <div class="button-container">
                                    <button type="submit" className="submitBtn">Login</button>
                                </div>
                                <p style={{ marginLeft: '5%' }}>don't have an account ? <Link to='/signup'>Sign Up</Link></p>
                            </form>
                        </div>
                    </div>
            }
        </>
    )
}

export default Login