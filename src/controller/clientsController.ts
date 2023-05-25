import { ClientBusiness } from "../business/clientsBusiness"
import { BaseError } from "../errors/BaseError"
import { InputClientAndPet } from "../models/client"
import { Request, Response } from "express"

export class ClientsController {
	constructor(clientBusiness: ClientBusiness) {}

	public clients = async () => {}

	public register = async (req: Request, res: Response) => {
		try {
			const input: InputClientAndPet = {
				client: {
					nome: req.body.nome,
					telefone: req.body.telefone,
				},
				pet: {
					idade: req.body.idade,
					nome: req.body.nome,
					raca: req.body.raca,
					tipo: req.body.tipo,
				},
			}
			// const response = await this

			res.status(200).send(input)
		} catch (error) {
			console.log(error)
			if (error instanceof BaseError) {
				return res.status(error.statusCode).send({ message: error.message })
			}
			res.status(500).send({ message: "Erro inesperado ao cadastrar um Cliente" })
		}
	}
}
