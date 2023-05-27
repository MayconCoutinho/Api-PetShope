import { Router } from "express"
import { PetController } from "../controller/petController"
import { PetBusiness } from "../business/petBusiness"
import { PetDataBase } from "../dataBase/petDataBase"
import { PrismaClient } from "@prisma/client"

const petRouter = Router()

const petController = new PetController(new PetBusiness(new PetDataBase(new PrismaClient())))

petRouter.patch("/client/:clientId/pet/:petId", petController.patchPet)
petRouter.delete("/pet", petController.deletePet)

export default petRouter
