import { PetDataBase } from "../dataBase/petDataBase"
import { ParamsError } from "../errors/ParamsError"

export class PetBusiness {
	constructor(private petDataBase: PetDataBase) {}

	public patchPet = async (clientId: string, petId: string, dataToUpdate: string) => {
		if (!clientId) {
			throw new ParamsError("Confira se colocou o id do cliente!")
		}
		if (!petId) {
			throw new ParamsError("Confira se colocou o id do pet!")
		}
		if (!dataToUpdate) {
			throw new ParamsError("Confira se colocou oque quer mudar!")
		}

		const result = await this.petDataBase.patchPet(clientId, petId, dataToUpdate)

		return result
	}

	public deletePet = async (input: any) => {
		const { idClient, idPet } = input

		if (!idClient) {
			throw new ParamsError("Confira se colocou o id do cliente!")
		}
		if (!idPet) {
			throw new ParamsError("Confira se colocou o id do Pet!")
		}

		const result = await this.petDataBase.deletePet(input)

		return result
	}
}
