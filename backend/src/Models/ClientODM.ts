import {
  Model,
  Schema,
  model,
  models,
  isValidObjectId,
  UpdateQuery,
} from "mongoose"
import IClient from "../Interfaces/IClient"

class ClientODM {
  private schema: Schema
  private model: Model<IClient>

  constructor() {
    this.schema = new Schema<IClient>({
      name: { type: String, required: true },
      email: { type: String, required: true },
      telephone: { type: String, required: true },
      cpf: { type: String, required: true },
      address: { type: String, required: true },
    })
    this.model = models.Client || model("Client", this.schema)
  }

  public async findAll(): Promise<IClient[] | []> {
    return this.model.find({})
  }

  public async create(obj: IClient): Promise<IClient> {
    return this.model.create({ ...obj })
  }

  public async delete(id: string) {
    return this.model.deleteOne({ id: id })
  }

  public async update(
    id: string,
    obj: Partial<IClient>
  ): Promise<IClient | null> {
    if (!isValidObjectId(id)) throw Error("Invalid Mongo id")

    return this.model.findByIdAndUpdate(
      { _id: id },
      { ...obj } as UpdateQuery<IClient>,
      { new: true }
    )
  }
}

export default ClientODM
