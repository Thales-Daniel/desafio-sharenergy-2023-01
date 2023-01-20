import LoginODM from "../LoginODM"

const loginConnect: any = new LoginODM()

const seedDB = async () => {
  const username = "desafiosharenergy"
  const password = "sh@r3n3rgy"

  await loginConnect.insertOne(username, password)
}

seedDB()
