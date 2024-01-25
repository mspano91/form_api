const { Router } = require("express");
const { handlerUser, handlerGetUsers } = require("./handler");

const mainRouter = Router();

mainRouter.post("/user", handlerUser);
mainRouter.get("/list", handlerGetUsers);

module.exports = mainRouter;
