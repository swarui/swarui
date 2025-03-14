import Navbar from "./components/Navbar";
import Home from "../src/components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <div className="noise-background">
        <Navbar />
          <Home />
          <Projects />
          <Skills />
          <Contact/>
        </div>
    </>
  );
}
export default App;
