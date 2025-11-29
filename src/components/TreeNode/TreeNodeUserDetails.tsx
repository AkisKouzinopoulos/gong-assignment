import type { UserNode } from '../../utils/types';

type TreeNodeUserDetailsProps = {
  user: UserNode;
};

export const TreeNodeUserDetails = ({ user }: TreeNodeUserDetailsProps) => (
  <div className="min-w-0">
    <div className="font-medium text-lg truncate">
      {user.firstName} {user.lastName}
    </div>
    <div className="text-sm text-gray-500 truncate">{user.email}</div>
  </div>
);
