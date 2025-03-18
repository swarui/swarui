function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen relative z-[1] pt-[5rem] sm:pt-[8rem] lg:pt-20 overflow-hidden">
        <div className="max-w-[790px] w-[90%] mx-auto text-left px-2">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-medium font-['Afacad']"
          >
            Hey There, I'm Steve <span className="text-blue-600">Warui</span>
          </h1>
          <h2
            className="opacity-75 mt-4 sm:mt-6 md:mt-10 text-md sm:text-lg md:text-xl font-['Afacad'] leading-relaxed"
          >
            A passionate Front-End Software Engineer committed to mastering my
            craft and sharing knowledge with fellow developers. I have a strong
            desire to contribute and continuously learn in the ever-evolving
            world of development. I am a passionate newbie Front-End Software
            Engineer eager to innovate new interactive applications and always
            ready to learn. I pay close attention to every design that I make
            and ensure its functionality as desired. I love bringing ideas to
            life, turning concepts into fully realized projects.
          </h2>
          <button
            className="cursor-pointer flex justify-between px-5 sm:px-6 py-2 text-white text-base sm:text-lg md:text-xl font-['Afacad'] shadow-lg hover:ring-1 border border-blue-600 rounded-md mt-4 sm:mt-6 transition-all hover:bg-blue-600/10"
          >
            Resume
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;