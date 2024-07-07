import { LogRepository } from "../../repositories/log/log.repository";
import logRepository from "../../repositories/log/log.repository.impl";
import { LoggerService } from "./logger";

/**
 * A service class that implements the `LoggerService` interface and provides various logging methods.
 */
class LoggerServiceImpl implements LoggerService {

  private logRepository: LogRepository;

  constructor(logRepository: LogRepository) {
    this.logRepository = logRepository;
  }

  /**
   * Formats a log message with timestamp, level, and the actual message.
   *
   * @param level The log level (e.g., 'LOG', 'INFO', 'WARN', 'ERROR').
   * @param message The message to be logged.
   * @returns The formatted log message string.
   */
  private formatMessage(level: string, message: any): string {
    const timestamp = new Date().toISOString();
    const messageFormated = `[${timestamp}] [${level}] ${message}`;

    this.logRepository.log(messageFormated);

    return messageFormated;
  }

  log(message: any): void {
    console.log(this.formatMessage('LOG', message));
  }

  info(message: any): void {
    console.log(this.formatMessage('INFO', message));
  }

  warn(message: any): void {
    console.warn(this.formatMessage('WARN', message));
  }

  error(message: any): void {
    console.error(this.formatMessage('ERROR', message));
  }
}

const loggerServiceImpl = new LoggerServiceImpl(
  logRepository,
); 

export default loggerServiceImpl;
