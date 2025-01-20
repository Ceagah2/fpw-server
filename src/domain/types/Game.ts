import { GameCategory } from './GameCategory';

export class Game {
  id: string;
  name: string;
  photoUrl?: string;
  category: GameCategory;
  createdAt: Date;
  updatedAt: Date;
}
