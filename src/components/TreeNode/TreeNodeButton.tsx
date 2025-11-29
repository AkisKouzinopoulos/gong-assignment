import { Button } from '../ui/button';
import { Plus, Minus } from 'lucide-react';

type TreeNodeButtonProps = {
  isManager: boolean;
  expanded: boolean;
  onToggle: () => void;
};

export const TreeNodeButton = ({ isManager, expanded, onToggle }: TreeNodeButtonProps) => {
  if (isManager) {
    return (
      <Button
        onClick={onToggle}
        variant="outline"
        size="icon-sm"
        className="rounded-full p-2 shrink-0 hover:bg-gray-100 border-gray-300 text-gray-500"
        aria-label="Toggle"
      >
        {expanded ? <Minus /> : <Plus />}
      </Button>
    );
  }
  return <span className="w-5 h-5 text-center opacity-60 text-gray-500">-</span>;
};
