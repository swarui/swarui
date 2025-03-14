import Navbar from "./components/Navbar";
import Home from "../src/components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
function App() {
  return (
    <>
      <div className="noise-background">
        <Navbar />
          <Home />
          <Projects />
          <Skills />
        </div>
    </>
  );
}
export default App;
