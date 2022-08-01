import React, { useState,useEffect } from 'react';
import '../Login.css'
import { Link } from 'react-router-dom';
import Home from './Home';
import axios from 'axios';
// import usernameIcon from "../assests/akar-icons_person.svg";

function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [userInfo,setUserInfo]=useState([]);

    useEffect(()=>{
        axios.get('/users')
        .then(res=>{
            debugger
            setUserInfo(res.data);
        })
    },[])

    const errors = {
        username: "invalid username",
        password: "invalid password"
    };

    const renderErrorMessage = (name) => name === errorMessages.name && (<div className="error">{errorMessages.message}</div>);

    const handleSubmit = (event) => {
        //setErrorMessages to empty intially
        setErrorMessages({});
        // Prevent page reload
        event.preventDefault();
        var { username, password } = document.forms[0];

        // Find user login info
        const userData = userInfo.find((user) => user.name === username.value);

        // Compare user info
        if (userData) {
            if (userData.password !== password.value) {
                // Invalid password
                setErrorMessages({ name: "password", message: errors.password });
            } else {
                setIsSubmitted(true);
            }
        } else {
            // Username not found
            setErrorMessages({ name: "username", message: errors.username });
        }
    };
    const toggle = () => {
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
                                    <input id='name' type="text" name="username" required />
                                    {renderErrorMessage("username")}
                                </div>
                                <div className="input-container">
                                    <label>Password </label>
                                    <input id='password' type="password" name="password" required />
                                    {renderErrorMessage("password")}
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