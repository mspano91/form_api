const { Router } = require("express");

const mainRouter = Router();

mainRouter.request("/", "hello world");

module.exports = mainRouter;
