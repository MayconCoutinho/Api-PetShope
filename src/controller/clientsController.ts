import { ClientBusiness } from "../business/clientsBusiness"
import { BaseError } from "../errors/BaseError"
import { Request, Response } from "express"
import { ClientInput } from "../models/client"

export class ClientsController {
	constructor(private clientBusiness: ClientBusiness) {}

	public clients = async () => {}

	public register = async (req: Request, res: Response) => {
		try {
			const input: ClientInput = {
				nome: req.body.nome,
				telefone: req.body.telefone,
			}
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
