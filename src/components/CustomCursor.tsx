import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-gray-400 mix-blend-difference pointer-events-none z-[9999] transition-transform duration-100 ease-out"
      style={{
        transform: `translate3d(${position.x - 8}px, ${position.y - 8}px, 0)`,
      }}
    />
  );
};

export default CustomCursor;
