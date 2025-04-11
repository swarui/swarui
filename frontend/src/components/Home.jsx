import { useEffect } from "react";

function Home() {
  // Ensure the page starts at the Home section
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []); // Empty dependency array means this effect runs once on mount
  return (
    <>
      <div
        id="home"
        className="flex justify-center items-center  relative z-[1] pt-[5rem] sm:pt-[8rem] mt-[10vh] overflow-hidden">
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
            projects and and finding creative solutions to challenging problems
          </h2>
          <a
            href="https://drive.google.com/file/d/14NKDR7rKWh7AYZVydE-f7V18-uSysHZn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
            <button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gray-800/30 backdrop-blur-lg px-5 sm:px-6 lg:py-2 py-2 sm:py-3 text-sm sm:text-base md:text-lg lg:text-[1.15rem] font-['Afacad']  text-white transition-all duration-300 ease-in-out hover:shadow-xl hover:shadow-gray-600/50 border border-white/20 mt-4 sm:mt-6">
              <span className="z-10">My Resume</span>
              <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                <div className="relative h-full w-10 bg-white/20"></div>
              </div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
}

export default Home;
