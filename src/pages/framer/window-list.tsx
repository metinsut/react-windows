import { Badge } from '@/components/ui/badge';
import { useWindowStore } from './state';
import { CircleX } from 'lucide-react';
import { cn } from '@/lib/cn';

export function WindowList() {
  const windows = useWindowStore((state) => state.windows);
  const closeWindows = useWindowStore((state) => state.closeWindow);

  return (
    <div className="bg-green-800 p-2 fixed bottom-0 left-0 right-0 shadow-md flex gap-4 flex-wrap">
      {Object.keys(windows).map((windowKey) => (
        <Badge
          key={windows[windowKey].id}
          className={cn('flex gap-2 bg-purple-600 text-sm hover:bg-purple-700')}
        >
          {windows[windowKey].name}
          <CircleX
            className="cursor-pointer h-4 w-4"
            onClick={() => closeWindows(windows[windowKey].id)}
          />
        </Badge>
      ))}
    </div>
  );
}
