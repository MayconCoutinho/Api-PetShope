export interface ClientInput {
	nome: string
	telefone: string
}
export interface PetInput {
	nome: string
	idade: number
	tipo: "gato" | "cachorro"
	raca: string
}
export interface ClienteDB {
	id: string
	nome: string
	telefone: string
	pets?: PetDB[]
}
export interface PetDB {
	id: string
	nome: string
	idade: number
	tipo: "gato" | "cachorro"
	raca: string
	dono: ClienteDB
}
