import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Championship } from './Championship';
import { User } from './User';

@Entity('user_championships')
export class UserChampionship {
  @PrimaryColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.id)
  user: User;

  @OneToMany(() => Championship, (championship) => championship.id)
  championship: Championship;

  @Column()
  role: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
