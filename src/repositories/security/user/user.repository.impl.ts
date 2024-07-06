import { Equal, Repository } from "typeorm";
import { UserRepository } from "./user.repository";
import { User } from "../../../models/security/user.entity";
import appDataSource from "../../../dataSource/dataSource";
import { AuthService } from "../../../services/auth/auth";
import authServiceImpl from "../../../services/auth/auth.impl";

class UserRepositoryImpl implements UserRepository {
  private userRepository: Repository<User>;
  private authService: AuthService;

  constructor(
    userRepository: Repository<User>,
    authService: AuthService,
  ) {
    this.userRepository = userRepository;
    this.authService = authService;
  }

  async singUp(user: { firstName: string; lastName: string; email: string; password: string; }): Promise<User> {

    const hashedPassword = await this.authService.hashPassword(user.password);

    const newUser = new User({
      email: user?.email,
      firstName: user?.firstName,
      lastName: user?.lastName,
      password: hashedPassword,
    });

    return await this.userRepository.save(newUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    return await this.userRepository.findOneBy({
      email: Equal(email),
    });
  }

  async validateUser(email: string, password: string): Promise<User | null> {
    const user = await this.findByEmail(email);
    if (user && await this.authService.comparePasswords(password, user.password)) {
      return user;
    }
    return null;
  }
}

const userRepository = new UserRepositoryImpl(
  appDataSource.getRepository(User),
  authServiceImpl,
);

export default userRepository;
