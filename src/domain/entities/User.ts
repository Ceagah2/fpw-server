import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Status } from "../../presentation/models";
import { Championship } from './Championship';
import { Transaction } from './Transaction';


@Entity('user')
export class User {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ nullable: true })
  photoUrl: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Championship, (championship) => championship.id, {
    eager: true,
  })
  championships: Championship[];

  @OneToMany(() => Transaction, (transaction) => transaction.id, {
    cascade: true,
  })
  transactions: Transaction[];

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 }) 
  funds: number;

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE, 
  })
  status: Status;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}