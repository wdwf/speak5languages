import "express-async-errors";
import cors from "cors";
import express from "express";
import routes from "../../controller/routes";

const corsOptions = {
	origin: process.env.CORS_URL,
};

const app = express();

app.use(cors(corsOptions));
app.use((req, res, next) => {
	express.json()(req, res, next);
});
app.use(routes);

export default app;
