import { Model, Schema, model, models } from "mongoose"
import IUser from "../Interfaces/IUser"

class LoginODM {
  private schema: Schema
  private model: Model<IUser>

  constructor() {
    this.schema = new Schema<IUser>({
      username: { type: String, required: true },
      password: { type: String, required: true },
    })
    this.model = models.User || model("User", this.schema)
  }

  public async findByUsername(username: string): Promise<IUser | null> {
    return this.model.findOne({
      username,
    })
  }

  public async insertOne(
    username: string,
    password: string
  ): Promise<IUser | null> {
    return this.model.create({
      username,
      password,
    })
  }
}

export default LoginODM
