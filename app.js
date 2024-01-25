const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mainRouter = require("./mainRouter");

const PORT = 3002;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(cors("*"));
app.use(mainRouter);

app.listen(PORT, () => {});

module.exports = app;
