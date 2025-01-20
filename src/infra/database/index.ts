import * as dotenv from 'dotenv';
import { Session } from 'inspector';
import "reflect-metadata";
import { DataSource, Transaction } from "typeorm";
import {
  Category,
  Championship,
  Game,
  User,
  UserChampionship,
  UserGames,
} from '../../domain/entities';


dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.TYPEORM_HOST,
  port: +process.env.TYPEORM_PORT,
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  synchronize: false,
  logging: false,
  entities: [User, Category, Championship, Game, Session, Transaction, UserChampionship, UserGames],
  migrations: [process.env.TYPEORM_MIGRATIONS],
  subscribers: [],
});
