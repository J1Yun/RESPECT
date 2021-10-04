import { useState } from 'react';
import {FiLogIn} from 'react-icons/fi'
import {BsFillPersonFill} from 'react-icons/bs'
import {BiKey} from 'react-icons/bi'

import './style/LoginPage.css'

const LoginPage = () =>{

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const icon = {
        left: "25px",
        top: "10px",
        position:"absolute",
        transform: "translateX(-50%)"
    }

    const onEmailChange = (event) =>{
        const {target: {value}} = event
        setEmail(value)
    }

    const onPasswordChange = (event) =>{
        const {target: {value}} = event
        setPassword(value)
    }

    const onLoginSubmit = (event) =>{
        event.preventDefault()
        console.log(email, password)
    }

    return (
        <div style={{"height":"800px"}}>
            <div id="header">
            </div>
            <div id="login-container">
                <h2 id="login-txt">Sign In</h2>
                <form onSubmit={onLoginSubmit}>
                    <div id="email-icon">
                        <BsFillPersonFill style={icon} color="#747474" size={30}/>
                    </div>
                    <input id="email-input" type="email" value={email} onChange={onEmailChange}/>
                    
                    <div id="password-icon">
                        <BiKey style={icon} color="#747474" size={30}/>
                    </div>
                    <input id="password-input" type="password" value={password} onChange={onPasswordChange}/>

                    <button style={{'cursor':'pointer'}} id="submit-btn" type="submit">
                        <FiLogIn color="#747474" size={30}/>
                    </button>
                </form>
            </div>
        </div>
    );

}

export default LoginPage;