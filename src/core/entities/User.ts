import { TypeUser } from "./Enums";

export default class User {
	public id: string;
	public name: string;
	public email: string;
	public phone: string;
	public password: string;
	public type: TypeUser;

	constructor(
		id: string,
		name: string,
		email: string,
		phone: string,
		password: string,
		type: TypeUser,
	) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.phone = phone;
		this.password = password;
		this.type = type;
	}

	// Método para verificar se o usuário é um estudante
	public isStudent(): boolean {
		return this.type === TypeUser.STUDENT;
	}
}
