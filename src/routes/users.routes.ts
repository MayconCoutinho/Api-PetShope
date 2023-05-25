import { Router } from "express"
import { UsersBusiness } from "../business/usersBusiness"
import { UsersController } from "../controller/usersController"
import { UsersDataBase } from "../dataBase/usersDataBase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"
import { RGBGenerator } from "../services/RGBGenarator"
import { CheckingUserData } from "../services/CheckingUserData"
import { GetInfoUser } from "../services/GetInfoUser"

export const userRouter = Router()

const usersController = new UsersController(
	new UsersBusiness(
		new UsersDataBase(),
		new RGBGenerator(),
		new IdGenerator(),
		new HashManager(),
		new Authenticator(),
		new CheckingUserData(),
		new GetInfoUser()
	)
)
userRouter.post("/register", usersController.signup)
userRouter.post("/login", usersController.login)
userRouter.get("/info", usersController.infoUser)

export default userRouter
