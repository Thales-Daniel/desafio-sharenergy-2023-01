import axios from "axios"
import { ClientNoIdType } from "../shared/types/clientType"

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

  createClient: async (body: ClientNoIdType, jwtToken: string) => {
    try {
      const { data } = await api.post(
        "/client/create",
        { ...body },
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

  updateClient: async (id: string, body: ClientNoIdType, jwtToken: string) => {
    try {
      const { data } = await api.put(
        `/client/update/${id}`,
        { ...body },
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

  deleteClient: async (id: string, jwtToken: string) => {
    try {
      const { data } = await api.delete(`/client/delete/${id}`, {
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
