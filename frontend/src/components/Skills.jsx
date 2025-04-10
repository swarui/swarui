import Bootstrap from "../assets/Bootstrap.png"
import Python from "../assets/Python.png"
import Tailwind from "../assets/Tailwind.png"
import Javascript from "../assets/Javascript.png"
import React1 from "../assets/React.png"
import Css from "../assets/Css.png"
import Html from "../assets/Html.png"
import Figma from "../assets/Figma.png"

// Define skills array for easier management
const skills = [
  { name: "Javascript", icon: Javascript },
  { name: "HTML", icon: Html },
  { name: "React", icon: React1 },
  { name: "Tailwind", icon: Tailwind },
  { name: "Bootstrap", icon: Bootstrap },
  { name: "Python", icon: Python },
  { name: "Figma", icon: Figma },
  { name: "CSS", icon: Css },
]

export default function Skills() {
  return (
    <div style={{ fontFamily: "Afacad" }} id="skills" className="max-w-[780px] w-[90%] mx-auto py-8 md:py-16">
      <h1 className="text-left text-3xl md:text-4xl font-bold text-white mt-5">Technologies</h1>
      <p className="text-left text-gray-400 mb-8 md:mb-12">My Technologies and Skill Set</p>

      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="bg-[#1c1c1c] rounded-md border border-gray-800 hover:bg-[#252525] transition-colors duration-200 inline-flex"
          >
            <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-2 sm:py-2.5">
              <img
                src={skill.icon || "/placeholder.svg"}
                className="w-4 sm:w-5 h-4 sm:h-5"
                alt={`${skill.name} icon`}
              />
              <span className="text-white text-sm sm:text-base whitespace-nowrap">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

