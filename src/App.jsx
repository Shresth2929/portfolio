import { useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Certificates from "./components/Certificates";
import Connect from "./components/Connect";
import "./index.css";

/* Custom cursor */
const Cursor = () => {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 900) return;

    let ringX = 0, ringY = 0, dotX = 0, dotY = 0;
    let raf;

    const onMove = (e) => {
      dotX = e.clientX;
      dotY = e.clientY;
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const animate = () => {
      ringX = lerp(ringX, dotX, 0.12);
      ringY = lerp(ringY, dotY, 0.12);

      if (dotRef.current)  { dotRef.current.style.left  = `${dotX}px`; dotRef.current.style.top  = `${dotY}px`; }
      if (ringRef.current) { ringRef.current.style.left = `${ringX}px`; ringRef.current.style.top = `${ringY}px`; }

      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef}  className="cursor-dot"  />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
};

const App = () => {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Cursor />
      <Navbar />

      <div id="home">
        <Hero />
      </div>

      <div id="about">
        <About />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects />
      </div>

      <div id="achievements">
        <Achievements />
        <Certificates />
      </div>

      <div id="experience">
        {/* Experience is embedded inside About, but we keep this anchor for nav */}
      </div>

      <div id="connect">
        <Connect />
      </div>
    </div>
  );
};

export default App;
