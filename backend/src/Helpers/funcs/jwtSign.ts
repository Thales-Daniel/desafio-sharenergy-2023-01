import jwt from "jsonwebtoken"

function jwtSign(data: unknown) {
  const secret = process.env.JWT_SECRET || ""
  const token = jwt.sign({ data }, secret, {
    expiresIn: "24h",
  })

  return token
}

export default jwtSign
