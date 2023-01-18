import { NextFunction, Request, Response } from "express"
import IClient from "../Interfaces/IClient"
import ClientService from "../Services/ClientService"

class ClientController {
  private req: Request
  private res: Response
  private next: NextFunction
  private service: ClientService

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req
    this.res = res
    this.next = next
    this.service = new ClientService()
  }

  public async create() {
    const { name, email, address, telephone, cpf } = this.req.body
    const client: IClient = {
      name: name,
      email: email,
      address: address,
      telephone: telephone,
      cpf: cpf,
    }

    try {
      const createClient = await this.service.create(client)
      return this.res.status(200).json(createClient)
    } catch (error) {
      this.next(error)
    }
  }
}

export default ClientController
