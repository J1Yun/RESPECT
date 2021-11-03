import React from 'react';
import axios from 'axios';

const CallbackPage = () => {
  const getAccessToken = async (code) => {
    const { data } = await axios.post({
      method: 'post',
      url: 'http://localhost:5000/auth',
      code: code,
    });
    // 우리 서버로 code를 전송합니다.

    const accessToken = data; // 서버로부터 받게될 데이터 (5번 과정)
    console.log(accessToken);
    return accessToken;
  };
  console.log(getAccessToken);
  return <div />;
};
export default CallbackPage;
