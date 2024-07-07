import { Router } from "express";
import logController from "../../controllers/log/log.controller.impl";

const logRoutes = Router()

logRoutes.get(
  '/all',
  (req, res) => logController.getAllLogs(req, res),
);

export default logRoutes;
