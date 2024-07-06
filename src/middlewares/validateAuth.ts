import { NextFunction, Request, Response } from "express"
import authServiceImpl from "../services/auth/auth.impl"
import loggerServiceImpl from "../services/logger/logger.impl";

/**
 * Middleware function that validates user authorization based on a JWT token in the request header.
 *
 * @param req The Express request object.
 * @param res The Express response object.
 * @param next The NextFunction to call if authorization is valid.
 */
export const validateAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (!req?.headers?.authorization) {
    return res.status(401).json({ message: 'Unauthorized access. Please log in or verify your credentials.' });
  }

  const decodedToken = authServiceImpl.verifyToken(req?.headers?.authorization);

  // Check if decodedToken is null or object (assuming verification success with object payload)
  if (!decodedToken) {
    return res.status(401).json({ message: 'Invalid or expired token.' });
  }

  loggerServiceImpl.log(decodedToken); // Assuming logging the decoded token for debugging purposes
  next();
};
