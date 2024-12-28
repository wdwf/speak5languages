import type { Request, Response } from "express";
import type {
	CreateUserInputDto,
	CreateUserUsecase,
} from "../../../../../usecases/user/CreateUser.usecase";
import { HttpMethod, type Route } from "../route";

export type CreateUserResponseDto = {
	id: string;
};

export class CreateUserRoute implements Route {
	private constructor(
		private readonly path: string,
		private readonly method: HttpMethod,
		private readonly createUserService: CreateUserUsecase,
	) {}

	public static create(createUserService: CreateUserUsecase) {
		return new CreateUserRoute("/users", HttpMethod.POST, createUserService);
	}

	public getHandler() {
		return async (request: Request, response: Response) => {
			const { name, email, phone, password, type } = request.body;
			const input: CreateUserInputDto = {
				name,
				email,
				phone,
				password,
				type,
			};

			const output: CreateUserResponseDto =
				await this.createUserService.execute(input);

			const responseBody = this.present(output);

			response.status(201).json(responseBody).send();
		};
	}

	public getPath(): string {
		return this.path;
	}

	public getMethod(): HttpMethod {
		return this.method;
	}

	private present(input: CreateUserResponseDto): CreateUserResponseDto {
		const response = { id: input.id };
		return response;
	}
}
