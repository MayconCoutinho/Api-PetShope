export interface ClientAndPetInput {
	client: ClientInput
	pet: PetInput
}
export interface ClientInput {
	nome: string
	telefone: string
}
export interface ClientAndPetDB {
	client: ClienteDB
	pet: PetDB
}
export interface PetInput {
	nome: string
	idade: number
	tipo: "GATO" | "CACHORRO"
	raca: string
}
export interface ClienteDB {
	id: string
	nome: string
	telefone: string
	pets?: PetDB[]
}
export interface PetDB {
	nome: string
	idade: number
	tipo: "GATO" | "CACHORRO"
	raca: string
	dono: ClienteDB
}
