import axios from 'axios';
import React, { useState } from 'react';
import '../SignUp.css'
import Login from './Login';

function SignUp() {
    const [isSuccessFul, setIsSuccessFul] = useState(false);
    const initialFormState = {
        id: 0,
        name: '',
        email: '',
        password: ''
    };
    const [user, setUser] = useState(initialFormState);
    const handleInputChange = (e) => {
        debugger
        const { id, value } = e.target

        setUser({ ...user, [id]: value });
    };
    const handleSubmit = async () => {
        axios.post('/users', user)
            .then(res => {
                debugger
                setIsSuccessFul(true);
            })
        setIsSuccessFul(true);

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
            {(isSuccessFul === true) ?
                <Login /> :
                <div className="form">
                    <div className="signup-form">
                        <h4 className='title'>Registration</h4>
                        <div className="form-body">
                            <div className="id">
                                <label className="form__label" for="id">Id</label>
                                <input onChange={(e) => handleInputChange(e)} type="number" name="" id="id" className="form__input" placeholder="Id" />
                            </div>
                            <div className="username">
                                <label className="form__label" for="name">Name </label>
                                <input onChange={(e) => handleInputChange(e)} className="form__input" type="text" id="name" placeholder="Name" />
                            </div>
                            <div className="email">
                                <label className="form__label" for="email">Email </label>
                                <input onChange={(e) => handleInputChange(e)} type="email" id="email" className="form__input" placeholder="Email" />
                            </div>
                            <div className="password">
                                <label className="form__label" for="password">Password </label>
                                <input onChange={(e) => handleInputChange(e)} className="form__input" type="password" id="password" placeholder="Password" />
                            </div>
                            <div className='showpassword'>
                                <label className="form__label" for="showpassword"> </label>
                                <input type="checkbox" onClick={toggle} />Show Password
                            </div>
                        </div>
                        <div class="button-container">
                            <button onClick={() => handleSubmit()} type="submit" class="submitBtn">Register</button>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default SignUp