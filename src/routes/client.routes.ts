import { Router } from "express"
import { ClientsController } from "../controller/clientsController"
import { ClientBusiness } from "../business/clientsBusiness"
import { ClientDataBase } from "../dataBase/clientDataBase"

const clientRouter = Router()

const clientController = new ClientsController(new ClientBusiness(new ClientDataBase()))

clientRouter.get("/clients", clientController.clients)
clientRouter.post("/register", clientController.register)

export default clientRouter
