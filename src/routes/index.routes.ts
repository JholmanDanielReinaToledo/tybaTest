import { Router } from "express";
import securityRoutes from "./security/security.routes";
import geoRoutes from "./geo/geo.routes";

const indexRoutes = Router();

indexRoutes.use('/security', securityRoutes);
indexRoutes.use('/geo', geoRoutes);

export default indexRoutes;
