import { Request, Response } from "express";

export interface LogController {

  /**
   * Handles user login requests.
   *
   * @param req The Express request object containing email and password in the body.
   * @param res The Express response object.
   * @returnsA promise that resolves to the Express response list of logs, or an error response otherwise.
   */
  getAllLogs(req: Request, res: Response): Promise<Response>;
};
