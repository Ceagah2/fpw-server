import { Category } from '../entities';

export interface CategoryRepository {
  save(category: Category): Promise<Category>;
  findById(id: string): Promise<Category>;
  findAll(): Promise<Category[]>;
  remove(id: string): Promise<void>;
}
