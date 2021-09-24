const express = require("express");
const app = express();
const test = require("./routes/test.js");
const apitest = require("./routes/apitest");

app.use("/api", test);
app.use("/api/apitest", apitest);

const port = 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
