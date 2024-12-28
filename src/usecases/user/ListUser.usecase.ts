import type User from "../../domain/entities/User";
import type { IUserGateway } from "../../domain/gateway/user.gateway";
import type { IUsecase } from "../usecase";

export type ListUserInputDto = null;

export type ListUserOutputDto = {
	users: {
		id: string;
		name: string;
		email: string;
	}[];
};

export class ListUserUsecase
	implements IUsecase<ListUserInputDto, ListUserOutputDto>
{
	private constructor(private readonly userGateway: IUserGateway) {}

	public static create(userGateway: IUserGateway) {
		return new ListUserUsecase(userGateway);
	}

	public async execute(): Promise<ListUserOutputDto> {
		const aUsers = await this.userGateway.list();

		const output = this.presentOutput(aUsers);

		return output;
	}

	private presentOutput(users: User[]): ListUserOutputDto {
		return {
			users: users.map((u) => {
				return {
					id: u.id,
					name: u.name,
					email: u.email,
				};
			}),
		};
	}
}
