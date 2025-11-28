// TODO: Implement proper type checking and validation for user data
export function saveUser(user: unknown) {
  localStorage.setItem("user", JSON.stringify(user));
}

export function getUser() {
  const data = localStorage.getItem("user");
  return data ? JSON.parse(data) : null;
}

export function logout() {
  localStorage.removeItem("user");
}
