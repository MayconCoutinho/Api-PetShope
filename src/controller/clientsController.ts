import { ClientBusiness } from "../business/clientsBusiness"
import { BaseError } from "../errors/BaseError"
import { Request, Response } from "express"
import { ClientAndPetInput } from "../models/clientAndPet"

export class ClientsController {
	constructor(private clientBusiness: ClientBusiness) {}

	public clients = async (req: Request, res: Response) => {
		// pegar dados de confirmação do token do administrador

		try {
			const response = await this.clientBusiness.clients()

			res.status(200).send(response)
		} catch (error) {
			console.log(error)
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message })
			}
			res.status(500).send({ message: "Erro inesperado ao cadastrar um Cliente" })
		}
	}

	public register = async (req: Request, res: Response) => {
		// pegar dados de confirmação do token do administrador

		try {
			const input: ClientAndPetInput = {
				client: {
					nome: req.body.client.nome,
					telefone: req.body.client.telefone,
				},
				pet: {
					idade: req.body.pet.idade,
					nome: req.body.pet.nome,
					raca: req.body.pet.raca,
					tipo: req.body.pet.tipo,
				},
			}

			console.log(input)
			const response = await this.clientBusiness.register(input)

			res.status(200).send(response)
		} catch (error) {
			console.log(error)
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message })
			}
			res.status(500).send({ message: "Erro inesperado ao cadastrar um Cliente" })
		}
	}
}
