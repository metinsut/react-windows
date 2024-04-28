import { useRef } from 'react';
import { useWindowStore } from './state';
import { WindowsProvider } from './WindowsProvider';

export function FramerDrag() {
  const constraintsRef = useRef(null);

  const windows = useWindowStore((state) => state.windows);
  const setWindow = useWindowStore((state) => state.setWindow);

  const handleAddWindow = () => {
    setWindow({
      three: { id: 'three', name: 'three', content: <div>YYY</div> },
    });
  };

  return (
    <section ref={constraintsRef} className="w-full h-full bg-orange-200">
      <button className="border-2 border-gray-700" onClick={handleAddWindow}>
        Add Window
      </button>
      {Object.keys(windows).map((windowKey) => (
        <WindowsProvider
          key={windows[windowKey].id}
          parentRef={constraintsRef}
          ref={constraintsRef}
          id={windows[windowKey].id}
        />
      ))}
    </section>
  );
}
