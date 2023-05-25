import { Router } from "express"
import { PetController } from "../controller/petController"
import { PetBusiness } from "../business/petBusiness"
import { PetDataBase } from "../dataBase/petDataBase"

const petRouter = Router()

const petController = new PetController(new PetBusiness(new PetDataBase()))

petRouter.get("/pet", petController.putPet)
petRouter.put("/pet", petController.putPet)
petRouter.post("/pet", petController.addPet)
petRouter.delete("/pet", petController.deletePet)

export default petRouter
