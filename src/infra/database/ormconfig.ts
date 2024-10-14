import "reflect-metadata";
import { DataSource, DataSourceOptions } from "typeorm";
import * as dotenv from "dotenv";

const path = process.env.NODE_ENV === 'production' ? '.env' : `.env.${process.env.NODE_ENV}`
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
  dropSchema: process.env.DB_DROP ? true : false,
  migrationsRun: process.env.DB_MIGRATION ? true : false, 

  entities: [`${__dirname}/**/entities/*.{ts,js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
}

const AppDataSource = new DataSource (options);
export default AppDataSource;