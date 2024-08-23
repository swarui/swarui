import React, { useEffect } from 'react';
import img from "../assets/pana.png";
import Aos from 'aos';
import 'aos/dist/aos.css';

const font = { fontFamily: 'Poppins' };

function About() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div id='about' className='mt-20 lg:p-10 sm:p-0'>
        <h1 className="text-2xl text-center font-medium" style={font} >
          About
        </h1>
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between p-5 sm:mt-10 lg:mt-10">
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end  lg:p-0 p-3 ">
            <img src={img} alt="About me" className="lg:w-[350px] md:w-[250px] sm:w-[250px] mt-[-40px]    " data-aos="fade-up" />
          </div>
          <div className="w-full lg:w-3/4 sm:p-0 md:p-0 lg:p-20 text-center">
            <h2 className='font text-1xl' style={{ fontFamily: 'Poppins', color: '#e7eaf6' }} data-aos="fade-up">
              I am a passionate newbie Front-End Software Engineer eager to innovate new interactive applications and always ready to learn. I pay close attention to every design that I make and ensure its functionality as desired. I love bringing ideas to life projects,turning concepts into fully realised projects
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
