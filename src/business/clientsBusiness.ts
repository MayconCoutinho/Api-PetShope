import { ClientDataBase } from "../dataBase/clientDataBase"
import { ClientInput, ClienteDB } from "../models/client"
import { Ok } from "../models/menssage"
import { CheckingInputClient } from "../services/CheckingInputClient"
import { IdGenerator } from "../services/IdGenerator"

export class ClientBusiness {
	constructor(
		private clientDataBase: ClientDataBase,
		private checkingInputClient: CheckingInputClient,
		private idGenerator: IdGenerator
	) {}

	public clients = async () => {
		// Fazer a confirmação do token do administrador
	}

	public register = async (client: ClientInput): Promise<Ok> => {
		// Fazer a confirmação do token do administrador

		await this.checkingInputClient.CheckinClient(client)

		const { nome, telefone } = client
		const id = this.idGenerator.generate()

		const inputChecked: ClienteDB = {
			id,
			nome,
			telefone,
		}
		const response = await this.clientDataBase.register(inputChecked)
		return response
	}
}
