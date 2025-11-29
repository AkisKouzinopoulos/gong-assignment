import type { User } from '../utils/types';
export function saveUser(user: User) {
  localStorage.setItem('user', JSON.stringify(user));
}

export function getUser() {
  const data = localStorage.getItem('user');
  return data ? JSON.parse(data) : null;
}

export function logout() {
  localStorage.removeItem('user');
}
