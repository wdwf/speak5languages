import User from "../../../core/entities/User";
import { UserEntity } from "../entities/UserEntity";

export function toDomain(entity: UserEntity): User {
	return new User(
		entity.id,
		entity.name,
		entity.email,
		entity.phone,
		entity.password,
		entity.type,
	);
}

export function toPersistence(domain: User): UserEntity {
	const entity = new UserEntity();
	entity.id = domain.id;
	entity.name = domain.name;
	entity.email = domain.email;
	entity.phone = domain.phone;
	entity.password = domain.password;
	entity.type = domain.type;
	return entity;
}
