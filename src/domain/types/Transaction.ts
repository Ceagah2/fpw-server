export type TransactionType = "send" | "receive"

export class Transaction {
  id: string;
  type: TransactionType;
  date: Date;
  amount: number;
  createdAt: Date;
}