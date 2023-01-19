import { Response, Request, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import "dotenv/config"

import ErrorApp from "./ErrorApp"

type JwtPayload = {
  data: {
    password: string
    username: string
    token: string
  }
}

class AuthJwt {
  private req: Request
  private res: Response
  private next: NextFunction
  private readonly secret = process.env.JWT_SECRET || ""

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req
    this.res = res
    this.next = next
  }

  public validateJwt() {
    try {
      const token = this.req.headers.authorization

      if (!token) throw new ErrorApp("Token not Found", 401)

      const { data } = verify(token, this.secret) as JwtPayload

      console.log(this.secret)

      this.res.locals.username = data.username.toString()
      this.res.locals.password = data.password.toString()
      this.res.locals.token = token

      return this.next()
    } catch (err) {
      this.next(err)
    }
  }
}

export default AuthJwt
