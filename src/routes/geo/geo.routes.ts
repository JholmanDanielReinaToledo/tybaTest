import { Router } from "express";
import placesRoutes from "./places.routes";
import { validateAuthMiddleware } from "../../middlewares/validateAuth";

const geoRoutes = Router()

geoRoutes.use('/places', validateAuthMiddleware, placesRoutes);

export default geoRoutes;
