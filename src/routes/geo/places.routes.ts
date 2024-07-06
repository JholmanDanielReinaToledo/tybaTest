import { Router } from "express";
import placesControllerImpl from "../../controllers/geo/places/places.controller.impl";
import { validateDataMiddleware } from "../../middlewares/validateData";
import { coordinatesGeoSchema, locationGeoSchema } from "../../validators/geo/places.validator";

const placesRoutes = Router();

placesRoutes.get(
  '/coordinates',
  validateDataMiddleware(coordinatesGeoSchema),
  (req, res) => placesControllerImpl.getPlacesByCoordinates(req, res),
);

placesRoutes.get(
  '/location',
  validateDataMiddleware(locationGeoSchema),
  (req, res) => placesControllerImpl.getPlacesByLocation(req, res),
);

export default placesRoutes;
