import { DataSource } from "typeorm";
import { entities } from "./entities";

const appDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "user",
  password: "password",
  database: "tyba_test",
  synchronize: true,
  // logging: true,
  subscribers: [],
  migrations: [],
  entities,
});

export default appDataSource;
