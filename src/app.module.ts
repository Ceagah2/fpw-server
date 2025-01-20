import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  Category,
  Championship,
  Game,
  Session,
  Transaction,
  User,
  UserChampionship,
  UserGames,
} from './domain/entities';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.TYPEORM_HOST,
      port: +process.env.TYPEORM_PORT || 5432,
      username: process.env.TYPEORM_USERNAME,
      password: process.env.TYPEORM_PASSWORD,
      database: process.env.TYPEORM_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([
      Championship,
      User,
      UserChampionship,
      Category,
      Game,
      Session,
      Transaction,
      UserGames,
    ]),
  ],
})
export class AppModule {}
