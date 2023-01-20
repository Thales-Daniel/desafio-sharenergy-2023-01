import { DeleteResult } from "mongodb"
import IClient from "../Interfaces/IClient"
import ErrorApp from "../Middlewares/ErrorApp"
import ClientODM from "../Models/ClientODM"

class ClientService {
  private clientOdm = new ClientODM()

  public async create(clientObj: IClient): Promise<IClient | null> {
    const client = await this.clientOdm.create(clientObj)

    if (!client) throw new ErrorApp("User not found!", 404)

    return client
  }

  public async update(id: string, clientObj: IClient): Promise<IClient | null> {
    console.log(clientObj)
    const client = await this.clientOdm.update(id, clientObj)

    if (!client) throw new ErrorApp("User not found!", 404)

    return client
  }

  public async delete(id: string): Promise<DeleteResult> {
    const client = await this.clientOdm.delete(id)

    if (!client) throw new ErrorApp("Id not Found", 404)

    return client
  }

  public async findAll(): Promise<IClient[] | []> {
    const client = await this.clientOdm.findAll()

    return client
  }
}

export default ClientService
