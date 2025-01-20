import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import {
  ChampionshipStatus,
  ChampionshipType,
  PrizeType,
} from '../../presentation/models';
import { User } from './User';



@Entity('championship')
export class Championship {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column()
  gameName?: string;

  @Column({
    type: 'enum',
    enum: ChampionshipType,
  })
  type: ChampionshipType;

  @Column()
  startDate: Date;

  @Column()
  endDate: Date;

  @Column()
  numOfPlayers: number;

  @ManyToOne(() => User, (user) => user.id, {eager: true})
  players: User[];

  @Column()
  registrationFee: number;

  @Column({
    type: 'enum',
    enum: PrizeType,
  })
  prizes: PrizeType;

  @Column()
  description: string;

  @Column()
  rules: string;

  @Column({
    type: 'enum',
    enum: ChampionshipStatus,
  })
  status: ChampionshipStatus;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
