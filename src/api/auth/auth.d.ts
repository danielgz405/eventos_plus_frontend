import { UserSchema } from 'api/users/usersSchemas';

export interface AuthSchema {
  user: UserSchema | null;
  // eslint-disable-next-line no-unused-vars
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}
