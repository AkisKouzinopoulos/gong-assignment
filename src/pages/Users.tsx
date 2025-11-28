import { useEffect, useState } from "react";
import { fetchHierarchy } from "../services/firebase";
import { getUser, logout } from "../services/auth";
import { TreeNode } from "../components/TreeNode";
import type { UserNode } from "../utils/types";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";
import { buildHierarchy } from "@/utils/buildHierarchy";

export const Users = () => {
  const [userTree, setUserTree] = useState<UserNode[]>([]);
  const user = getUser();


  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchHierarchy();
      if (Array.isArray(data)) {
        setUserTree(buildHierarchy(data));
      }
    };
    fetchData();
  }, []);

  return (
    <div className="p-8">
      <div className="flex justify-between mb-6">
        <div className="text-2xl font-bold">Users Hierarchy</div>
        <Button onClick={() => {
          logout();
          window.location.href = "/login";
        }}>Logout</Button>
      </div>
      <div>{user?.firstName} {user?.lastName}</div>

      {userTree.length > 0 ? (
        <ul className="space-y-2">
          {userTree.map((root) => (
            <TreeNode key={root.id} user={root} />
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center min-h-[300px] w-full">
          <Spinner className="size-6 text-purple-600" />
        </div>
      )}

    </div>
  );
}

