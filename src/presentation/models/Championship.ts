import { User } from "./User";


export enum PrizeType {
  FIRST_PLACE = 'FIRST_PLACE',
  SECOND_PLACE = 'SECOND_PLACE',
  THIRD_PLACE = 'THIRD_PLACE',
}

export enum ChampionshipType {
  WEEKLY = "WEEKLY",
  DAILY = "DAILY",
  MONTHLY = "MONTHLY",
}

export enum ChampionshipStatus {
  PENDING = "PENDING",
  ONGOING = "ONGOING",
  COMPLETED = "COMPLETED",
}

export class Championship {
  id: string;
  name: string;
  photoUrl?: string;
  gameName?: string;
  type: ChampionshipType;
  startDate: Date;
  endDate: Date;
  numOfPlayers: number;
  players: User[];
  registrationFee: number;
  prizes: Prizes[];
  description: string;
  rules: string;
  status: ChampionshipStatus;
  createdAt: Date;
  updatedAt: Date;

}