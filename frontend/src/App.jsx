import Navbar from "./components/Navbar";
import Home from "../src/components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;
