import type { Repository } from "typeorm";
import User from "../../domain/entities/User";
import type { IUserGateway } from "../../domain/gateway/user.gateway";
import type { TypeUser } from "../database/entities/Enums";
import { UserEntity } from "../database/entities/UserEntity";
import AppDataSource from "../database/ormconfig";

export class UserRepositoryTypeORM implements IUserGateway {
	private readonly repository: Repository<UserEntity>;

	private constructor() {
		this.repository = AppDataSource.getRepository(UserEntity);
	}

	public static create() {
		return new UserRepositoryTypeORM();
	}

	public async save(user: User): Promise<void> {
		const entity = this.repository.create({
			id: user.id,
			name: user.name,
			email: user.email,
			phone: user.phone,
			type: user.type as TypeUser,
		});

		await this.repository.save(entity);
	}

	public async list(): Promise<User[]> {
		const users = await this.repository.find();

		const usersList = users.map((u) =>
			User.with({
				id: u.id,
				name: u.name,
				email: u.email,
				phone: u.phone,
				password: u.password,
				type: u.type,
			}),
		);

		return usersList;
	}
}
