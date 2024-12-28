import "express-async-errors";
import cors from "cors";
import express, { type Express } from "express";
import type { Api } from "../api";
import "dotenv/config";
import AppDataSource from "../../database/ormconfig";
import type { Route } from "./routes/route";

const corsOptions = {
	origin: process.env.CORS_URL,
};

export class ApiExpress implements Api {
	private app: Express;

	private constructor(routes: Route[]) {
		this.app = express();
		this.app.use(express.json());
		this.app.use(cors(corsOptions));
		this.addRoutes(routes);
	}

	public static create(routes: Route[]) {
		return new ApiExpress(routes);
	}

	private addRoutes(routes: Route[]) {
		routes.map((route) => {
			const path = route.getPath();
			const method = route.getMethod();
			const handler = route.getHandler();

			this.app[method](path, handler);
		});
	}

	public start(port: number) {
		AppDataSource.initialize().then(() => {
			return this.app.listen(port, () => {
				console.log(`API iniciada. Acesse a rota http://localhost:${port}`);
				this.listRoutes();
			});
		});
	}

	private listRoutes() {
		const routes = this.app._router.stack
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			.filter((route: any) => route.route)
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			.map((route: any) => {
				return {
					path: route.route.path,
					method: route.route.stack[0].method,
				};
			});

		console.log(routes);
	}
}
