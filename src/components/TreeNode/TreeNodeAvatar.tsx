import type { UserNode } from '../../utils/types';

type TreeNodeAvatarProps = {
  user: UserNode;
};

export const TreeNodeAvatar = ({ user }: TreeNodeAvatarProps) => {
  const initials = `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`;

  return (
    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-400 text-white text-md border border-purple-600 overflow-hidden shrink-0">
      {user.photo ? (
        <img
          src={user.photo}
          alt={user.firstName}
          className="w-full h-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
};
