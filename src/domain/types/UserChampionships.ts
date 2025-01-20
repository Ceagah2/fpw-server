export type UserRole = "creator" | "member"

export class UserChampionships {
  id: string;
  userId: string;
  championshipId: string;
  userRole: UserRole;
  createdAt: Date;
}