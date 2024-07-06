import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

export const validateDataMiddleware = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req?.body);
    if (result.error) {
      return res.status(400).json({ message: result.error.details[0].message });
    }
    next();
  };
};
