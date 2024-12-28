import { ApiExpress } from "./infra/api/express/api.express";
import { CreateUserRoute } from "./infra/api/express/routes/user/createUser.express.route";

function main() {
	const port = 8000;
	const api = ApiExpress.create([createRoute, listRoute]);
}

main();
