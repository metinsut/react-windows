import {
  useRef,
  useState,
  PointerEvent,
  RefObject,
  forwardRef,
  Suspense,
} from 'react';
import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { useResizeObserver } from 'usehooks-ts';
import { cn } from '../../utils/cn';
import { initialZIndex, useWindowStore } from './state';
import { Loader } from '@/components/ui/loader';

type Size = {
  width?: number;
  height?: number;
};

type Props = { id: string; parentRef: RefObject<Element> };
type Ref = RefObject<Element>;

export const WindowProvider = forwardRef<Ref, Props>((props, ref) => {
  const { parentRef, id } = props;
  const getWindow = useWindowStore((state) => state.getWindow);
  const setZIndex = useWindowStore((state) => state.setZIndex);
  const zIndex = useWindowStore((state) => state.zIndex);
  const windowState = getWindow(id);

  const draggableRef = useRef<HTMLDivElement>(null);

  const [isGrabbing, setIsGrabbing] = useState(false);
  const mHeight = useMotionValue(200);
  const mWidth = useMotionValue(200);
  const controls = useDragControls();

  const handleResize = (e: Size) => {
    if (e.height) {
      mHeight.set(e.height);
    }
    if (e.width) {
      mWidth.set(e.width);
    }
  };

  useResizeObserver({
    ref: draggableRef,
    onResize: handleResize,
    box: 'border-box',
  });

  const startDrag = (event: PointerEvent<HTMLDivElement>) => {
    controls.start(event);
  };

  const handleWrapperDown = () => {
    if (draggableRef.current) {
      if (
        zIndex === initialZIndex ||
        zIndex !== Number(draggableRef.current.style.zIndex)
      ) {
        draggableRef.current.style.zIndex = (zIndex + 1).toString();
        setZIndex(zIndex + 1);
      }
    }
  };

  return (
    <motion.div
      ref={draggableRef}
      drag
      dragControls={controls}
      className={cn(
        'flex flex-col bg-cyan-500 border-2 border-gray-500 border-solid resize overflow-auto fixed shadow-lg'
      )}
      style={{
        height: mHeight,
        width: mWidth,
        zIndex: 10,
      }}
      dragMomentum={false}
      dragListener={false}
      dragConstraints={parentRef! ?? ref}
      onPointerDown={handleWrapperDown}
    >
      <Suspense fallback={<Loader />}>
        <motion.div
          className={cn('bg-purple-600 touch-none', {
            'cursor-grab': !isGrabbing,
            'cursor-grabbing': isGrabbing,
          })}
          onPointerDown={(e) => startDrag(e)}
          onMouseDown={() => setIsGrabbing(true)}
          onMouseUp={() => setIsGrabbing(false)}
        >
          {windowState.name}
        </motion.div>
        <div className="flex flex-1">{windowState.content}</div>
      </Suspense>
    </motion.div>
  );
});
