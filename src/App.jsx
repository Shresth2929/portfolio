import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Connect from "./components/Connect";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Achievements from "./components/Achievements";
import "./index.css";

const App = () => {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Navbar />
      <div id="home"><Hero /></div>
      <div id="about"><About /></div>
      <div id="skills"><Achievements /><Certificates /></div>
      <div id="projects"><Projects /></div>
      <div id="connect"><Connect /></div>
    </div>
  );
};

export default App;