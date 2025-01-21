import { Championship } from '../entities';

export interface ChampionshipRepository {
  save(championship: Championship): Promise<Championship>;
  findById(id: string): Promise<Championship>;
  findAll(): Promise<Championship[]>;
  remove(id: string): Promise<void>;
}
