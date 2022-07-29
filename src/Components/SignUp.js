import React, { useState } from 'react';
import '../SignUp.css'
import Login from './Login';

function SignUp() {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSuccessFul, setIsSuccessFul] = useState(false);
    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "id") {
            setId(value);
        }
        if (id === "name") {
            setName(value);
        }
        if (id === "email") {
            setEmail(value);
        }
        if (id === "password") {
            setPassword(value);
        }
    };
    const handleSubmit = () => {
        console.log(id, name, email, password);
        setIsSuccessFul(true);

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