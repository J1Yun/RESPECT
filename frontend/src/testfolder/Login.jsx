import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login() {
  const [text, setText] = useState('');

  const callApi = async () => {
    axios.get('/api/login').then(res => {
      const data = res.data.text;
      setText(data);
    });
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div>{text}</div>
      <div>Login</div>
      <Link to={`/second`}>click!</Link>
    </>
  );
}
