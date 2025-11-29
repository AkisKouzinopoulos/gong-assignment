import { useState } from 'react';
import type { UserNode } from '../../utils/types';
import { TreeNodeButton } from './TreeNodeButton';
import { TreeNodeAvatar } from './TreeNodeAvatar';
import { TreeNodeUserDetails } from './TreeNodeUserDetails';

export type TreeNodeProps = {
  user: UserNode;
};

export const TreeNode = ({ user }: TreeNodeProps) => {
  const [expanded, setExpanded] = useState(true);
  const isManager = user.children.length > 0;

  return (
    <li>
      <div className="flex items-start sm:items-center gap-3 my-3 flex-wrap">
        <TreeNodeButton
          isManager={isManager}
          expanded={expanded}
          onToggle={() => setExpanded(!expanded)}
        />

        <div className="flex items-center gap-4 flex-1 min-w-0">
          <TreeNodeAvatar user={user} />
          <TreeNodeUserDetails user={user} />
        </div>
      </div>

      {isManager && expanded && (
        <ul className="ml-5 sm:ml-8 mt-1 space-y-4 pl-2">
          {user.children.map((child) => (
            <TreeNode
              key={child.id}
              user={child}
            />
          ))}
        </ul>
      )}
    </li>
  );
};
