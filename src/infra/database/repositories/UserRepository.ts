import type { Repository } from "typeorm";
import User from "../../../core/entities/User";
import type { userRepository } from "../../../core/repositories/UserRepository";
import { UserEntity } from "../entities/UserEntity";
import AppDataSource from "../ormconfig";

export default class userRepositoryTypeORM implements userRepository {
	private UserRepository: Repository<UserEntity>;

	constructor() {
		this.UserRepository = AppDataSource.getRepository(UserEntity);
	}

	async createUser(user: User): Promise<void> {
		const userEntity = this.UserRepository.create(user);
		await this.UserRepository.save(userEntity);
		return;
	}

	async getUserByEmail(email: string): Promise<User | null> {
		const userEntity = await this.UserRepository.findOneBy({ email: email });
		if (!userEntity) return null;

		//Talvez aqui entraria o uso do DTO?
		return new User(
			userEntity.id,
			userEntity.name,
			userEntity.email,
			userEntity.phone,
			userEntity.password,
			userEntity.type,
		);
	}
}
