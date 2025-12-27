export interface TokenPayload {
  id: string;
  username: string;
  email: string;
  iat?: number;
  exp?: number;
}