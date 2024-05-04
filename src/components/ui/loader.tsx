import { Loader2 } from 'lucide-react';

export function Loader() {
  return (
    <div className="grid place-content-center w-full h-full bg-black/10">
      <Loader2 className="h-12 w-12 animate-spin" />
    </div>
  );
}
