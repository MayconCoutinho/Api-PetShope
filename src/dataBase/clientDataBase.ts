import { PrismaClient } from "@prisma/client"
import { ClientAndPetInput } from "../models/clientAndPet"
import { Ok } from "../models/menssage"

export class ClientDataBase {
	constructor(private prisma: PrismaClient) {}

	public clients = async () => {
		const response = await this.prisma.cliente.findMany({
			include: {
				pets: true,
			},
		})

		return response
	}

	public register = async (inputChecked: ClientAndPetInput) => {
		const client = inputChecked.client
		const pet = inputChecked.pet

		await this.prisma.cliente.create({
			data: {
				nome: client.nome,
				telefone: client.telefone,
				pets: {
					create: {
						nome: pet.nome,
						idade: pet.idade,
						tipo: pet.tipo,
						raca: pet.raca,
					},
				},
			},
			include: {
				pets: true,
			},
		})
		const menssage: Ok = {
			menssage: "Cliente cadastrado com sucesso!",
		}
		return menssage
	}
}
