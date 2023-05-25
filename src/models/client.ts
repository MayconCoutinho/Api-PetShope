export interface InputClientAndPet {
	client: Cliente
	pet: Pet
}

export interface Cliente {
	nome: string
	telefone: string
}

export interface Pet {
	nome: string
	idade: number
	tipo: "gato" | "cachorro"
	raca: string
}

export interface ClienteDB {
	id: string
	nome: string
	telefone: string
	pets: Pet[]
}

export interface PetDB {
	id: string
	nome: string
	idade: number
	tipo: "gato" | "cachorro"
	raca: string
	dono: Cliente
}
