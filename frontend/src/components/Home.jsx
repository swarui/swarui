import React, { useEffect } from 'react';

function Home() {
  // Ensure the page starts at the Home section
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <>
      <div id="home" className=" min-h-screen sm:h-0 flex justify-center items-center relative z-[1] pt-[5rem] sm:pt-[8rem] mt-[10vh] overflow-hidden">
        <div className="max-w-[790px] w-[90%] mx-auto text-left px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-medium font-['Afacad']">
            Hey There, I'm Steve <span className="text-blue-600">Warui</span>
          </h1>
          <h2 className="opacity-75 mt-4 sm:mt-6 md:mt-10 text-md sm:text-lg md:text-xl lg:text-[1.15rem] font-['Afacad'] leading-relaxed">
            A passionate Front-End Software Engineer, Architect, and UI/UX
            Designer from Kenya, committed to mastering my craft and sharing
            knowledge with fellow developers. I have a strong desire to
            contribute and continuously learn in the ever-evolving world of
            development. I pay close attention to every design I create,
            ensuring both its aesthetic appeal and functionality. I thrive on
            bringing ideas to life, transforming concepts into fully realized
            projects and finding creative solutions to challenging problems.
          </h2>
          <a
            href="https://drive.google.com/file/d/14NKDR7rKWh7AYZVydE-f7V18-uSysHZn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <button className="cursor-pointer flex justify-between items-center px-5 sm:px-6 py-2 pb-3 text-white text-base sm:text-lg md:text-xl lg:text-[1.15rem] font-['Afacad'] shadow-lg border border-blue-600 rounded-md mt-4 sm:mt-6 transition-all duration-300 hover:bg-blue-600/10  hover:shadow-blue-500/30 relative overflow-hidden group">
              <span className="relative z-10">My Resume</span>
              <span className="absolute bottom-1 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
