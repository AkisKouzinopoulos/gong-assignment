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
    <li className="ml-4">
      <div className="flex items-center space-x-2">
        {isManager ? (
          <Button
            onClick={() => setExpanded(!expanded)}
            variant="outline" className="rounded-full p-2" size="icon-sm" aria-label="Submit">

            {expanded ? <Minus /> : <Plus />}
          </Button>
        ) : (
          <span className="w-5 h-5 text-center">-</span>
        )}

        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-400 flex items-center justify-center text-white text-sm">
            {user.photo ? <img src={user.photo} alt={user.firstName} width="32" height="32" className="w-full h-full rounded-full" /> : getInitials}
          </div>
          <div>
            <div className="font-medium">{user.firstName} {user.lastName}</div>
            <div className="text-sm text-gray-600">{user.email}</div>
          </div>
        </div>
      </div>

      {isManager && expanded && user.children.length > 0 && (
        <ul className="ml-6 mt-1 space-y-1">
          {user.children.map((child) => (
            <TreeNode key={child.id} user={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
