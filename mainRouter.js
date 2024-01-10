const { Router } = require("express");

const mainRouter = Router();

mainRouter.get("/", "aca va el handler");

module.exports = mainRouter;
