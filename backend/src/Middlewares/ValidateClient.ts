import { Response, Request, NextFunction } from "express"

import ErrorApp from "./ErrorApp"

class ValidateClient {
  private req: Request
  private res: Response
  private next: NextFunction

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req
    this.res = res
    this.next = next
  }

  public validateClient() {
    try {
      const { email, name, address, cpf, telephone } = this.req.body
      if (!email || !name || !address || !cpf || !telephone)
        throw new ErrorApp("Check all fields and try again", 400)
      return this.next()
    } catch (err) {
      this.next(err)
    }
  }
}

export default ValidateClient
