import { NextFunction, Request, Response } from "express";
import { ObjectSchema } from "joi";

/**
 * Middleware function that validates request body data against a provided Joi schema.
 *
 * @param schema A Joi ObjectSchema defining the expected request body structure and validation rules.
 * @returns A middleware function that validates the request body.
 */
export const validateDataMiddleware = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.validate(req?.body);
    if (result.error) {
      // Extract the first error message from Joi validation errors
      return res.status(400).json({ message: result.error.details[0].message });
    }
    next();
  };
};
