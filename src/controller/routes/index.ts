import { type Request, type Response, Router } from "express"; // trocar por um adapter

const routes = Router();

routes.get("/ping", (request: Request, response: Response) => {
	return response.json("pong");
});

export default routes;
