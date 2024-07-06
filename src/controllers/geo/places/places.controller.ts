import { Request, Response } from "express";

export interface PlacesController {
  getPlacesByCoordinates(req: Request, res: Response): Promise<Response>;
  getPlacesByLocation(req: Request, res: Response): Promise<Response>;
}
