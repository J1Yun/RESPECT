const express = require('express');
const app = express();
const home = require('./src/routes/index');

app.use('/api', home);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
