import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AuthService } from './auth';
import { JWT_SECRET, SALT_ROUNDS } from '../../utils/constants';

/**
 * A service class that provides methods for authentication purposes.
 * Implements the `AuthService` interface.
 */
export class AuthServiceImpl implements AuthService {
  
  async hashPassword(password: string): Promise<string> {
    const saltRounds = parseInt(SALT_ROUNDS, 10);
    return await bcrypt.hash(password, saltRounds);
  }

  async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }
  
  generateToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  }

  verifyToken(token: string): string | JwtPayload | null {
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
}

const authServiceImpl = new AuthServiceImpl();

export default authServiceImpl;
