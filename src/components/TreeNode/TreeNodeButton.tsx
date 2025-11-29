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
        className="rounded-full p-2 shrink-0"
        aria-label="Toggle"
      >
        {expanded ? <Minus /> : <Plus />}
      </Button>
    );
  }
  return <span className="w-5 h-5 text-center opacity-60">-</span>;
};
