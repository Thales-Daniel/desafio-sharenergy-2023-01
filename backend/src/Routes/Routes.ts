import { Router } from "express"
import LoginController from "../Controllers/UserController"

const routes = Router()

routes.post("/login", (req, res, next) =>
  new LoginController(req, res, next).login()
)

export default routes
