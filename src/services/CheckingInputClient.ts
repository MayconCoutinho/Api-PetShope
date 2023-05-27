import { ParamsError } from "../errors/ParamsError"
import { ClientInput } from "../models/clientAndPet"

export class CheckingInputClient {
	private ClientPhoneNumber = async (phone: string): Promise<void> => {
		if (!phone) {
			throw new ParamsError("Confira se colocou o numero de telefone!")
		}
		const phoneModInt = parseInt(phone)
		const phoneModString = phoneModInt.toString()

		if (phoneModString.length > 11 || phoneModString.length < 11) {
			throw new ParamsError(
				`Confira se colocou o numero de telefone corretamente! Aceitamos apenas 11 numeros,e indentificamos ${phoneModString.length} numeros, sendo numero de cidade e numero de telefone tudo junto ex: 28999287132`
			)
		}
	}
	private ClientName = async (name: string): Promise<void> => {
		if (!name) {
			throw new ParamsError("Confira se colocou o nome do cliente!")
		}
	}
	public CheckinClient = async (client: ClientInput): Promise<void> => {
		await this.ClientName(client.nome)
		await this.ClientPhoneNumber(client.telefone)
	}
}
