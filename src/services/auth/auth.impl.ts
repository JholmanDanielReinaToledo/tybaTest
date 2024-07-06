import bcrypt from 'bcrypt';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { AuthService } from './auth';
import { JWT_SECRET, SALT_ROUNDS } from '../../utils/constants';

export class AuthServiceImpl implements AuthService {
  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, SALT_ROUNDS);
  }

  async comparePasswords(plainPassword: string, hashedPassword: string): Promise<boolean> {
    return await bcrypt.compare(plainPassword, hashedPassword);
  }

  generateToken(payload: object): string {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
  }

  verifyToken(token: string): string | JwtPayload | null {
    // TODO: Revisar si toma en cuenta si esta vencido
    try {
      return jwt.verify(token, JWT_SECRET);
    } catch (error) {
      return null;
    }
  }
}

const authServiceImpl = new AuthServiceImpl()

export default authServiceImpl;
