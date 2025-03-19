"use client";

import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
    };

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        document.body.style.overflow = "unset";
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? "unset" : "hidden";
  };

  return (
    <>
      {/* Hidden Overlay */}
      <div
        className="fixed top-0 left-0 w-full h-20 bg-[#121212] z-[1000]"
        style={{ pointerEvents: "none" }} // Prevents it from blocking clicks
      />

      {/* Navbar Container */}
      <div
        className={`fixed top-4 left-1/2 -translate-x-1/2 h-16 max-w-[800px] w-[90%] flex justify-between items-center transition-colors px-6 duration-300 rounded-lg ${
          isScrolled
            ? "bg-[#1a1a1a] bg-opacity-95 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.7)]"
            : "bg-transparent"
        }`}
        style={{ position: "fixed", zIndex: 1002 }} // Higher z-index to appear above
      >
        {/* Logo */}
        <a
          style={{ fontFamily: "Afacad",fontSize: "1.3rem" }}
          href="/"
          className="text-gray-300 hover:text-white transition-colors ml-4"
          >
          Steve
        </a>

        {/* Desktop Navigation */}
        <div
          style={{ fontFamily: "Afacad", fontSize: "1.1rem" }}
          className="flex items-center"
        >
          <a
            href="/#contact"
            className="text-gray-300 hover:text-white transition-colors ml-4"
          >
            Reach Out
          </a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
