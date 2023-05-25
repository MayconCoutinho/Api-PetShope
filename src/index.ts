import express from "express"
import usersRouter from "./routes/users.routes"
import cors from "cors"
import clientRouter from "./routes/client.routes"
import petRouter from "./routes/pet.routes"

const app = express()

app.use(express.json())

app.use(cors())
app.use("/users", usersRouter)
app.use("/admin", clientRouter)
app.use("/admin", petRouter)

export { app }
