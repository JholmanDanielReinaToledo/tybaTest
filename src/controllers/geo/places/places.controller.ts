import { Request, Response } from "express";

export interface PlacesController {
  /**
   * Fetches a list of restaurants based on provided latitude and longitude coordinates.
   *
   * @param req The Express request object containing latitude (lat) and longitude (lon) in the body.
   * @param res The Express response object.
   * @returns A promise that resolves to the Express response object with the list of places in JSON format on success, or an error response otherwise.
   */
  getPlacesByCoordinates(req: Request, res: Response): Promise<Response>;

  /**
   * Fetches a list of restaurants based on a provided location name.
   *
   * @param req The Express request object containing the location name in URL params.
   * @param res The Express response object.
   * @returns A promise that resolves to the Express response object with the list of places in JSON format on success, or an error response otherwise.
   */
  getPlacesByLocation(req: Request, res: Response): Promise<Response>;
}
