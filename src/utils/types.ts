export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  managerId?: number;
  photo?: string;
};

export type UserNode = User & {
  children: UserNode[];
};
