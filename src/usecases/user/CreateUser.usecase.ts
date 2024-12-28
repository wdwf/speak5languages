import User from "../../domain/entities/User";
import type { IUserGateway } from "../../domain/gateway/user.gateway";
import type { IUsecase } from "../usecase";

export type CreateUserInputDto = {
	name: string;
	email: string;
	phone: string;
	password: string;
	type: string;
};

export type CreateUserOutputDto = {
	id: string;
};

export class CreateUserUsecase
	implements IUsecase<CreateUserInputDto, CreateUserOutputDto>
{
	private constructor(private readonly userGateway: IUserGateway) {}

	public static create(userGateway: IUserGateway) {
		return new CreateUserUsecase(userGateway);
	}

	public async execute({
		name,
		email,
		phone,
		password,
		type,
	}: CreateUserInputDto): Promise<CreateUserOutputDto> {
		const aUser = User.create(name, email, phone, password, type);

		await this.userGateway.save(aUser);

		const output = this.presentOutput(aUser);

		return output;
	}

	private presentOutput(user: User): CreateUserOutputDto {
		const output: CreateUserOutputDto = {
			id: user.id,
		};

		return output;
	}
}

// import type User from "../../domain/entities/User";
// import type { IUserRepository } from "../../domain/repositories/IUserRepository";

// interface CreateUserDTO {
// 	name: string;
// 	email: string;
// 	phone: string;
// 	password: string;
// }

// export default class CreateUserUseCase {
// 	userRepository: IUserRepository;

// 	constructor(userRepository: IUserRepository) {
// 		this.userRepository = userRepository;
// 	}

// 	async execute(data: CreateUserDTO): Promise<User> {
// 		const { name, email, phone, password } = data;
// 		const userExists = await this.userRepository.findByEmail(email);

// 		if (userExists) throw new Error("User already exists!");

// 		const newUser = await this.userRepository.create({
// 			name,
// 			email,
// 			phone,
// 			password,
// 		});

// 		return newUser;
// 	}
// }
