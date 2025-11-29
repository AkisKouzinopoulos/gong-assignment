import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { encode } from '../utils/encode';
import { fetchUserBySecret, fetchUserById } from '../services/firebase';
import { saveUser } from '../services/auth';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { cn } from '@/lib/utils';
import { AlertCircleIcon } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  const renderErrorAlert = error ? (
    <Alert
      variant="destructive"
      className="mb-2 text-red-700"
    >
      <AlertCircleIcon />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{error}</AlertDescription>
    </Alert>
  ) : null;

  const handleLoginSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const secret = encode(email, password);
      const userId = await fetchUserBySecret(secret);

      if (!userId) {
        setError('Invalid credentials');
        return;
      }

      const user = await fetchUserById(userId);
      if (!user) {
        setError('User not found');
        return;
      }
      saveUser(user);

      navigate('/users');
    } catch (err) {
      console.error(err);
      setError('Something went wrong');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="bg-white p-8 shadow-lg rounded-lg space-y-4 w-96"
        onSubmit={handleLoginSubmit}
      >
        {renderErrorAlert}
        <h2 className="text-xl font-bold text-center">Please login</h2>

        <Input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="flex justify-end">
          <Button
            className={cn(
              'bg-purple-600 text-white',
              !email || !password ? 'opacity-50 cursor-not-allowed' : 'hover:bg-purple-700',
            )}
            disabled={!email || !password}
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};
