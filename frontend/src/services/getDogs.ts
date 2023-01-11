import axios from "axios"

const getDogs = async () => {
  try {
    const { data } = await axios.get(`https://random.dog/woof.json`)
    return data
  } catch (err: any) {
    throw Error(err.response.data.message)
  }
}

export default getDogs
