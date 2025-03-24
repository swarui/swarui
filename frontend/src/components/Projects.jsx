"use client"

import { useEffect } from "react"
import Aos from "aos"
import "aos/dist/aos.css"
import { ArrowUpRight } from "lucide-react"

// Import your images
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"

const projo = [
  {
    id: 1,
    title: "Movie Recommendation",
    description: "A movie recommendation website that helps you select movies to your preference.",
    image: img1,
    technologies: ["HTML", "CSS", "JS"],
    website: "https://swarui.github.io/movie-web-app/",
  },
  {
    id: 2,
    title: "Coffee Shop",
    description: "A coffee website that showcases a variety of premium coffee, expertly brewed.",
    image: img2,
    technologies: ["React", "TailwindCss", "Flask"],
    website: "https://kahawa-ke.netlify.app/",
  },
  {
    id: 3,
    title: "Flight Booking",
    description: "An interactive prototype design for a flight booking platform",
    image: img3,
    technologies: ["Figma"],
    website: "https://www.figma.com/design/uUKwLxXAR63WVPYOL9qMWS/Flight-Fusion?node-id=0-1&p=f&t=oHQUldnHeo1ZjOOn-0",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A professional portfolio showcasing the client's projects, skills, and achievements.",
    image: img4,
    technologies: ["React", "TailwindCSS", "Python"],
    website: "https://phoebekardita.netlify.app/",
  },
]

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 })
    Aos.refresh()
  }, [])

  return (
    <div style={{ fontFamily: "Afacad" }} id="projects" className="max-w-[790px] w-[90%] mx-auto pb-16">
      <h1 className="text-left text-4xl font-bold text-white mb-2">Projects</h1>
      <p className="text-left text-gray-400 mb-10">Check out some of my recent work</p>

      <div className="grid grid-cols-1 gap-8">
        {projo.map((project) => (
          <div key={project.id} data-aos="fade-up" className="group">
            <div className="bg-gradient-to-r from-[rgb(18,18,18)] to-[#302f2f] border border-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition-all duration-500">
              <div className="flex flex-col md:flex-row p-3">
                {/* Image Container - Optimized for 1280x768px images */}
                <div className="w-full md:w-2/5 rounded-lg overflow-hidden">
                  {/* Fixed aspect ratio container (16:10 ratio) */}
                  <div className="relative pt-[60%] bg-gradient-to-r from-[#2a2a2a] to-[#121212] rounded-lg">
                    {/* Image with responsive attributes */}
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover p-2 transition-transform duration-300"
                      loading={project.id === 1 ? "eager" : "lazy"} // Load first image eagerly, lazy load the rest
                      // The ideal image size is 1280x768px (16:10 ratio)
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-3 w-full md:w-3/5 flex flex-col">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-2 text-xs sm:text-sm">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-2 sm:mb-3">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-[#3b3b3b] text-white text-xs px-2 sm:px-3 py-1 rounded-sm border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto pt-2 sm:pt-3">
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 transition-all group/link"
                    >
                      <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-blue-300 after:transition-all after:duration-300 group-hover/link:after:w-full">
                        Visit Site
                      </span>
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 transform transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects

