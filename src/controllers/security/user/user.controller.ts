import { Request, Response } from "express";

export type loginParams = {
  email: string,
  password: string,
};

export interface UserController {

  /**
   * Handles user signup requests.
   *
   * @param req The Express request object containing user data (firstName, lastName, email, password) in the body.
   * @param res The Express response object.
   * @returns A promise that resolves to the Express response object with the created user on success, or an error response otherwise.
   */
  signUp(req: Request, res: Response): Promise<Response>;

  /**
   * Handles user login requests.
   *
   * @param req The Express request object containing email and password in the body.
   * @param res The Express response object.
   * @returns A promise that resolves to the Express response object with a JWT token on successful login, or an error response otherwise.
   */
  login(req: Request, res: Response): Promise<Response>;
};
