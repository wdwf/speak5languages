import "reflect-metadata";
import * as dotenv from "dotenv";
import { DataSource, type DataSourceOptions } from "typeorm";
import { ClassEntity } from "./entities/ClassEntity";
import { RegistrationEntity } from "./entities/RegistrationEntity";
import { SignatureEntity } from "./entities/SignatureEntity";
import { StudentProfileEntity } from "./entities/StudentProfileEntity";
import { UserEntity } from "./entities/UserEntity";

const path = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path });

const port = Number(process.env.DB_PORT) || 5432;

const options: DataSourceOptions = {
	type: "postgres",
	host: process.env.DB_HOST,
	port: port,
	username: process.env.DB_USER,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	dropSchema: !!process.env.DB_DROP,
	migrationsRun: !!process.env.DB_MIGRATION,

	// entities: [`${__dirname}/**/infra/database/entities/*.{ts,js}`],
	entities: [
		UserEntity,
		StudentProfileEntity,
		SignatureEntity,
		RegistrationEntity,
		ClassEntity,
	],
	migrations: [`${__dirname}/**/infra/database/migrations/*.{ts,js}`],
};

const AppDataSource = new DataSource(options);
export default AppDataSource;
