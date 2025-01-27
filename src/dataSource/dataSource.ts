import { DataSource } from "typeorm";
import { entities } from "./entities";
import { DB_DATABASE, DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME } from "../utils/constants";

const appDataSource = new DataSource({
  type: "postgres",
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  synchronize: true,
  // logging: true,
  subscribers: [],
  migrations: [],
  entities,
});

export default appDataSource;
