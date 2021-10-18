module.exports = {
  get: async (req, res) => {
    const { session, query } = req;
    const { code } = query;

    console.log(session, code);

    const url = `https://github.com/login/oauth/access_token?client_id=${github.clientID}&client_secret=${github.clientSecret}&code=${code}`;
    try {
      const access_token = await axios({
        method: 'POST',
        url: url,
        Headers: {
          'content-type': 'application/json',
        },
      });
      console.log(`response.data:${access_token.data}`);
      let access_token_split = access_token.data.split('&')[0].split('=')[1];
      console.log(`access_token:${access_token_split}`);

      try {
        const userResponse = await axios({
          method: 'GET',
          url: 'https://api.github.com/user',
          headers: {
            Authorization: `token ${access_token_split}`,
          },
        });
        console.log('social login result:', userResponse.data);
        // 받아온 유저 데이터를 DB에 저장하는 코드
      } catch (error) {
        res.status(500);
      }
    } catch (err) {
      return res.json(err.data);
    }
  },
};
