import { JwtPayload } from "jsonwebtoken"

export interface AuthService {
  /**
   * Hashes a plain text password using bcrypt.
   *
   * @param password The password to be hashed.
   * @returns A promise that resolves to the hashed password.
   */
  hashPassword(password: string): Promise<string>

  /**
   * Compares a plain text password with a hashed password using bcrypt.
   *
   * @param plainPassword The plain text password to compare.
   * @param hashedPassword The hashed password to compare against.
   * @returns A promise that resolves to a boolean indicating if the passwords match.
   */
  comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean>

  /**
   * Generates a JSON Web Token (JWT) for a given payload.
   *
   * @param payload The data to be encoded into the JWT.
   * @returns The generated JWT string.
   */
  generateToken(payload: object): string
  
  /**
   * Verifies a JWT token and returns the decoded payload if valid.
   *
   * @param token The JWT token to verify.
   * @returns The decoded payload if the token is valid, otherwise null.
   */
  verifyToken(token: string): string | JwtPayload | null
};
