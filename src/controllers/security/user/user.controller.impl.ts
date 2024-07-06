import { Request, Response } from "express";
import { SingUpUserParams, UserRepository } from "../../../repositories/security/user/user.repository";
import userRepository from "../../../repositories/security/user/user.repository.impl";
import { UserController } from "./user.controller";
import loggerServiceImpl from "../../../services/logger/logger.impl";
import { LoggerService } from "../../../services/logger/logger";
import { AuthService } from "../../../services/auth/auth";
import authServiceImpl from "../../../services/auth/auth.impl";

class UserControllerImpl implements UserController {

  private userRepository: UserRepository;
  private logger: LoggerService;
  private authService: AuthService;

  constructor(
    userRepository: UserRepository,
    logger: LoggerService,
    authService: AuthService,
  ) {
    this.userRepository = userRepository;
    this.logger = logger;
    this.authService = authService;
  }
  
  async signUp (req: Request, res: Response): Promise<Response> {
    const { firstName, lastName, email, password }: SingUpUserParams = req.body;
    try {
      const exist = await this.userRepository.findByEmail(email);

      if (exist) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      const user = await this.userRepository.singUp({ firstName, lastName, email, password });
      this.logger.log(`User Created ${user}`);
      return res.status(201).json(user);
    } catch (error) {
      this.logger.error(error)
      return res.status(500).json({ message: 'Error creating user' });
    }
  }

  async login (req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body;

    try {
      const user = await this.userRepository.validateUser(email, password);
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }

      const token = this.authService.generateToken({ id: user.id, email: user.email });
      return res.status(200).json({ token });
    } catch (error) {
      return res.status(500).json({ message: 'Error during login' });
    }
  }
}

const userController = new UserControllerImpl(
  userRepository,
  loggerServiceImpl,
  authServiceImpl,
);

export default userController;
