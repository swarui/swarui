function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen relative z-[1] pt-[5rem] sm:pt-[8rem] lg:pt-20 overflow-hidden">
        <div className="max-w-[790px] w-[90%] mx-auto text-left px-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[2.75rem] font-medium font-['Afacad']">
            Hey There, I'm Steve <span className="text-blue-600">Warui</span>
          </h1>
          <h2 className="opacity-75 mt-4 sm:mt-6 md:mt-10 text-md sm:text-lg md:text-xl lg:text-[1.15rem] font-['Afacad'] leading-relaxed">
            A passionate Front-End Software Engineer committed to mastering my craft and sharing knowledge with fellow
            developers. I have a strong desire to contribute and continuously learn in the ever-evolving world of
            development. I am a passionate newbie Front-End Software Engineer eager to innovate new interactive
            applications and always ready to learn. I pay close attention to every design that I make and ensure its
            functionality as desired. I love bringing ideas to life, turning concepts into fully realized projects.
          </h2>
          <button className="cursor-pointer flex justify-between px-5 sm:px-6 py-2 text-white text-base sm:text-lg md:text-xl lg:text-[1.15rem] font-['Afacad'] shadow-lg border border-blue-600 rounded-md mt-4 sm:mt-6 transition-all duration-300 hover:bg-blue-600/10 hover:scale-105 hover:shadow-blue-500/30 relative overflow-hidden group">
            <span className="relative z-10">Resume</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
          </button>
        </div>
      </div>
    </>
  )
}

export default Home

