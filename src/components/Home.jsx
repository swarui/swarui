import img6 from "../assets/6.png";
import gmail from "../assets/gmail.png";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import logo1 from "../assets/code 1.png";
import logo2 from "../assets/code 2.png";
import img from '../assets/img.png'
import Picha from '../assets/Picha.png'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  
  return (
    <>
      <div id="home"   >
        {/* The Home body */}

        

        <div className="flex flex-col lg:flex-row items-center mt-10 "   >
          {/* The Left text body */}
          <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1  p-5 lg:p-10 lg:mt-20 "  data-aos = 'fade-right' >
            <h1
              style={{ fontFamily: "Poppins", color: "#e7eaf6" }}
              className="text-3xl font-bold lg:mt-20  sm:text-2xl md:text-2xl   " 
            >
              Hello,    <span style={{ color: "#9C9DD8" }}>I'm</span>
            </h1>
            <h1
              style={{ fontFamily: "Poppins", color: "#e7eaf6" }}
              className="text-4xl font-bold mt-4  lg:text-4xl md:text-3xl sm:text-4xl  "
            >
              <span style={{ color: "#9C9DD8" }}>Steve</span> Warui
            </h1>

            <h2
              style={{ fontFamily: "Poppins", color: "#e7eaf6" }}
              className="text-1xl font mt-4 " data-aos = 'fade-right'
            >
              {" "}
              I am a passionate Front-End software engineer dedicated to both mastering my
              craft and sharing knowledge with others developers with an interest
              in sharing what i have and learning extensively{" "}
            </h2>
            <div className="flex flex-row justify-center sm:justify-center md:justify-center lg:justify-start mt-7 space-x-5 text-3xl text-center">
              {" "}
            <a href="https://github.com/swarui"  target="_blank"  ><FaGithub className="icon hover-zoom" />{" "}</a>  
             <a href="https://www.linkedin.com/in/stevewarui/"  target="_blank" >  <IoLogoLinkedin className="icon hover-zoom" />{" "}</a>   
             <a href="mailto:stevewaruim@gmail.com">    <img
                className="w-8 h-8 mt-[-2px]  icon hover-zoom "
                src={gmail}
              ></img> </a>
            
            </div>
            <div className="flex flex-row sm:justify-center lg:justify-start md:justify-center sm:text-center text-center justify-center   mt-5  lg:mt-0 ">
              <a href="  https://drive.google.com/file/d/1Hs55RRTb85hofDrprSF4O56wgYT8XRGx/view?usp=sharing  "  target="blank">  <button 
                style={{ fontFamily: "Poppins" }}
                className="cursor-pointer flex justify-between px-4 py-2 text-white  shadow-lg hover:scale-105 duration-500 hover:ring-1 border border-orange-300  mt-6"
                >
                Resume
                
              </button> </a>
              
            </div>
          </div>

          {/* Image Body */}
          <div className="h-auto lg:w-1/2 flex justify-center order-1 lg:order-2 "  data-aos = 'fade-left' >
          <img className="lg:w-[350px] md:w-[300px] w-[300px] h-auto mt-10 md:mt-20" src={Picha} alt="" />
          <div>
              <img
                style={{ width: "10px", paddingRight: "10px" }} 
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;