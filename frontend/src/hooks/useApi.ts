import axios from "axios"

import BodyTypes from "../shared/types/bodyTypes"

const api = axios.create({
  baseURL: "http://localhost:3001/",
})

const useApi = () => ({
  signin: async (body: BodyTypes) => {
    try {
      const { data } = await api.post("/login", {
        ...body,
      })
      return data
    } catch (err: any) {
      throw Error(err.response.data.message)
    }
  },
})

export default useApi
