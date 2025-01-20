import { Transaction } from './Transaction';
import { UserChampionships } from "./UserChampionships";
import { UserGames } from "./UserGames";

export enum Status {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export class User {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl?: string;
  email: string;
  password: string;
  championshipsEntered?: number;
  championships?: UserChampionships[];
  numOfGamesPlayed?: number;
  gamesPlayed?: UserGames[];
  funds?: number;
  transactions?: Transaction[];
  status: Status;
  createdAt?: Date;
  updatedAt?: Date;
}
