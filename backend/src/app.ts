import express from "express"
import cors from "cors"

import ErrorHandler from "./Middlewares/ErrorHandler"
import routes from "./Routes/Routes"

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)
app.use(ErrorHandler.handle)

export default app
