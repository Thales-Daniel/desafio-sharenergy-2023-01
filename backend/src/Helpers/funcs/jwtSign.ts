import jwt from "jsonwebtoken"
import { fileReader } from "./fileReader"

function jwtSign(data: unknown) {
  const secret = fileReader("jwt.evaluation.key")
  const token = jwt.sign({ data }, secret, {
    expiresIn: "24h",
  })

  return token
}

export default jwtSign
