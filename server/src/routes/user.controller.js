const output = {
  login: (req, res) => {
    console.log('hihi');
    res.send({ text: 'login' });
  },
};

const process = {};

module.exports = {
  output,
  process,
};
