import axios from "axios"

const getCats = async (code: string) => {
  try {
    const { data } = await axios.get(`https://http.cat/${code}`)
    return data
  } catch (err: any) {
    throw Error(err.response.data.message)
  }
}

export default getCats
