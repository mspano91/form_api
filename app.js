const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = 3002;
const app = express();

app.use(morgan("dev"));
app.use(cors("*"));

app.listen(PORT, () => {});

module.exports = app;
