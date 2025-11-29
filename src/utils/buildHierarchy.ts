import type { User, UserNode } from './types';

export const buildHierarchy = (users: User[]): UserNode[] => {
  const userMap = new Map<number, UserNode>();
  const rootUsers: UserNode[] = [];

  users.forEach((user) => userMap.set(user.id, { ...user, children: [] }));

  users.forEach((user) => {
    const node = userMap.get(user.id)!;
    if (user.managerId) {
      userMap.get(user.managerId)?.children.push(node);
    } else {
      rootUsers.push(node);
    }
  });

  return rootUsers;
};
