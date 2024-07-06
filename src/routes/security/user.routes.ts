import { Router } from "express";
import { validateDataMiddleware } from "../../middlewares/validateData";
import { loginUserSchema, signUpUserSchema } from "../../validators/security/user.validator";
import userController from "../../controllers/security/user/user.controller.impl";

const userRoutes = Router();

userRoutes.post(
  '/sign-up',
  validateDataMiddleware(signUpUserSchema),
  (req, res) => userController.signUp(req, res),
);

userRoutes.post(
  '/login',
  validateDataMiddleware(loginUserSchema),
  (req, res) => userController.login(req, res),
);

export default userRoutes;
