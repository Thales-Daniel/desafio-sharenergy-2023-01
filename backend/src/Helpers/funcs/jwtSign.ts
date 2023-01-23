import jwt from "jsonwebtoken"

function jwtSign(data: unknown) {
  const secret = process.env.JWT_SECRET || "random"
  const token = jwt.sign({ data }, secret, {
    expiresIn: "24h",
    algorithm: "HS256",
  })

  return token
}

export default jwtSign
