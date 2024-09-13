import img1 from '../assets/1.png';
import img2 from '../assets/2.png';
import img3 from '../assets/3.png';
import img4 from '../assets/4.jpg';
import { FaGithub } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';
import React, { useEffect } from 'react';

const projo = [
  {
    id: 1,
    title: 'Movie Recommendation',
    description: 'A movie recommendation website that helps you select movies to your preference',
    image: img3,
    url: 'https://swarui.github.io/movie-web-app/',
    github: 'https://github.com/swarui/movie-web-app.git',
    website: 'https://swarui.github.io/movie-web-app/'
  },
  {
    id: 2,
    title: 'Bank Of Flatiron',
    description: 'Bank of flatiron web app where users can see bank transactions, add, filter transactions by searching and deleting a transaction',
    image: img4,
    url: 'https://thebankofflatiron.netlify.app/',
    github: 'https://github.com/swarui/phase-2-wk1-code-challenge-flatiron-bank-.git',
    website: 'https://github.com/swarui/phase-2-wk1-code-challenge-flatiron-bank-.git'
  },
  {
    id: 3,
    title: 'Flight Booking',
    description: 'A website that provides users with a place whereby they can book their flights to various destinations',
    image: img1,
    url: 'https://flight-fusion-booking-website.vercel.app/',
    github: 'https://github.com/VictorMurithi/FlightFusion-booking-website.git',
    website: 'https://flight-fusion-booking-website.vercel.app/'
  },
  {
    id: 4,
    title: 'Photo Store',
    description: 'The project is about an application which is used to post, like, add and delete photos.',
    image: img2,
    url: 'https://phase-4-photo-store-project-jmm2.onrender.com/',
    github: 'https://github.com/swarui/Phase-4-Photo-Store-Project.git',
    website: 'https://phase-4-photo-store-project-jmm2.onrender.com/'
  },
  
 
];

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
    Aos.refresh(); 
  }, []);

  return (
    <div id='projects' className='mt-20'>
      <h1 className='text-center text-2xl font-medium' style={{ fontFamily: 'Poppins' }} >
        Projects
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-14 mt-10 lg:p-14 sm:p-6 sm:mx-2'>
        {projo.map(project => (
          <a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer">
            <div
              className='border border-gray-300 pb-2 rounded-3xl overflow-hidden mx-4 mb-6 sm:mx-2 sm:mb-4'
              data-aos='fade-up'
            >
              <div className='relative overflow-hidden h-48 text-white'>
                <img
                  src={project.image}
                  alt={project.title}
                  className='w-full h-full object-cover transition-transform transform hover:scale-105'
                />
              </div>
              <div className='p-4'>
                <h2 className='text-xl font-semibold mb-2' style={{ fontFamily: 'Poppins', color: 'white' }}>
                  {project.title}
                </h2>
                <p className='text-gray-300' style={{ fontFamily: 'Poppins', fontSize: '15px' }}>
                  {project.description}
                </p>
                <div className='flex flex-start pt-3'>
                  <a href={project.github} target='_blank' className='relative'>
                    <FaGithub className='w-6 h-6 icon hover-zoom text-blue-300' />
                  </a>
                  <a href={project.website} target='_blank' className='relative ml-4'>
                    <AiOutlineGlobal className='w-6 h-6 icon hover-zoom text-blue-300' />
                  </a>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
