import { Request, Response } from "express";
import { SingUpUserParams, UserRepository } from "../../../repositories/security/user/user.repository";
import userRepository from "../../../repositories/security/user/user.repository.impl";
import { UserController } from "./user.controller";
import loggerServiceImpl from "../../../services/logger/logger.impl";
import { LoggerService } from "../../../services/logger/logger";
import { AuthService } from "../../../services/auth/auth";
import authServiceImpl from "../../../services/auth/auth.impl";

class UserControllerImpl implements UserController {

  /**
   * Injected UserRepository instance for managing user data.
   */
  private userRepository: UserRepository;

  /**
   * Injected LoggerService instance for logging purposes.
   */
  private logger: LoggerService;

  /**
   * Injected AuthService instance for user authentication tasks.
   */
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
      // Check for existing user with the same email
      const existUser = await this.userRepository.findByEmail(email);

      if (existUser) {
        return res.status(400).json({ message: 'User with this email already exists' });
      }

      // Create a new user and save it to the database
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
      // Validate user credentials (email and password)
      const user = await this.userRepository.validateUser(email, password);
      if (!user) {
        this.logger.warn(`Invalid email or password: ${email}`);
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      
      // Generate a JWT token based on user information
      const token = this.authService.generateToken({ id: user.id, email: user.email });
      this.logger.warn(`login: ${email}`);
      return res.status(200).json({ token });
    } catch (error) {
      this.logger.error(error);
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
