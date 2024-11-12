import type User from "../entities/User";

export interface userRepository {
	createUser(user: User): Promise<void>;
	getUserByEmail(email: string): Promise<User | null>;
}
