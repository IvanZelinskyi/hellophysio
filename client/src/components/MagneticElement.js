import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useMotionTemplate,
  useAnimation,
  animate,
} from "framer-motion";

const MagneticElement = ({ text }) => {
  return <Element text={text} />;
};

const POSITION_RANGE = 15;

const Element = ({ text }) => {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const translateX = useSpring(x, { stiffness: 250, damping: 15 });
  const translateY = useSpring(y, { stiffness: 250, damping: 15 });
  const transform = useMotionTemplate`translateX(${translateX}px) translateY(${translateY}px)`;
  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const deltaX = (mouseX - centerX) / rect.width;
    const deltaY = (mouseY - centerY) / rect.height;

    const moveX = deltaX * POSITION_RANGE;
    const moveY = deltaY * POSITION_RANGE;

    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      className={`magnetic-element-container`}
      style={{ transform }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        handleMouseLeave();
      }}
      ref={ref}
    >
      {text && <motion.span style={{ transform }}>{text}</motion.span>}
    </motion.div>
  );
};

export default MagneticElement;
