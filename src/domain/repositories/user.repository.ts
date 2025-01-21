import { User } from '../entities';

export interface UserRepository {
  create(user: User): Promise<User>;
  findById(id: string): Promise<User | null>;
  findByEmail(email: string): Promise<User | null>;
  update(user: User): Promise<User>;
  findAll(): Promise<User[]>;
  remove(id: string): Promise<void>;
  addFunds(userId: string, amount: number): Promise<User>;
  sendFunds(
    senderId: string,
    receiverId: string,
    amount: number,
  ): Promise<void>;
  addFriend(userId: string, friendId: string): Promise<void>;
  removeFriend(userId: string, friendId: string): Promise<void>;
}
