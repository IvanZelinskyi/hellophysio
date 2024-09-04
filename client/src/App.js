import "./App.css";
import Header from "./components/Header";
import Hero from "./views/Hero";
import VideoSection from "./views/VideoSection";
import useMousePosition from "./useMousePosition";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Lenis from "lenis";
import Menu from "./components/Menu";
import Gallery from "./views/Gallery";
import Methods from "./views/Methods";
function App() {
  const scrollToVideoRef = useRef(null);
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuIsActive, setMenuIsActive] = useState(false);
  // SCROLL DIRECTION
  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setScrollDirection("down");
    } else if (currentScrollY < lastScrollY) {
      setScrollDirection("up");
    }
    setLastScrollY(currentScrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);
  // LENIS SMOOTH SCROLL
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const heroScroll = useRef(null);
  const { scrollYProgress: heroScrollProgress } = useScroll({
    target: heroScroll,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <AnimatePresence mode="wait">{menuIsActive && <Menu />}</AnimatePresence>
      <main>
        <Header
          scrollDirection={scrollDirection}
          menuIsActive={menuIsActive}
          setMenuIsActive={setMenuIsActive}
        />
        <div className="hero-scroll" ref={heroScroll}>
          <Hero scrollToVideoRef={scrollToVideoRef} />
          <VideoSection
            heroScrollProgress={heroScrollProgress}
            scrollToVideoRef={scrollToVideoRef}
          />
        </div>
        {/* <Methods /> */}
        <Gallery />
      </main>
    </>
  );
}

export default App;
