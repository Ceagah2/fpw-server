import { Session } from '../entities';

export interface SessionRepository {
  save(session: Session): Promise<Session>;
  remove(sessionId: string): Promise<void>;
  refresh(sessionId: string, newExpiration: Date): Promise<Session>;
  findByToken(token: string): Promise<Session | null>;
  findByUserId(userId: string): Promise<Session[]>;
}
