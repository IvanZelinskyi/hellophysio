import React, { useRef } from "react";
import img1 from "../assets/1.jpg";
import img2 from "../assets/3.jpg";
import img3 from "../assets/4.jpg";
import img4 from "../assets/5.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
import useWindowDimensions from "../useWindowDimensions";
import Methods from "./Methods";
const Gallery = () => {
  const { height } = useWindowDimensions();
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offest: ["start", "end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);
  return (
    <div className="gallery-main" ref={container}>
      <Methods />
      {/* <div className="spacer"></div> */}
      <div className="gallery">
        <Column images={[img1, img2, img3]} y={y} />
        <Column images={[img2, img3, img1]} y={y2} />
        <Column images={[img3, img2, img1]} y={y3} />
        <Column images={[img1, img3, img2]} y={y4} />
      </div>
      <div className="spacer"></div>
    </div>
  );
};
const Column = ({ images, y = 0 }) => {
  return (
    <div className="gallery-column">
      {images.map((src, index) => {
        return (
          <motion.div
            style={{ y }}
            key={index}
            className="gallery-image-container"
          >
            <img src={src} fill alt="image" />
          </motion.div>
        );
      })}
    </div>
  );
};
export default Gallery;
