import type User from "../../core/entities/User";
import type { IUserRepository } from "../../core/repositories/IUserRepository";
import { UserEntity } from "../database/entities/UserEntity";
import AppDataSource from "../database/ormconfig";

const userRepository = AppDataSource.getRepository(UserEntity);

export default class UserRepositoryORM implements IUserRepository {
	findByEmail(email: string): Promise<User | null> {
		throw new Error("Method not implemented.");
	}
	findAll(): Promise<User[] | null> {
		throw new Error("Method not implemented.");
	}
	create(user: Omit<User, "id">): Promise<User> {
		const newUser = userRepository.create(user);
		return userRepository.save(newUser);
	}
	delete(id: string): Promise<void> {
		throw new Error("Method not implemented.");
	}
}
