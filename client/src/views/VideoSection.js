import React, { useRef, useState, useEffect } from "react";
import video from "../assets/video2.mp4";
import {
  motion,
  useTransform,
  useScroll,
  useInView,
  easeInOut,
} from "framer-motion";
import { CgScrollV } from "react-icons/cg";
import useWindowDimensions from "../useWindowDimensions";

const VideoSection = ({ heroScrollProgress, scrollToVideoRef }) => {
  let { width } = useWindowDimensions();
  const videoSectionRef = useRef(null);
  const getScale = (type) => {
    let temp = "";
    if (type === "scale" && width > 900) {
      temp = "0.17";
    }
    if (type === "scale" && width < 900) {
      temp = "0.24";
    }
    if (type === "radius" && width > 900) {
      temp = "999px";
    }
    if (type === "radius" && width < 900) {
      temp = "45px";
    }
    return temp;
  };
  const { scrollYProgress: videoSectionScrollProgress } = useScroll({
    target: videoSectionRef,
    offset: ["start start", "end end"],
  });
  const scale = useTransform(
    heroScrollProgress,
    [0, 0.2],
    [getScale("scale"), "1"]
  );
  const radius = useTransform(
    heroScrollProgress,
    [0, 0.2],
    [getScale("radius"), "15px"]
    // [width > 900 ? "999px" : "45px", "15px"]
  );
  const translateIcon = useTransform(
    videoSectionScrollProgress,
    [0, 1],
    ["0vh", "85vh"]
  );
  const translateY = useTransform(heroScrollProgress, [0, 0.2], ["-63%", "0%"]);
  //   TEXT REFS
  const triggerFirstRef = useRef(null);
  const triggerSecondRef = useRef(null);
  const triggerThirdRef = useRef(null);
  const breakpointsRef = useRef(null);
  const breakPointsInView = useInView(breakpointsRef, { once: false });
  const triggerFirstText = useInView(triggerFirstRef, { once: false });
  const triggerSecondText = useInView(triggerSecondRef, { once: false });
  const triggerThirdText = useInView(triggerThirdRef, { once: false });
  return (
    <div className="video-section" ref={videoSectionRef}>
      {/* CONTAINER WITH TEXT BREAKPOINTS */}
      <div className="video-breakpoints-container" ref={breakpointsRef}>
        <div ref={triggerFirstRef}>FIRST</div>
        <div ref={triggerSecondRef}>SECOND</div>
        <div ref={triggerThirdRef}>THIRD</div>
      </div>
      <div className="video-container">
        {/* OVERLAY  */}
        <motion.div
          className="video-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: breakPointsInView ? 1 : 0 }}
          transition={{ duration: 0.3, ease: easeInOut }}
        ></motion.div>
        {/* SCROLL ICON  */}
        <motion.span
          className="scroll-icon"
          style={{ translateY: translateIcon }}
          initial={{ scale: 0 }}
          animate={{
            scale: breakPointsInView ? 1 : 0,
          }}
          transition={{ duration: 0.3, type: "spring" }}
        >
          <CgScrollV />
        </motion.span>
        {/* INNER CONTAINER WITH INTRO TEXT  */}
        <div className="video-container-inner" ref={scrollToVideoRef}>
          {/* TEXT 1  */}
          <div className="video-text">
            <motion.h2
              className="title"
              initial={{ opacity: 0, y: -20 }}
              animate={triggerFirstText ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 0.3, ease: easeInOut }}
            >
              передові методи
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={triggerFirstText ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 0.3, ease: easeInOut }}
              style={{ translateX: 20 }}
            >
              кінезітерапії та реабілітації
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20, x: 30 }}
              animate={triggerFirstText ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 0.3, ease: easeInOut, delay: 0.1 }}
              exit={{ delay: 0 }}
              style={{ translateX: 10 }}
            >
              щоб допомогти вам відновити рухові функції
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={triggerFirstText ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 0.3, ease: easeInOut, delay: 0.2 }}
              exit={{ delay: 0 }}
              style={{ translateX: 20 }}
            >
              та повернути активність у ваше життя.
            </motion.span>
          </div>
          {/* TEXT 2 */}
          <div className="video-text">
            <motion.h2
              className="title"
              initial={{ opacity: 0, y: -20 }}
              animate={triggerSecondText ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 0.3, ease: easeInOut }}
            >
              індивідуальний {width < 550 ? <br /> : ""} підхід
            </motion.h2>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={triggerSecondText ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 0.3, ease: easeInOut }}
              style={{ translateX: 20 }}
            >
              увага до кожної деталі
            </motion.span>
            {width > 950 ? (
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={triggerSecondText ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 0.3, ease: easeInOut, delay: 0.1 }}
                style={{ translateX: 40 }}
              >
                що б створити унікальні умови для досягнення ваших цілей.
              </motion.span>
            ) : (
              <>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={triggerSecondText ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 0.3, ease: easeInOut, delay: 0.1 }}
                  style={{ translateX: 40 }}
                >
                  що б створити унікальні умови
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={triggerSecondText ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 0.3, ease: easeInOut, delay: 0.2 }}
                  style={{ translateX: 25 }}
                >
                  для досягнення ваших цілей.
                </motion.span>
              </>
            )}
          </div>
          {/* TEXT 3 */}
          <div className="video-text">
            {width > 670 ? (
              <motion.h2
                className="title"
                initial={{ opacity: 0, y: -20 }}
                animate={triggerThirdText ? { opacity: 1, y: 0 } : ""}
                transition={{ duration: 0.3, ease: easeInOut }}
              >
                площа Віри Холодної, 1
              </motion.h2>
            ) : (
              <>
                <motion.h2
                  className="title"
                  initial={{ opacity: 0, y: -20 }}
                  animate={triggerThirdText ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 0.3, ease: easeInOut }}
                >
                  площа
                </motion.h2>
                <motion.h2
                  className="title"
                  initial={{ opacity: 0, y: -20 }}
                  animate={triggerThirdText ? { opacity: 1, y: 0 } : ""}
                  transition={{ duration: 0.3, ease: easeInOut, delay: 0.1 }}
                >
                  Віри Холодної, 1
                </motion.h2>
              </>
            )}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={triggerThirdText ? { opacity: 1, y: 0 } : ""}
              transition={{ duration: 0.3, ease: easeInOut }}
              style={{ translateX: 20 }}
            >
              м. Одеса, Україна
            </motion.span>
          </div>
        </div>
        {/* VIDEO  */}
        <motion.video
          src={video}
          autoPlay
          loop
          muted
          style={{
            scale: scale,
            borderRadius: radius,
            translateY: translateY,
          }}
        />
      </div>
    </div>
  );
};

export default VideoSection;
