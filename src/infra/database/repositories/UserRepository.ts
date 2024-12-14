import type { Repository } from "typeorm";
import type User from "../../../core/entities/User";
import type { IUserRepository } from "../../../core/repositories/IUserRepository";
import { UserEntity } from "../entities/UserEntity";
import { toDomain, toPersistence } from "../mappers/UserMapper";
import AppDataSource from "../ormconfig";

export default class userRepositoryTypeORM implements IUserRepository {
	private ormUserRepository: Repository<UserEntity>;

	constructor() {
		this.ormUserRepository = AppDataSource.getRepository(UserEntity);
	}

	async findByEmail(email: string): Promise<User | null> {
		const entity = await this.ormUserRepository.findOneBy({ email });
		return entity ? toDomain(entity) : null;
	}

	async findAll(): Promise<User[] | null> {
		throw new Error("Method not implemented.");
	}

	async create(user: User): Promise<User> {
		const entity = toPersistence(user);
		const savedEntity = await this.ormUserRepository.create(entity);
		// await this.ormUserRepository.save(userEntity);
		return toDomain(savedEntity);
	}

	async delete(id: string): Promise<void> {
		throw new Error("Method not implemented.");
	}
}
