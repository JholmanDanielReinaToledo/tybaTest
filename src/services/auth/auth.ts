import { JwtPayload } from "jsonwebtoken"

export interface AuthService {
  hashPassword(password: string): Promise<string>
  comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean>
  generateToken(payload: object): string
  verifyToken(token: string): string | JwtPayload | null
};
