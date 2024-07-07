import { Repository } from "typeorm";
import { LogRepository } from "./log.repository";
import { Log } from "../../models/log.entity";
import appDataSource from "../../dataSource/dataSource";

class LogRepositoryImpl implements LogRepository {
  private repository: Repository<Log>;

  constructor(repository: Repository<Log>) {
    this.repository = repository;
  }

  log(message: string): void {
    const log = new Log()
    log.message = message;

    this.repository.save(log);
  }

  getAllLogs(): Promise<Log[]> {
    return this.repository.find()
  }
}

const logRepository = new LogRepositoryImpl(
  appDataSource.getRepository(Log),
);

export default logRepository;
