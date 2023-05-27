import { PetBusiness } from "../business/petBusiness"
import { BaseError } from "../errors/BaseError"
import { Request, Response } from "express"

export class PetController {
	constructor(private petBusiness: PetBusiness) {}

	public patchPet = async (req: Request, res: Response) => {
		try {
			const clientId = req.params.clientId
			const petId = req.params.petId
			const dataToUpdate = req.body.data

			const response = await this.petBusiness.patchPet(clientId, petId, dataToUpdate)

			res.status(200).send(response)
		} catch (error) {
			console.log(error)
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message })
			}
			res.status(500).send({ message: "Erro inesperado ao cadastrar um Cliente" })
		}
	}

	public deletePet = async (req: Request, res: Response) => {
		try {
			const input = {
				idClient: req.body.idClient,
				idPet: req.body.idPet,
			}
			const response = await this.petBusiness.deletePet(input)

			res.status(200).send(response)
		} catch (error) {
			console.log(error)
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message })
			}
			res.status(500).send({ message: "Erro inesperado ao excluir um Pet" })
		}
	}
}
