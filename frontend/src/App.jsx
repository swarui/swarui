import Navbar from "./components/Navbar";
import Home from "../src/components/Home";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
function App() {
  return (
    <>
      <div className="noise-background">
        <Navbar />
          <Home />
          <Skills />
          <Projects />
        </div>
    </>
  );
}
export default App;
