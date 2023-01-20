import axios from "axios"

import User from "../shared/types/userType"

const api = axios.create({
  baseURL: "http://localhost:3001/",
})

const useApi = () => ({
  signin: async (body: User) => {
    try {
      const { data } = await api.post("/login", {
        ...body,
      })
      return data
    } catch (err: any) {
      throw Error(err.response.data.message)
    }
  },
  validateToken: async (jwtToken: string) => {
    try {
      const { data } = await api.post(
        "/login/validateToken",
        {},
        {
          headers: {
            authorization: jwtToken,
          },
        }
      )
      return data
    } catch (err: any) {
      throw Error(err.response.data.message)
    }
  },

  findAll: async (jwtToken: string) => {
    try {
      const { data } = await api.get("/client", {
        headers: {
          authorization: jwtToken,
        },
      })
      return data
    } catch (err: any) {
      throw Error(err.response.data.message)
    }
  },
})

export default useApi
