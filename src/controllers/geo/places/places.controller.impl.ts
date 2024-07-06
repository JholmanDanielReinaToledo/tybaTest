import { Request, Response } from "express";
import { PlacesController } from "./places.controller";
import { GeoService } from "../../../services/geo/geo.impl";
import geoService from "../../../services/geo/geo";

class PlacesControllerImpl implements PlacesController {
  private geoService: GeoService;

  constructor(geoService: GeoService) {
    this.geoService = geoService;
  }

  async getPlacesByCoordinates(req: Request, res: Response): Promise<Response> {
    const { lat, lon } = req.body;
    const places = await this.geoService.getRestaurantsByCoordinates(lat, lon);
    return res.status(200).json({ places });
  }

  async getPlacesByLocation(req: Request, res: Response): Promise<Response> {
    const location = req.params.location;
    const places = await this.geoService.getRestaurantsByLocationName(location);
    return res.status(200).json({ places });
  }
}

const placesControllerImpl = new PlacesControllerImpl(
  geoService,
);

export default placesControllerImpl;
