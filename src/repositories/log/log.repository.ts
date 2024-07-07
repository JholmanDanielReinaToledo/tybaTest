import { Log } from "../../models/log.entity";

export interface LogRepository {
  log(message: string): void;
  getAllLogs(): Promise<Log[]>
}
