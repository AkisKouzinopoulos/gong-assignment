import { getUser, logout } from '@/services/auth';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const user = getUser();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 border-b">
      <h2 className="pb-2 text-2xl sm:text-3xl font-semibold tracking-tight">Users Hierarchy</h2>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 sm:py-0">
        <h2 className="text-base sm:text-lg whitespace-nowrap">
          {user?.firstName} {user?.lastName}
        </h2>

        <Button
          className="bg-purple-600 text-white w-full sm:w-auto hover:bg-purple-700"
          onClick={() => {
            logout();
            navigate('/login');
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};
