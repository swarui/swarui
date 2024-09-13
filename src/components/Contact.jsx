import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import gmail from "../assets/gmail.png";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineCall } from "react-icons/md";


function Contact() {
  return (
    <>
      {" "}
      <div id="contact">
        <h1
          className="text-center text-2xl font-medium mt-20 "
          style={{ fontFamily: "Poppins" }}
        >
          Contact
        </h1>

        <h1
          className="text-center lg:text-2xl md:text-2xl sm:text-1xl  mt-10 "
          style={{ fontFamily: "Poppins", color: "White" }}
        >
          I'd like to hear about your upcoming project(s)
        </h1>
        <h1
          className="text-center mt-4  p-5 "
          style={{ fontFamily: "Poppins", color: "White" }}
        >
          Interested in discussing a project or just want to say hi? Connect
          with me via phone, email or either of my socials
        </h1>

        <div className="flex flex-row justify-center sm:justify-center md:justify-center lg:justify-center mt-10 space-x-5 text-3xl text-center  max-h-screen ">
          {" "}
          <a href="https://github.com/swarui" target="_blank">
            <FaGithub className="icon hover-zoom white  text-blue-200 " />{" "}
          </a>
          <a href="https://www.linkedin.com/in/stevewarui/" target="_blank">
            {" "}
            <IoLogoLinkedin className="icon hover-zoom  text-blue-200 " />{" "}
          </a>
          
          <a href="https://x.com/swarui_">
            {" "}
            <FaXTwitter className="icon hover-zoom  text-blue-300" />
          </a>
         
        </div>
        <div className="text-center mt-10" >
        <button  className="hover:ring-1 border border-gray-300 "  style={{ backgroundColor: '', padding: '5px 20px', borderRadius: '5px', fontFamily: 'Poppins', fontSize: '15px', fontWeight: '500', border:'1px solid black' }}> 
          <a href="mailto:stevewaruim@gmail.com " target="_blank" >Email Me</a>
        </button>  
        
<div className="flex justify-center mt-10 space-x-3 " >        <MdOutlineCall className="text-2xl justify-center" />
<h2  className=" text-1xl" style={{fontFamily:'Poppins'}} >+254790224262</h2>

        </div>

        </div>
          </div>
    </>
  );
}
export default Contact;
