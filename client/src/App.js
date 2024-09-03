import "./App.css";
import Header from "./components/Header";
import Hero from "./views/Hero";
import VideoSection from "./views/VideoSection";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Lenis from "lenis";
function App() {
  const scrollToVideoRef = useRef(null);
  // SCROLL DIRECTION
  const [scrollDirection, setScrollDirection] = useState(null);
  const [lastScrollY, setLastScrollY] = useState(0);

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
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
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
  console.log(scrollDirection, "scrollDirection");
  return (
    <main>
      <Header scrollDirection={scrollDirection} />
      <div className="hero-scroll" ref={heroScroll}>
        <Hero scrollToVideoRef={scrollToVideoRef} />
        <VideoSection
          heroScrollProgress={heroScrollProgress}
          scrollToVideoRef={scrollToVideoRef}
        />
        {/* <Video heroScrollProgress={heroScrollProgress} /> */}
      </div>
      <div style={{ height: "100vh" }}></div>
    </main>
  );
}

export default App;
