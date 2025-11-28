import { useState } from "react";
import { encode } from "../utils/encode";
import { fetchUserBySecret, fetchUserById } from "../services/firebase";
import { saveUser } from "../services/auth";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLoginSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      const secret = encode(email, password);
      const userId = await fetchUserBySecret(secret);

      if (!userId) {
        alert("Invalid credentials");
        return;
      }

      const user = await fetchUserById(userId);
      saveUser(user);

      window.location.href = "/users";
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-8 shadow-lg rounded-lg space-y-4 w-96" onSubmit={handleLoginSubmit}>
        <h2 className="text-xl font-bold text-center">Please login</h2>

        <Input type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <Button className="bg-purple-600 text-white">Login</Button>
      </form>
    </div>
  );
}
