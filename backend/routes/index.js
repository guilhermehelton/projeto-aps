import { Router } from "express";
import confirmGoogleLoginController from "../controller/confirmGoogleLoginController.js";

const routes = new Router();

routes.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo a API" });
});

routes.post("/confirm-google-login", confirmGoogleLoginController);

export default routes;
