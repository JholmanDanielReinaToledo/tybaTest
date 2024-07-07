import { NextFunction, Request, Response } from "express";
import loggerServiceImpl from "../services/logger/logger.impl";

export const loggingMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const message = `${new Date().toISOString()} ${req.method} ${req.originalUrl} ${res.statusCode} ${duration}ms - ${res.get('Content-Length') || 0}\n`;
    loggerServiceImpl.log(message);
  });
  next();
}
