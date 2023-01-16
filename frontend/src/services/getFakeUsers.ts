import axios from "axios"

import { FakeUsersTypes } from "../shared/types/usersFakeTypes"

const getFakeUsers = async () => {
  try {
    const { data }: FakeUsersTypes = await axios.get(
      `https://randomuser.me/api/?inc=gender,name,email,login,dob,cell,picture&results=80`
    )

    return data
  } catch (err: any) {
    throw Error(err.response.data.message)
  }
}

export default getFakeUsers
