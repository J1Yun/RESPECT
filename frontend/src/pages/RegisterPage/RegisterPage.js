import { useState } from 'react';


import './style/RegisterPage.css'

const RegisterPage = () =>{

    const [nickname, setNickname] = useState("@")
    const [password, setPassword] = useState()
    const [passwordConfirm, setPasswordConfirm] = useState()
    const [name, setName] = useState()

    const onPasswordChange = (event) =>{
        const {target: {value}} = event
        setPassword(value)
    }

    const onPasswordConfirmChange = (event) =>{
        const {target: {value}} = event
        setPasswordConfirm(value)
    }

    const onNameChange = (event) =>{
        const {target: {value}} = event
        setName(value)
    }

    const onNicknameChange = (event) =>{
        let {target: {value}} = event
        if(!value.includes("@")){
            value = "@"+value
        }
        setNickname(value)
    }

    const onRegisterSubmit = (event) =>{
        event.preventDefault()
        console.log(nickname, password)
    }

    return (
        <div style={{"height":"800px"}}>
            <div id="header">
            </div>
            <div id="register-container">
                <h2 id="register-txt">Join</h2>
                <form onSubmit={onRegisterSubmit}>
                    <label className="register-label" id="r-nickname-label" for="r-nickname-input">닉네임(ID)</label>
                    <input className="register-input" id="r-nickname-input" type="text" value={nickname} onChange={onNicknameChange}/>
                    
                    <label className="register-label" id="r-password-label" for="r-password-input">비밀번호</label>
                    <input className="register-input" id="r-password-input" type="password" value={password} onChange={onPasswordChange}/>

                    <label className="register-label" id="r-password-confirm-label" for="r-password-confirm-input">비밀번호 확인</label>
                    <input className="register-input" id="r-password-confirm-input" type="password" value={passwordConfirm} onChange={onPasswordConfirmChange}/>

                    <label className="register-label" id="r-name-label" for="r-name-input">이름</label>
                    <input className="register-input" id="r-name-input" type="text" value={name} onChange={onNameChange}/>
                    
                    
                    <button style={{'cursor':'pointer'}} id="r-submit-btn" type="submit">
                        가입하기
                    </button>
                </form>
            </div>
        </div>
    );

}

export default RegisterPage;