import { PrismaClient } from "@prisma/client"
import { ClientAndPetInput } from "../models/clientAndPet"
import { Ok } from "../models/menssage"
import { NotFoundError } from "../errors/NotFoundError"

export class ClientDataBase {
	constructor(private prismaClient: PrismaClient) {}

	public patchClient = async (clientId: string, dataToUpdate: any) => {
		try {
			await this.prismaClient.cliente.updateMany({
				where: { id: clientId },
				data: dataToUpdate,
			})

			const ok: Ok = {
				menssage: `Os dados foram mudado com sucesso`,
			}
			return ok
		} catch (error) {
			console.error("Deu algum erro no banco", error)
			throw new NotFoundError("Error no banco de dados ao mudar os dados Cliente")
		} finally {
			await this.prismaClient.$disconnect()
		}
	}

	public clients = async () => {
		const response = await this.prismaClient.cliente.findMany({
			include: {
				pets: true,
			},
		})

		return response
	}

	public register = async (inputChecked: ClientAndPetInput) => {
		const client = inputChecked.client
		const pet = inputChecked.pet

		await this.prismaClient.cliente.create({
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
	public deleteClient = async (id: string) => {
		try {
			await this.prismaClient.cliente.delete({ where: { id: id } })

			const ok: Ok = {
				menssage: "Client excluído com sucesso.",
			}
			return ok
		} catch (error) {
			console.error("Deu algum erro no banco", error)
			throw new NotFoundError("Error no banco de dados ao excluir o Client")
		} finally {
			await this.prismaClient.$disconnect()
		}
	}
}
