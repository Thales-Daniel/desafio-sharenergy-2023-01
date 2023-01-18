import { NextFunction, Request, Response } from "express"
import IUser from "../Interfaces/IUser"
import LoginService from "../Services/LoginService"

class LoginController {
  private req: Request
  private res: Response
  private next: NextFunction
  private service: LoginService

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req
    this.res = res
    this.next = next
    this.service = new LoginService()
  }

  public async login() {
    const user: IUser = {
      username: this.req.body.username,
      password: this.req.body.password,
    }

    try {
      const loginUser = await this.service.login(user)
      return this.res.status(200).json(loginUser)
    } catch (error) {
      this.next(error)
    }
  }
}

export default LoginController
