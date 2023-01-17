import IUser from "../Interfaces/IUser"
import LoginODM from "../Models/LoginODM"

class LoginService {
  public async login(userObj: IUser): Promise<IUser | null> {
    const userOdm = new LoginODM()

    const user = await userOdm.find(userObj)

    console.log(user)

    if (!user) throw Error("Username and Password required")

    return user
  }
}

export default LoginService
