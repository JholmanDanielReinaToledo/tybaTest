import { NextFunction, Request, Response } from "express"
import authServiceImpl from "../services/auth/auth.impl"
import loggerServiceImpl from "../services/logger/logger.impl";

export const validateAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req?.headers?.authorization) {
    return res.status(401).json({ message: 'Unauthorized access. Please log in or verify your credentials.' });
  }
  const resa = authServiceImpl.verifyToken(req?.headers?.authorization);
  loggerServiceImpl.log(resa);
  next();
}
