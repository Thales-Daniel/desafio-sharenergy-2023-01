import { NextFunction, Request, Response } from "express"
import { IServiceValidate } from "../Interfaces/IServiceUser"
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

  public async validateToken() {
    const username = this.res.locals.username
    const jwtToken = this.res.locals.token
    const user: IServiceValidate = {
      username,
      jwtToken,
    }

    try {
      const tokenAndUsername = await this.service.validateToken(user)
      return this.res.status(200).json(tokenAndUsername)
    } catch (error) {
      this.next(error)
    }
  }
}

export default LoginController
