import { Router } from "express"
import ClientController from "../Controllers/ClientController"
import LoginController from "../Controllers/LoginController"

const routes = Router()

routes.post("/login", (req, res, next) =>
  new LoginController(req, res, next).login()
)

routes.post("/client/create", (req, res, next) =>
  new ClientController(req, res, next).create()
)

export default routes
