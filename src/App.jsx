import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from './components/Skills'
import Footer from './components/Footer'
function App() {
  
  return (
    <div  style={bgColor}>
  
    <>  
      <Navbar />
      <Home />
      <About />
      <Skills/>
      <Projects />
      <Contact />
      <Footer/>
    </>
    </div>
  );
}
export default App;
const bgColor = {backgroundColor:'#142d4c'}


// #111827