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

  public async find(user: IUser): Promise<IUser | null> {
    if (!user.username || !user.password)
      throw Error("Username and Password required")

    return this.model.findOne({
      user,
    })
  }
}

export default LoginODM
