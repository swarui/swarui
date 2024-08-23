import React, { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes} from 'react-icons/fa';
import {  FaBarsStaggered } from 'react-icons/fa6';


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-30% flex justify-between z-50 text-white lg:py-2 px-10 py-4 bg-gray-900">
        <div className="flex items-center">
          <Link
            to="home"
            duration={500}
            smooth={true}
            // activeClass="active"
            // spy={true}
            // offset={-90} // Adjust this offset according to your layout
          >
            <span className="text-[15px] font-medium cursor-pointer  text-white "   style={{ fontFamily: 'Poppins', whiteSpace: 'nowrap' }}>
              Steve <span className="text-blue-800">Warui</span>
            </span>
          </Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="flex items-center">
            <FaBarsStaggered size={20} className={`text-white ${isOpen ? 'hidden' : 'block'}`} />
            <FaTimes size={20} className={`text-white ${isOpen ? 'block' : 'hidden'}`} />
          </button>
        </div>
        <div className="  hidden lg:flex items-center justify-end w-full ">
          <ul style={{ fontFamily: "Poppins" }} className="flex flex-row gap-8 text-[15px] cursor-pointer mr-8 p-2">
            <li>
              <Link
              className="nav"
                duration={500}
                smooth={true}
                to="home"
                activeClass="active"
                spy={true}
                offset={-70} // Adjust this offset according to your layout
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                            className="nav"

                duration={500}
                smooth={true}
                to="about"
                activeClass="active"
                spy={true}
                offset={-70} // Adjust this offset according to your layout
              >
                About
              </Link>
            </li>
            <li>
              <Link
                            className="nav"

                duration={500}
                smooth={true}
                to="skills"
                activeClass="active"
                spy={true}
                offset={-70} // Adjust this offset according to your layout
              >
                Skills
              </Link>
            </li>
            
            <li>
              <Link
                            className="nav"

                duration={500}
                smooth={true}
                to="projects"
                activeClass="active"
                spy={true}
                offset={-70} // Adjust this offset according to your layout
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                            className="nav"

                duration={500}
                smooth={true}
                to="contact"
                activeClass="active"
                spy={true}
                offset={-70} // Adjust this offset according to your layout
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`fixed top-0 right-0 h-full w-48 overflow-visible bg-gray-900 text-white transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
      >
        <ul    style={{ fontFamily: "Poppins",  }} className="  flex flex-col gap-6 mt-20 text-lg cursor-pointer px-4 text-[14.5px]">
          <li>
            <Link
                          className="nav"

              duration={500}
              smooth={true}
              to="home"
              activeClass="active"
              spy={true}
              offset={-100} // Adjust this offset according to your layout
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
                          className="nav"

              duration={500}
              smooth={true}
              to="about"
              activeClass="active"
              spy={true}
              offset={-70} // Adjust this offset according to your layout
              onClick={toggleMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
                          className="nav"

              duration={500}
              smooth={true}
              to="skills"
              activeClass="active"
              spy={true}
              offset={-70} // Adjust this offset according to your layout
              onClick={toggleMenu}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
                          className="nav"

              duration={500}
              smooth={true}
              to="projects"
              activeClass="active"
              spy={true}
              offset={-70} // Adjust this offset according to your layout
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
                          className="nav"

              duration={500}
              smooth={true}
              to="contact"
              activeClass="active"
              spy={true}
              offset={-70} // Adjust this offset according to your layout
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;