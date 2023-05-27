import { ClientDataBase } from "../dataBase/clientDataBase"
import { ClientAndPetInput, ClientInput, ClienteDB, PetDB } from "../models/clientAndPet"
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
			id,
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

		const inputClientAndPetOK: ClientAndPetInput = {
			client: inputClientChecked,
			pet: inputPetChecked,
		}

		const response = await this.clientDataBase.register(inputClientAndPetOK)
		return response
	}
}
