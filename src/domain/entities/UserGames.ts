import { CreateDateColumn, Entity, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Game } from "./Game";
import { User } from "./User";


@Entity('user_games')

export class UserGames {
  @PrimaryColumn('uuid')
  id: string
  
  @OneToOne(() => User, (user) => user.id)
  userId: User

  @OneToOne(() => Game, (game) => game.id)
  gameId: Game

  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date
}