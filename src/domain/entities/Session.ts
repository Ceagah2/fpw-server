import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from './User';

@Entity('sessions')
export class Session {
  @PrimaryColumn('uuid')
  id: string;

  @OneToOne(() => User, (user) => user.id)
  user: User;

  @Column()
  token: string;

  @Column()
  expiresAt: Date;

  @CreateDateColumn()
  createdAt: Date;
}
