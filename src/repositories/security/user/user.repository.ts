import { User } from "../../../models/security/user.entity";

export type SingUpUserParams = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export interface UserRepository {
  /**
   * Creates a new user and saves it to the database.
   *
   * @param user An object containing user information (firstName, lastName, email, password).
   * @returns A promise that resolves to the saved User object.
   */
  singUp(user: SingUpUserParams): Promise<User>;

  /**
   * Finds a user by their email address.
   *
   * @param email The email address of the user to find.
   * @returns A promise that resolves to the User object if found, otherwise null.
   */
  findByEmail(email: string): Promise<User | null>;

  /**
   * Validates a user's credentials (email and password).
   *
   * @param email The email address of the user to validate.
   * @param password The password to be compared against the user's stored password.
   * @returns A promise that resolves to the User object if credentials are valid, otherwise null.
   */
  validateUser(email: string, password: string): Promise<User | null>;
}
