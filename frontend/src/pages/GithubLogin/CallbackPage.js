import React from 'react';

import axios from 'axios';

import { useLocation } from 'react-router-dom';

export default function CallbackPage() {
  const searchParams = new URLSearchParams(useLocation().search);
  const code = searchParams.get('code');
  // CallbackPage의 URL로부터 쿼리스트링을 읽고, code를 추출합니다.

  const getAccessToken = async (code) => {
    const { data } = await axios.post('http://localhost:5000/auth', { code });
    // 우리 서버로 code를 전송합니다.

    const { accessToken, userInfomation } = data; // 서버로부터 받게될 데이터 (5번 과정)
  };

  return <div />;
}
