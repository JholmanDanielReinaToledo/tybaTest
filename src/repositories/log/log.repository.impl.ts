import { Repository } from "typeorm";
import { LogRepository } from "./log.repository";
import { Log } from "../../models/log.entity";
import appDataSource from "../../dataSource/dataSource";

class LogRepositoryImpl implements LogRepository {
  private repository: Repository<Log>;

  constructor(repository: Repository<Log>) {
    this.repository = repository;
  }

  async log(message: string): Promise<void> {
    const log = new Log()
    log.message = message;

    await this.repository.save(log);
  }

  getAllLogs(): Promise<Log[]> {
    return this.repository.find()
  }
}

const logRepository = new LogRepositoryImpl(
  appDataSource.getRepository(Log),
);

export default logRepository;
