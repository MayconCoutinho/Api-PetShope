import { PrismaClient } from "@prisma/client"
import { NotFoundError } from "../errors/NotFoundError"
import { Ok } from "../models/menssage"

export class PetDataBase {
	constructor(private prismaClient: PrismaClient) {}

	public patchPet = async (clientId: string, petId: string, dataToUpdate: string) => {
		try {
			await this.prismaClient.pet.updateMany({
				where: {
					donoId: clientId,
					id: petId,
				},
				data: dataToUpdate,
			})

			const ok: Ok = {
				menssage: `Os dados foram mudado com sucesso`,
			}
			return ok
		} catch (error) {
			console.error("Deu algum erro no banco", error)
			throw new NotFoundError("Error no banco de dados ao mudar os dados do pet")
		} finally {
			await this.prismaClient.$disconnect()
		}
	}

	public deletePet = async (input: any) => {
		try {
			const { idClient, idPet } = input

			const cliente = await this.prismaClient.cliente.findUnique({ where: { id: idClient } })
			if (!cliente) {
				throw new NotFoundError("Cliente não encontrado.")
			}

			const pet = await this.prismaClient.pet.findUnique({ where: { id: idPet } })
			if (!pet || pet.donoId !== idClient) {
				throw new NotFoundError("Pet não encontrado ou não pertence ao cliente.")
			}

			await this.prismaClient.pet.delete({ where: { id: idPet } })

			const ok: Ok = {
				menssage: "Pet excluído com sucesso.",
			}
			return ok
		} catch (error) {
			console.error("Deu algum erro no banco", error)
			throw new NotFoundError("Error no banco de dados ao excluir o pet")
		} finally {
			await this.prismaClient.$disconnect()
		}
	}
}
