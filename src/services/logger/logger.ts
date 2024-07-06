export interface LoggerService {
  /**
   * Logs a message at the 'LOG' level.
   *
   * @param message The message to be logged.
   */
  log(message: any): void;

  /**
   * Logs a message at the 'INFO' level.
   *
   * @param message The message to be logged.
   */
  info(message: any): void;

  /**
   * Logs a message at the 'WARN' level.
   *
   * @param message The message to be logged.
   */
  warn(message: any): void;

  /**
   * Logs a message at the 'ERROR' level.
   *
   * @param message The message to be logged.
   */
  error(message: any): void;
}
