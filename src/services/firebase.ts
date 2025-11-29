import type { User } from '@/utils/types';

const BASE_URL = 'https://gongfetest.firebaseio.com';

export async function fetchUserBySecret(secret: string) {
  const url = `${BASE_URL}/secrets/${secret}.json`;
  const userId = await (await fetch(url)).json();
  return userId;
}

export async function fetchUserById(id: number): Promise<User | null> {
  const url = `${BASE_URL}/users.json`;
  const users: User[] = await (await fetch(url)).json();

  return users.find((u) => u.id === id) || null;
}

export async function fetchHierarchy() {
  const url = `${BASE_URL}/users.json`;
  return await (await fetch(url)).json();
}
