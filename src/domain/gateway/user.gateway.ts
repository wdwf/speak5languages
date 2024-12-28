import type User from "../entities/User";

export interface IUserGateway {
	save(user: User): Promise<void>;
	list(): Promise<User[]>;
}
