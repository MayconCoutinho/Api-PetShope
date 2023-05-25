import { ParamsError } from "../errors/ParamsError"
import { PetInput } from "../models/client"

export class CheckingInputPet {
	private petAge = async (age: number): Promise<void> => {
		if (!age) {
			throw new ParamsError("Confira se colocou a idade do pet!")
		}
		if (age > 30) {
			throw new ParamsError(
				"Parabens seu pet bateu o recorde mundial de idade!, essa idade ta certa?"
			)
		}
		if (age < 0) {
			throw new ParamsError("Seu pet ainda não nasceu? A idade não pode ser negativa!")
		}
	}
	private petRace = async (race: string): Promise<void> => {
		if (!race) {
			throw new ParamsError("Confira se colocou a raça do pet!")
		}
	}
	private petType = async (type: string): Promise<void> => {
		const typeMod = type.toLocaleLowerCase()

		if (!typeMod) {
			throw new ParamsError("Confira se colocou o tipo do pet!")
		}
		if (!typeMod) {
			throw new ParamsError("Confira se colocou a raça do pet!")
		}
		if (typeMod !== "cachorro" && typeMod !== "gato") {
			throw new ParamsError("Só atendemos os pets do tipo gato e cachorro! confira a tipo")
		}
	}
	private petName = async (name: string): Promise<void> => {
		if (!name) {
			throw new ParamsError("Confira se colocou o nome do pet!")
		}
	}
	public CheckinPet = async (pet: PetInput): Promise<void> => {
		await this.petAge(pet.idade)
		await this.petName(pet.nome)
		await this.petRace(pet.raca)
		await this.petType(pet.tipo)
	}
}
