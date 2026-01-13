import React from 'react';
import project1 from "../assets/StarconzWebsite.png"
import project2 from "../assets/HenrySMiller.png"
import project4 from "../assets/SourceofHope.png"
import project5 from "../assets/UTDiscussions.png"
import project6 from "../assets/project6.png"
import { AiFillGithub, AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';

const projects = [
    {
      img: project1,
      title: "Starconz Entertainment Group",
      description: "Entertainment company website with custom interactive components. Built with HTML, CSS, and Wix.",
      links: {
        site: "https://www.starconz.com/",
        github: "#",
      },
    },
    {
      img: project2,
      title: "Henry S. Miller",
      description: "Real estate platform redesign focusing on user flow and property search experience. UI/UX design in Figma.",
      links: {
        site: "https://henrysmiller.com/",
        github: "#",
      },
    },
    {
      img: project4,
      title: "Source Of Hope",
      description: "Non-profit website designed for accessibility and community engagement. Built with WordPress and custom HTML/CSS.",
      links: {
        site: "https://thesourceofhope.org/",
      },
    },
    {
      img: project5,
      title: "UTDiscussions",
      description: "Student forum built in 24 hours for WeHack 2025 with discussion posts and course-based communities. HTML/CSS frontend, Java backend. ",
      links: {
        site: "https://devpost.com/software/we-hack-project",
        github: "#",
      },
    },

  ]

const Portfolio = () => {
  return (
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' id="portfolio">
        <h2 className='text-3xl font-bold text-gray-200 mb-8'>Portfolio</h2>
        {projects.map((project, index) => (
            // eslint-disable-next-line react/jsx-key
            <Reveal>

            <div key={index}
            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
                <div className='w-full md:w-1/2 p-4 h-64 md:h-80'>
                    <div className='w-full h-full overflow-hidden rounded-lg shadow-lg'>
                        <img
                            src={project.img}
                            alt={project.title}
                            className='w-full h-full object-cover transition-transform duration-300 hover:scale-105'
                        />
                    </div>
                </div>
                <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                    <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                    <p className='text-gray-300 mb-4'>{project.description}</p>
                    <div className='flex space-x-4'>
                        <a href={project.links.site}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-700
                                        transition duration-300'>
                            View Site
                        </a>
                        {/* <a href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className='px-4 py-2 bg-pink-400 text-white rounded-lg hover:bg-pink-700
                                        transition duration-300 flex items-center justify-center'>
                            <AiOutlineGithub className='w-5 h-5'/>
                        </a> */}

                    </div>

                </div>

            </div>
            </Reveal>
        ))}
        
    </div>
  )
}

export default Portfolio