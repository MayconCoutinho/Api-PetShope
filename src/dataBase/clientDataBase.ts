import { PrismaClient } from "@prisma/client"
import { ClienteDB } from "../models/client"
import { Ok } from "../models/menssage"

export class ClientDataBase {
	constructor(private prisma: PrismaClient) {}

	public clients = async () => {}

	public register = async (inputChecked: ClienteDB) => {
		const { id, nome, telefone } = inputChecked

		await this.prisma.cliente.create({
			data: {
				id,
				nome,
				telefone,
			},
		})
		const menssage: Ok = {
			menssage: "Cliente cadastrado com sucesso!",
		}

		return menssage
	}
}
