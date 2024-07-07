import { AuthServiceImpl } from "../services/auth/auth.impl";
import bcrypt from 'bcrypt';
import { SALT_ROUNDS } from "../utils/constants";
import { AuthService } from "../services/auth/auth";

describe('AuthService Tests', () => {
  let authService: AuthService;

  beforeAll(() => {
    authService = new AuthServiceImpl();
  });

  test('hashPassword should hash a password', async () => {
    const hashedPassword = await authService.hashPassword('test_password');
    expect(hashedPassword).toBeDefined();
    expect(typeof hashedPassword).toBe('string');
  });

  test('comparePasswords should compare a plain password with a hashed password', async () => {
    const plainPassword = 'test_password';
    const hashedPassword = await bcrypt.hash(plainPassword, SALT_ROUNDS);
    const result = await authService.comparePasswords(plainPassword, hashedPassword);
    expect(result).toBe(true);
  });

  test('verifyToken should return null for an invalid JWT token', () => {
    const invalidToken = 'invalid_token';
    const verifiedPayload = authService.verifyToken(invalidToken);
    expect(verifiedPayload).toBeNull();
  });
});
