import express from "express";
import * as dotevnv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import { userRouter } from "./users/users.routes"
import { productRouter } from "./products/product.routes"

//loads the environment variables from the .env file into the process.env object
dotevnv.config()

//PORT CHECK
if (!process.env.PORT) {
  console.log('No port value specified...')
}

// port retrieved from the env and converted to a number using parseint
const PORT = parseInt(process.env.PORT as string, 10)
//Initialize the express app
const app = express()

//middleware setup
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(helmet())

app.use('/', userRouter)
app.use('/', productRouter)

//starting the server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
