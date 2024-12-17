import type User from "../entities/User";

export interface IUserRepository {
	findByEmail(email: string): Promise<User | null>;
	findAll(): Promise<User[] | null>;
	create(user: User): Promise<User>;
	delete(id: string): Promise<void>;
}
