// import { useState } from 'react';

// import 'pages/RegisterPage/styles/RegisterPage.css';
// import axios from 'axios';
// import { response } from 'express';
// import { assertDeclareTypeAlias } from 'babel-types';

// const RegisterPage = () => {
//   const [userInput, setUserInput] = useState({
//     nickname: '@',
//     password: '',
//     passwordConfirm: '',
//     name: '',
//   });
//   // const [nickname, setNickname] = useState('@');
//   // const [password, setPassword] = useState();
//   // const [passwordConfirm, setPasswordConfirm] = useState();
//   // const [name, setName] = useState();

//   const onPasswordChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setUserInput({ ...userInput, password: value });
//     console.log(userInput);
//   };

//   const onPasswordConfirmChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setUserInput({ ...userInput, passwordConfirm: value });
//     console.log(userInput);
//   };

//   const onNameChange = (event) => {
//     const {
//       target: { value },
//     } = event;
//     setUserInput({ ...userInput, name: value });
//     console.log(userInput);
//   };

//   const onNicknameChange = (event) => {
//     let {
//       target: { value },
//     } = event;
//     if (!value.includes('@')) {
//       value = '@' + value;
//     }
//     setUserInput({ ...userInput, nickname: value });
//     console.log(userInput);
//   };

//   const onRegisterSubmit = (event) => {
//     event.preventDefault();
//     console.log(userInput.nickname, userInput.password);
//     axios.post('dev/login', { userInput }).then((response) => {
//       if (response.data.isSuccess) {
//         location.href = '/login';
//       } else {
//         alert(response.data.message);
//       }
//     });
//   };

//   return (
//     <div style={{ height: '800px' }}>
//       <div id="header"></div>
//       <div id="register-container">
//         <h2 id="register-txt">Join</h2>
//         <form onSubmit={onRegisterSubmit}>
//           <label className="register-label" id="r-nickname-label" for="r-nickname-input">
//             닉네임(ID)
//           </label>
//           <input className="register-input" id="r-nickname-input" type="text" value={userInput.nickname} onChange={onNicknameChange} />

//           <label className="register-label" id="r-password-label" for="r-password-input">
//             비밀번호
//           </label>
//           <input className="register-input" id="r-password-input" type="password" value={userInput.password} onChange={onPasswordChange} />

//           <label className="register-label" id="r-password-confirm-label" for="r-password-confirm-input">
//             비밀번호 확인
//           </label>
//           <input
//             className="register-input"
//             id="r-password-confirm-input"
//             type="password"
//             value={userInput.passwordConfirm}
//             onChange={onPasswordConfirmChange}
//           />

//           <label className="register-label" id="r-name-label" for="r-name-input">
//             이름
//           </label>
//           <input className="register-input" id="r-name-input" type="text" value={userInput.name} onChange={onNameChange} />

//           <button style={{ cursor: 'pointer' }} id="r-submit-btn" type="submit">
//             가입하기
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
