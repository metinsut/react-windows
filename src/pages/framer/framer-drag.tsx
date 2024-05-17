import { lazy, useRef } from 'react';
import { useWindowStore } from './state';
import { WindowProvider } from './window-provider';
import { WindowList } from './window-list';
// import Test3 from '@/features/test-3';

const Test1 = lazy(() => import('@/features/test-1'));
const Test3 = lazy(() => import('@/features/test-3'));

export function FramerDrag() {
  const constraintsRef = useRef(null);

  const windows = useWindowStore((state) => state.windows);
  const setWindow = useWindowStore((state) => state.setWindow);
  const openWindow = useWindowStore((state) => state.openWindow);

  const handleAddWindow = () => {
    setWindow({
      105: { id: 105, name: 'three', content: <Test1 /> },
    });
  };
  const handleAddWindow2 = () => {
    openWindow(<Test3 />);
  };

  return (
    <section ref={constraintsRef} className="w-full h-full bg-orange-200">
      <button className="border-2 border-gray-700" onClick={handleAddWindow}>
        Add Window
      </button>
      <button className="border-2 border-gray-700" onClick={handleAddWindow2}>
        Add Window 2
      </button>
      {Object.keys(windows).map((windowKey) => (
        <WindowProvider
          key={windows[windowKey].id}
          parentRef={constraintsRef}
          ref={constraintsRef}
          id={windows[windowKey].id}
        />
      ))}
      <WindowList />
    </section>
  );
}
