import { useEffect, useState } from 'react';
import { fetchHierarchy } from '../services/firebase';
import { TreeNode } from '../components/TreeNode/TreeNode';
import type { UserNode } from '../utils/types';
import { Spinner } from '@/components/ui/spinner';
import { buildHierarchy } from '@/utils/buildHierarchy';
import { Header } from '@/components/Header/Header';

export const Users = () => {
  const [userTree, setUserTree] = useState<UserNode[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchHierarchy();
        if (Array.isArray(data)) {
          setUserTree(buildHierarchy(data));
        } else {
          setError('Failed to load user hierarchy.');
        }
      } catch (err) {
        setError(`Failed to load user hierarchy. Error: ${(err as Error).message}`);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-4 sm:p-8">
      <Header />

      {/* Tree content */}
      {error ? (
        <div className="flex items-center justify-center min-h-[250px] w-full">
          <span className="text-red-600 font-semibold">{error}</span>
        </div>
      ) : userTree.length > 0 ? (
        <ul className="space-y-2">
          {userTree.map((root) => (
            <TreeNode
              key={root.id}
              user={root}
            />
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center min-h-[250px] w-full">
          <Spinner className="size-12 text-purple-600" />
        </div>
      )}
    </div>
  );
};
