import "reflect-metadata";
import * as dotenv from "dotenv";
import { DataSource, type DataSourceOptions } from "typeorm";

const path =
	process.env.NODE_ENV === "production"
		? ".env"
		: `.env.${process.env.NODE_ENV}`;
dotenv.config({ path });

const port = process.env.DB_PORT as unknown as number;

const options: DataSourceOptions = {
	type: "postgres",
	host: process.env.DB_HOST,
	port: port,
	username: process.env.DB_USER,
	password: process.env.DB_PASS,
	database: process.env.DB_NAME,
	synchronize: true,
	dropSchema: !!process.env.DB_DROP,
	migrationsRun: !!process.env.DB_MIGRATION,

	entities: [`${__dirname}/**/entities/*.{ts,js}`],
	migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
};

const AppDataSource = new DataSource(options);
export default AppDataSource;
