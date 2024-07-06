import { Router } from "express";
import userRoutes from "./user.routes";

const securityRoutes = Router();

securityRoutes.use('/user', userRoutes);

export default securityRoutes;
