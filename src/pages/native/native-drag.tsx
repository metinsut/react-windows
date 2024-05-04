import { SyntheticEvent, useState } from 'react';

export function NativeDragWindow() {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [startY, setStartY] = useState<number>(0);
  const [offsetX, setOffsetX] = useState<number>(0);
  const [offsetY, setOffsetY] = useState<number>(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartY(e.clientY);
    setOffsetX(e.currentTarget.getBoundingClientRect().left);
    setOffsetY(e.currentTarget.getBoundingClientRect().top);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const newOffsetX = e.clientX - startX + offsetX;
      const newOffsetY = e.clientY - startY + offsetY;
      e.currentTarget.style.left = newOffsetX + 'px';
      e.currentTarget.style.top = newOffsetY + 'px';
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleResize = (event: SyntheticEvent<HTMLDivElement, Event>) => {
    console.log('event', event);
  };

  return (
    <section className="grid bg-gray-400 p-4 h-full gap-4">
      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        className="border-solid border-4 border-yellow-700 p-4 w-48 h-48 cursor-grab absolute bg-fuchsia-300"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, quo?
      </div>
      <div
        className="bg-cyan-600 w-48 h-48 resize overflow-auto"
        onResize={handleResize}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
        necessitatibus.
      </div>
    </section>
  );
}
