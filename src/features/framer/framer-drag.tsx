import { motion, useDragControls, useMotionValue } from 'framer-motion';
import { PointerEvent, useRef, useState } from 'react';
import { cn } from '../../utils/cn';
import { useResizeObserver } from 'usehooks-ts';

type Size = {
  width?: number;
  height?: number;
};

export function FramerDrag() {
  const constraintsRef = useRef(null);
  const draggableRef = useRef<HTMLDivElement>(null);

  const [isGrabbing, setIsGrabbing] = useState(false);
  const mHeight = useMotionValue(200);
  const mWidth = useMotionValue(200);
  const controls = useDragControls();

  const handleResize = (e: Size) => {
    console.log('e', e);
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

  return (
    <section ref={constraintsRef} className="w-full h-full bg-orange-200">
      <motion.div
        ref={draggableRef}
        drag
        dragControls={controls}
        className={cn(
          'bg-cyan-500 border-2 border-gray-500 border-solid resize overflow-auto'
        )}
        style={{
          height: mHeight,
          width: mWidth,
        }}
        dragMomentum={false}
        dragListener={false}
        dragConstraints={constraintsRef}
      >
        <motion.div
          className={cn('bg-purple-600 touch-none', {
            'cursor-grab': !isGrabbing,
            'cursor-grabbing': isGrabbing,
          })}
          onPointerDown={(e) => startDrag(e)}
          onMouseDown={() => setIsGrabbing(true)}
          onMouseUp={() => setIsGrabbing(false)}
        >
          My Widget
        </motion.div>
        <motion.div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          vitae. minima fuga?
        </motion.div>
      </motion.div>
    </section>
  );
}
