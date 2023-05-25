import { Router } from "express"
import { ClientsController } from "../controller/clientsController"
import { ClientBusiness } from "../business/clientsBusiness"
import { ClientDataBase } from "../dataBase/clientDataBase"
import { PrismaClient } from "@prisma/client"
import { CheckingInputClient } from "../services/CheckingInputClient"
import { IdGenerator } from "../services/IdGenerator"

const clientRouter = Router()

const clientController = new ClientsController(
	new ClientBusiness(
		new ClientDataBase(new PrismaClient()),
		new CheckingInputClient(),
		new IdGenerator()
	)
)

clientRouter.get("/clients", clientController.clients)
clientRouter.post("/client/register", clientController.register)

export default clientRouter
