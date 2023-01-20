import LoginODM from "../LoginODM"

const loginConnect: any = new LoginODM()

const seedDB = async () => {
  const username = "desafiosharenergy"
  const password = "sh@r3n3rgy"
  const find = await loginConnect.findByUsername(username)
  if (!find) {
    await loginConnect.insertOne(username, password)
  }
}

export default seedDB
