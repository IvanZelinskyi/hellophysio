import React, { useRef } from "react";
import { easeInOut, motion, useInView, AnimatePresence } from "framer-motion";
import Curve from "./Curve";

const menuItems = [
  "ПРО МЕНЕ",
  "МЕТОДИ",
  "КОНСУЛЬТАЦIЯ",
  "TELEGRAM",
  "INSTAGRAM",
];

const MenuItem = ({ text, navIsVisible, index }) => {
  const delay = 0.4 + index * 0.1; // Stagger the animation for each item

  return (
    <AnimatePresence>
      <motion.li
        initial={{ y: 60 }}
        animate={navIsVisible ? { y: 0 } : { y: 60 }}
        transition={{ duration: 0.5, ease: easeInOut, delay }}
        exit={{ y: 60 }}
      >
        <motion.div
          className="link-layer"
          initial={{ y: 0 }}
          animate={navIsVisible ? { y: 100 } : { y: 0 }}
          transition={{ duration: 0.5, ease: easeInOut, delay }}
          exit={{ y: -60 }}
        ></motion.div>
        {text}
      </motion.li>
    </AnimatePresence>
  );
};

const Menu = () => {
  const navRef = useRef(null);
  const navIsVisible = useInView(navRef, { once: false });

  return (
    <motion.div
      className="menu"
      initial={{ x: "calc(100% + 100px)" }}
      animate={{ x: 0 }}
      exit={{ x: "calc(100% + 100px)" }}
      transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
    >
      <Curve />
      <nav ref={navRef}>
        <AnimatePresence>
          <ul>
            {menuItems.map((item, index) => (
              <MenuItem
                key={item}
                text={item}
                navIsVisible={navIsVisible}
                index={index}
              />
            ))}
          </ul>
        </AnimatePresence>
      </nav>
    </motion.div>
  );
};

export default Menu;
