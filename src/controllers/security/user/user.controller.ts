import { Request, Response } from "express";

export type loginParams = {
  email: string,
  password: string,
};

export interface UserController {
  signUp(req: Request, res: Response): Promise<Response>;
  login(req: Request, res: Response): Promise<Response>;
};
