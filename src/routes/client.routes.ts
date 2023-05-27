import { Router } from "express"
import { ClientsController } from "../controller/clientsController"
import { ClientBusiness } from "../business/clientsBusiness"
import { ClientDataBase } from "../dataBase/clientDataBase"
import { PrismaClient } from "@prisma/client"
import { CheckingInputClient } from "../services/CheckingInputClient"
import { IdGenerator } from "../services/IdGenerator"
import { CheckingInputPet } from "../services/CheckingInputPet"

const clientRouter = Router()

const clientController = new ClientsController(
	new ClientBusiness(
		new ClientDataBase(new PrismaClient()),
		new CheckingInputClient(),
		new CheckingInputPet(),
		new IdGenerator()
	)
)

clientRouter.get("/clients", clientController.clients)
clientRouter.post("/client/register", clientController.register)
clientRouter.patch("/client/:clientId", clientController.patchClient)
clientRouter.delete("/client", clientController.deleteClient)

export default clientRouter
