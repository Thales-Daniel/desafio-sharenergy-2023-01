import jwtSign from "../Helpers/funcs/jwtSign"
import { IServiceUser, IServiceValidate } from "../Interfaces/IServiceUser"
import IUser from "../Interfaces/IUser"
import LoginODM from "../Models/LoginODM"

class LoginService {
  public async login(userObj: IUser): Promise<IServiceUser | null> {
    const userOdm = new LoginODM()

    if (!userObj.username || !userObj.password)
      throw Error("Username and Password required")

    const user = await userOdm.findByUsername(userObj.username)

    if (!user) throw Error("User not found!")

    if (userObj.password !== user.password)
      throw new Error("Incorrect password")

    const token = jwtSign(userObj)

    return { jwtToken: token }
  }

  public validateToken(data: IServiceValidate): IServiceValidate | null {
    return { username: data.username, jwtToken: data.jwtToken }
  }
}

export default LoginService
