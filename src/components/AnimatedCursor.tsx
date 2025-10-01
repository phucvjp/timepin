import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedCursorProps {
  children: React.ReactNode;
}

const AnimatedCursor: React.FC<AnimatedCursorProps> = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor="pointer"]')) {
        setIsHovering(true);
        if (target.matches('button')) {
          setCursorVariant('button');
        } else if (target.matches('a')) {
          setCursorVariant('link');
        } else {
          setCursorVariant('pointer');
        }
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches('button, a, [data-cursor="pointer"]')) {
        setIsHovering(false);
        setCursorVariant('default');
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  const cursorVariants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      borderColor: 'rgba(239, 68, 68, 0.6)',
    },
    button: {
      x: mousePosition.x - 20,
      y: mousePosition.y - 20,
      scale: 1.5,
      backgroundColor: 'rgba(239, 68, 68, 0.9)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    link: {
      x: mousePosition.x - 12,
      y: mousePosition.y - 12,
      scale: 0.8,
      backgroundColor: 'rgba(59, 130, 246, 0.9)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
    },
    pointer: {
      x: mousePosition.x - 18,
      y: mousePosition.y - 18,
      scale: 1.2,
      backgroundColor: 'rgba(34, 197, 94, 0.9)',
      borderColor: 'rgba(255, 255, 255, 0.8)',
    },
  };

  return (
    <>
      {children}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 pointer-events-none z-50 mix-blend-difference"
        variants={cursorVariants}
        animate={cursorVariant}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      />
      {isHovering && (
        <motion.div
          className="fixed top-0 left-0 w-16 h-16 rounded-full border border-white/30 pointer-events-none z-40"
          style={{
            x: mousePosition.x - 32,
            y: mousePosition.y - 32,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </>
  );
};

export default AnimatedCursor;
