import { User } from '@app/interfaces/User';

export type AuthContextData = {
  signed: boolean;
  user: User | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
};
