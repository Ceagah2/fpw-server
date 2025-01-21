import { Game } from '../entities';

export interface GameRepository {
  save(game: Game): Promise<Game>;
  findAll(): Promise<Game[]>;
  findById(id: string): Promise<Game>;
  remove(id: string): Promise<void>;
}
