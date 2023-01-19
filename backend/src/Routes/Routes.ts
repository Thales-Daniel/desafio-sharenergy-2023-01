import { Router } from "express"
import ClientController from "../Controllers/ClientController"
import LoginController from "../Controllers/LoginController"
import ValidateClient from "../Middlewares/ValidateClient"
import AuthJwt from "../Middlewares/AuthJwt"

const routes = Router()

routes.post("/login", (req, res, next) =>
  new LoginController(req, res, next).login()
)

routes.post(
  "/login/validateToken",
  (req, res, next) => new AuthJwt(req, res, next).validateJwt(),
  (req, res, next) => new LoginController(req, res, next).validateToken()
)

routes.post(
  "/client/create",
  (req, res, next) => new AuthJwt(req, res, next).validateJwt(),
  (req, res, next) => new ValidateClient(req, res, next).validateClient(),
  (req, res, next) => new ClientController(req, res, next).create()
)

routes.put(
  "/client/update/:id",
  (req, res, next) => new AuthJwt(req, res, next).validateJwt(),
  (req, res, next) => new ValidateClient(req, res, next).validateClient(),
  (req, res, next) => new ClientController(req, res, next).update()
)

routes.delete(
  "/client/delete/:id",
  (req, res, next) => new AuthJwt(req, res, next).validateJwt(),
  (req, res, next) => new ClientController(req, res, next).delete()
)

routes.get(
  "/client",
  (req, res, next) => new AuthJwt(req, res, next).validateJwt(),
  (req, res, next) => new ClientController(req, res, next).find()
)

export default routes
