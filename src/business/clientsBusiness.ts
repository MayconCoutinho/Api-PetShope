import { ClientDataBase } from "../dataBase/clientDataBase"
import { ParamsError } from "../errors/ParamsError"
import { ClientAndPetDB, ClientAndPetInput, ClientInput, ClienteDB, PetDB } from "../models/clientAndPet"
import { Ok } from "../models/menssage"
import { CheckingInputClient } from "../services/CheckingInputClient"
import { CheckingInputPet } from "../services/CheckingInputPet"
import { IdGenerator } from "../services/IdGenerator"

export class ClientBusiness {
	constructor(
		private clientDataBase: ClientDataBase,
		private checkingInputClient: CheckingInputClient,
		private checkingInputPet: CheckingInputPet,
		private idGenerator: IdGenerator
	) {}

	public patchClient = async (clientId: string, dataToUpdate: any) => {
		// Fazer a confirmação do token do administrador
		if (!clientId) {
			throw new ParamsError("Confira se colocou o id do cliente!")
		}
		if (!dataToUpdate) {
			throw new ParamsError("Confira se colocou oque quer mudar!")
		}

		const response = await this.clientDataBase.patchClient(clientId, dataToUpdate)

		return response
	}

	public clients = async () => {
		// Fazer a confirmação do token do administrador

		const response = await this.clientDataBase.clients()

		return response
	}

	public register = async (input: ClientAndPetInput): Promise<Ok | void> => {
		// Fazer a confirmação do token do administrador

		const client = input.client
		const pet = input.pet

		await this.checkingInputClient.CheckinClient(client)
		await this.checkingInputPet.CheckinPet(pet)

		const { nome, telefone } = client

		const id = this.idGenerator.generate()

		let clientName = nome.toLowerCase()
		const firstLetterClient = nome[0].toUpperCase()
		const clientNameMod = clientName.replace(clientName[0], firstLetterClient)

		let petName = pet.nome.toLowerCase()
		const firstLetterPet = pet.nome[0].toUpperCase()
		const petNameMod = petName.replace(petName[0], firstLetterPet)

		const inputClientChecked: ClienteDB = {
			id: id,
			nome: clientNameMod,
			telefone,
		}

		const inputPetChecked: PetDB = {
			idade: pet.idade,
			nome: petNameMod,
			raca: pet.raca,
			tipo: pet.tipo,
			dono: inputClientChecked,
		}

		const inputClientAndPetOK: ClientAndPetDB = {
			client: inputClientChecked,
			pet: inputPetChecked,
		}

		const response = await this.clientDataBase.register(inputClientAndPetOK)
		return response
	}
	public deleteClient = async (id: string) => {
		// Fazer a confirmação do token do administrador

		if (!id) {
			throw new ParamsError("Confira se colocou o id do cliente!")
		}

		const response = await this.clientDataBase.deleteClient(id)

		return response
	}
}
