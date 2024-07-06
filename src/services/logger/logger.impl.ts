import { LoggerService } from "./logger";

class LoggerServiceImpl implements LoggerService {
  private formatMessage(level: string, message: any): string {
    const timestamp = new Date().toISOString();
    return `[${timestamp}] [${level}] ${message}`;
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

const loggerServiceImpl = new LoggerServiceImpl(); 

export default loggerServiceImpl;
