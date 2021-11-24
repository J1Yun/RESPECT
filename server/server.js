const app = require('./app.js');
const port = process.env.PORT || 5000;
require('dotenv').config();

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
