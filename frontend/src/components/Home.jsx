function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen relative z-[1] pt-[5rem] sm:pt-[8rem] lg:pt-20 overflow-hidden">
        <div className="max-w-[800px] w-[90%] mx-auto text-left px-2">
          <h1
            className="text-3xl sm:text-3xl md:text-5xl font-medium "
            style={{ fontFamily: "Afacad", fontSize: "2.5rem" }}
          >
            Hey There, I'm Steve <span className="text-blue-600">Warui</span>
          </h1>

          <h2
            style={{
              fontFamily: "Afacad",
              fontSize: "1.2rem",
              lineHeight: "1.5",
            }}
            className="opacity-75 mt-10"
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
        </div>
      </div>
    </>
  );
}

export default Home;
