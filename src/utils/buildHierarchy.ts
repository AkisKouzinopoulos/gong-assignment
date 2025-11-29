import type { User, UserNode } from './types';

export const buildHierarchy = (users: User[]): UserNode[] => {
  const map = new Map<number, UserNode>();
  const roots: UserNode[] = [];

  users.forEach((user) => map.set(user.id, { ...user, children: [] }));

  users.forEach((user) => {
    const node = map.get(user.id)!;
    if (user.managerId) {
      map.get(user.managerId)?.children.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
};
