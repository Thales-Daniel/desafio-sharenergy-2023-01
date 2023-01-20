import "dotenv/config"
import app from "./app"
import connectToDatabase from "./Models/Connection"
import seedDB from "./Models/seeds/seeds"

const PORT = process.env.PORT || 3001
connectToDatabase()
  .then((teste) => {
    app.listen(PORT, () => console.log(`Running server on port: ${PORT}`))
    seedDB()
  })
  .catch((error) => {
    console.log("Connection with database generated an error:\r\n")
    console.error(error)
    console.log("\r\nServer initialization cancelled")
    process.exit(0)
  })
