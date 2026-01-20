import React from "react"
import {
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJavascript1,
  DiReact,
  DiNodejsSmall,
  DiMongodb,
  DiGithubBadge,
    DiJava,
    DiPython,
    DiCode,
    DiPhotoshop,
    DiUnitySmall,
    DiIllustrator,

} from "react-icons/di"
import {
    FiFigma,
} from "react-icons/fi"
import { SiBlender } from "react-icons/si";
import { PiFileSql } from "react-icons/pi";
import { TbBrandThreejs } from "react-icons/tb";
import Reveal from "./Reveal"

const skills = [
    {
      category: 'Frontend',
      technologies: [
        { name: 'HTML', icon: <DiHtml5 /> },
        { name: 'CSS', icon: <DiCss3 /> },
        { name: 'Bootstrap', icon: <DiBootstrap  /> },
        { name: 'JavaScript', icon: <DiJavascript1  /> },
        { name: 'Three.js', icon: < TbBrandThreejs /> },
        { name: 'React', icon: <DiReact /> },
      ],
    },
    {
      category: 'Backend',
      technologies: [
        { name: 'Java', icon: <DiJava /> },
        { name: 'C++', icon: < DiCode />},
        { name: 'Python', icon: <DiPython /> },
        { name: 'Node Js', icon: <DiNodejsSmall /> },
        { name: 'MongoDB', icon: <DiMongodb /> },
        { name: 'SQL', icon: <PiFileSql /> },


      ],
    },
    {
      category: 'Tools & Design',
      technologies: [
        { name: 'Figma', icon: <FiFigma Classname='text-white' /> },
        { name: 'Blender', icon: <SiBlender /> },
        { name: 'Photoshop', icon: <DiPhotoshop /> },
        {name: 'Illustrator', icon: <DiIllustrator /> },
        { name: 'Unity', icon: <DiUnitySmall /> },
        { name: 'GitHub', icon: <DiGithubBadge /> },

      ],
    },
  ]

const Skills = () => {
  return (
      <div className="max-w-6xl mx-auto flex flex-col justify-center px-6 sm:px-8 text-gray-200 py-8 md:py-12" id="skills">
        <Reveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>

          {/* Flexbox approach for better centering control */}
          <div className="flex flex-wrap justify-center gap-8 w-full py-4">
            {skills.map((skill, index) => (
                <div
                  key={index}
                  className="
                    border border-pink-400 p-6 rounded-lg
                    bg-pink-500/10
                    w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)]
                    max-w-sm
                    transition-transform duration-300 ease-in-out
                    hover:scale-[1.02]
                  ">
                  <h3 className="text-xl font-bold mb-6 text-center">{skill.category}</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {skill.technologies.map((tech, idx) => (
                        <div key={idx} className="flex items-center space-x-3 min-w-[120px]">
                          <span className="text-2xl flex-shrink-0">{tech.icon}</span>
                          <span className="text-sm sm:text-base">{tech.name}</span>
                        </div>
                    ))}
                  </div>
                </div>
            ))}
          </div>
        </Reveal>
      </div>
  )
}

export default Skills;
