import { User } from "../../../models/security/user.entity";

export type SingUpUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export interface UserRepository {
  singUp(user: SingUpUserParams): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  validateUser(email: string, password: string): Promise<User | null>;
}
