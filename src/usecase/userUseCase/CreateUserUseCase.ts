import type User from "../../domain/entities/User";
import type { IUserRepository } from "../../domain/repositories/IUserRepository";

interface CreateUserDTO {
	name: string;
	email: string;
	phone: string;
	password: string;
}

export default class CreateUserUseCase {
	userRepository: IUserRepository;

	constructor(userRepository: IUserRepository) {
		this.userRepository = userRepository;
	}

	async execute(data: CreateUserDTO): Promise<User> {
		const { name, email, phone, password } = data;
		const userExists = await this.userRepository.findByEmail(email);

		if (userExists) throw new Error("User already exists!");

		const newUser = await this.userRepository.create({
			name,
			email,
			phone,
			password,
		});

		return newUser;
	}
}
