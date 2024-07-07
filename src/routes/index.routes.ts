import { Router } from "express";
import securityRoutes from "./security/security.routes";
import geoRoutes from "./geo/geo.routes";
import logRoutes from "./log/log.routes";

const indexRoutes = Router();

indexRoutes.use('/security', securityRoutes);
indexRoutes.use('/geo', geoRoutes);
indexRoutes.use('/logs', logRoutes);

export default indexRoutes;
