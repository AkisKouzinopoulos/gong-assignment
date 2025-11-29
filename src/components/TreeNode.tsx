import { useState } from "react";
import type { UserNode } from "../utils/types";
import { Button } from "./ui/button";
import { Plus, Minus } from "lucide-react";

export type TreeNodeProps = {
  user: UserNode;
};

export const TreeNode = ({ user }: TreeNodeProps) => {
  const [expanded, setExpanded] = useState(true);

  const isManager = user.children.length > 0;
  const getInitials = `${user.firstName[0] || ""}${user.lastName[0] || ""}`;

  return (
    <li>
      <div className="flex items-start sm:items-center gap-3 my-3 flex-wrap">
        {isManager ? (
          <Button
            onClick={() => setExpanded(!expanded)}
            variant="outline"
            size="icon-sm"
            className="rounded-full p-2 shrink-0"
            aria-label="Toggle"
          >
            {expanded ? <Minus /> : <Plus />}
          </Button>
        ) : (
          <span className="w-5 h-5 text-center opacity-60">-</span>
        )}

        <div className="flex items-center gap-4 flex-1 min-w-0">
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-400 text-white text-md border border-purple-600 overflow-hidden shrink-0">
            {user.photo ? (
              <img
                src={user.photo}
                alt={user.firstName}
                className="w-full h-full object-cover"
              />
            ) : (
              getInitials
            )}
          </div>

          <div className="min-w-0">
            <div className="font-medium text-lg truncate">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-sm text-gray-500 truncate">{user.email}</div>
          </div>
        </div>
      </div>

      {isManager && expanded && (
        <ul className="ml-5 sm:ml-8 mt-1 space-y-4 pl-2">
          {user.children.map((child) => (
            <TreeNode key={child.id} user={child} />
          ))}
        </ul>
      )}
    </li>
  );
};
