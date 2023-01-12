import axios from "axios"

const getDogs = async (code: string) => {
  try {
    const { data }: { data: { url: string; fileSizeBytes: number } } =
      await axios.get(`https://http.cat/${code}`)

    return data
  } catch (err: any) {
    throw Error(err.response.data.message)
  }
}

export default getDogs
