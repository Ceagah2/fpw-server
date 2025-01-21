import { UserChampionship } from '../entities';

export interface UserChampionshipsRepository {
  save(championship: UserChampionship): Promise<UserChampionship>;
  findById(championshipId: string): Promise<UserChampionship>;
  findAll(): Promise<UserChampionship[]>;
  remove(championshipId: string): Promise<void>;
}
