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
    <div className="p-4 sm:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 border-b">
        <h2 className="pb-2 text-2xl sm:text-3xl font-semibold tracking-tight">
          Users Hierarchy
        </h2>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 py-4 sm:py-0">
          <h2 className="text-base sm:text-lg whitespace-nowrap">
            {user?.firstName} {user?.lastName}
          </h2>

          <Button
            className="bg-purple-600 text-white w-full sm:w-auto"
            onClick={() => {
              logout();
              window.location.href = "/login";
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Content */}
      {userTree.length > 0 ? (
        <ul className="space-y-2">
          {userTree.map((root) => (
            <TreeNode key={root.id} user={root} />
          ))}
        </ul>
      ) : (
        <div className="flex items-center justify-center min-h-[250px] w-full">
          <Spinner className="size-6 text-purple-600" />
        </div>
      )}
    </div>
  );
};
