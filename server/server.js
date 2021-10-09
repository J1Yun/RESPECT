const express = require('express');
const app = express();
const logger = require('morgan');
const home = require('./src/routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', home);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
