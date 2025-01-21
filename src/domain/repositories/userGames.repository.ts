import { UserGames } from '../entities';

export interface UserGamesRepository {
  save(championship: UserGames): Promise<UserGames>;
  findById(championshipId: string): Promise<UserGames>;
  findAll(): Promise<UserGames[]>;
  remove(championshipId: string): Promise<void>;
}
