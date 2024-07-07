import { Request, Response } from "express";
import { LogRepository } from "../../repositories/log/log.repository";
import logRepository from "../../repositories/log/log.repository.impl";
import { LogController } from "./log.controller";

class LogControllerImpl implements LogController {
  private logRepository: LogRepository;

  constructor(logRepository: LogRepository) {
    this.logRepository = logRepository;
  }

  async getAllLogs(req: Request, res: Response): Promise<Response> {
    const logs = await this.logRepository.getAllLogs()
    return res.status(200).json({ logs });
  }
}

const logController = new LogControllerImpl(
  logRepository,
);

export default logController;
