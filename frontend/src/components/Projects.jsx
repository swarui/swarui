"use client";

import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";

// Import your images
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";

const projo = [
  {
    id: 1,
    title: "Movie Recommendation",
    description:
      "A movie recommendation website that helps you select movies to your preference.",
    technologies: ["Html", "CSS", "Js"],
    image: img3,
    url: "https://swarui.github.io/movie-web-app/",
    github: "https://github.com/swarui/movie-web-app.git",
    website: "https://swarui.github.io/movie-web-app/",
  },
  {
    id: 2,
    title: "Coffee Shop",
    description:
      "A coffee website that showcases a variety of premium coffee, expertly brewed.",
    technologies: ["React", "TailwindCss", "Aos"],
    image: img4,
    url: "https://kahawa-ke.netlify.app/",
    github: "https://github.com/swarui/coffeelandingpage",
    website: "https://kahawa-ke.netlify.app/",
  },
  {
    id: 3,
    title: "Flight Booking",
    description:
      "A website that allows users to book their flights to various destinations.",
    technologies: ["React", "Flask", "Bootstrap", "SweetAlert"],
    image: img1,
    url: "https://flight-fusion-booking-website.vercel.app/",
    github: "https://github.com/VictorMurithi/FlightFusion-booking-website.git",
    website: "https://flight-fusion-booking-website.vercel.app/",
  },
  {
    id: 4,
    title: "Photo Store",
    description:
      "An application that allows users to post, like, add, and delete photos.",
    technologies: ["React", "SemanticUI", "Css", "Flask"],
    image: img2,
    url: "https://phase-4-photo-store-project-jmm2.onrender.com/",
    github: "https://github.com/swarui/Phase-4-Photo-Store-Project.git",
    website: "https://phase-4-photo-store-project-jmm2.onrender.com/",
  },
];

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh();
  }, []);

  return (
    <div
      style={{ fontFamily: "Afacad" }}
      id="projects"
      className="max-w-[780px] w-[90%] mx-auto py-16"
    >
      <h1 className="text-left text-4xl font-bold text-white mb-2">
        Projects
      </h1>
      <p className="text-left text-gray-400 mb-12">
        Check out some of my recent work
      </p>

      <div className="grid grid-cols-1 gap-10">
        {projo.map((project) => (
          <div key={project.id} data-aos="fade-up" className="group">
            <div className="bg-gradient-to-r from-[#121212] to-[#302f2f]  border border-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-900/20 transition-all duration-500  ">
              <div className="flex flex-col lg:flex-row p-1">
                {/* Image Container */}
                <div className="relative w-full lg:w-2/4 bg-gradient-to-r from-[#2a2a2a] to-[#121212] rounded-lg p-4">
                  <div className="w-full h-[200px] lg:h-[200px] rounded-lg overflow-hidden p-1">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full rounded-lg object-cover duration-700"
                    />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 lg:p-8 w-full lg:w-3/5 flex flex-col justify-center">
                  <h2 className="text-2xl font-bold mb-3 text-white ">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  {project.technologies && (
                    <div className="flex flex-wrap gap-2 -mt-4 mb-3 ">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-[#3b3b3b] text-white px-3 py-1 rounded-sm text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className=" flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <FaGithub className="w-5.5 h-5.5" />
                    </a>
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <AiOutlineGlobal className="w-5.5 h-5.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
