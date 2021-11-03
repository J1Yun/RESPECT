import axios from 'axios';
import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';

const CallbackPage = () => {
  const searchParams = new URLSearchParams(useLocation().search);
  const code = searchParams.get('code');

  console.log(code);
  async function getAccessToken(code) {
    try {
      const { token } = await axios
        .post('http://localhost:5000/auth', { code })
        .then((response) => {
          console.log(response.data.accessToken);
          return response.data.accessToken;
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (err) {
      console.log(err);
    }
  }
  const accessToken = getAccessToken(code);
  if (accessToken) {
    return <div id="githubLogin"> Github Login User </div>;
  } else {
    return <div id="githubLogin"> Github Login Failed</div>;
  }
};

export default CallbackPage;
