import React from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal'

const experiences = [
    {
        company: 'Apple',
        role: 'Apple Support College Program Advisor',
        period: 'June 2025 - Present',
        description: '▪ Proactively implement efficient solutions, demonstrating strong problem-solving skills and sustaining an' +
            'Average Handle Time (AHT) of 14.12, outperforming the department average. ',
    },

    {
        company: 'Stone Global Realty',
        role: 'Web Development Intern',
        period: 'December 2024 - May 2025',
        description: '▪ Redesigned the website using Figma, Wordpress, and HTML to improve outdated structure and low' +
            'engagement, leading to more intuitive navigation and higher user satisfaction.\n' +
            '▪ Enhanced site responsiveness and accessibility to resolve inconsistencies, ensuring seamless user experience.',
      },
      {
        company: 'Starconz Entertainment Group',
          role: 'Web Developer',
        period: 'July 2023 - October 2025',
        description: '▪ Developed responsive React applications to resolve cross-device usability issues, delivering a consistent and seamless user experience.',
      },
      {
        company: 'Henry S Miller',
          role: 'Intern',
        period: 'Sept 2022 - Dec 2022',
        description: '▪ Designed professional brochures using Illustrator and Photoshop to elevate inconsistent branding, improving ' +
            'visual quality and marketing impact. \n' +
            '▪ Collaborated with developers to redesign the company website in Figma to address low engagement, ' +
            'contributing to a 20% increase in website traffic.',
      },

]



const Experience = () => {
  return (
    <div className='p-8 max-w-[800px] mx-auto'>
        <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>Experience</h1>
        <motion.div
        className='space-y-8'
        initial="hidden"
        animate="visible"
        >
            {experiences.map((experience, index) => (
                // eslint-disable-next-line react/jsx-key
                <Reveal>
                <motion.div
                    key={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3}}
                    transition={{ duration: 1}}
                    className=' border border-pink-400 p-6 rounded-lg shadow-md
                    hover:shadow-xl transition-shadow duration-300 bg-pink-500/10'
                >
                    <h2 className='text-gray-100 text-2xl font-semibold'>{experience.company}</h2>
                    <p className='text-gray-300'>{experience.role}</p>
                    <p className='text-gray-300'>{experience.period}</p>
                    <p 
                      className='text-gray-400 mt-4 whitespace-pre-line'
                      dangerouslySetInnerHTML={{
                        __html: experience.description.replace(/\n/g, '<br />')
                      }}
                    />


                </motion.div>
                </Reveal>
            ))}

        </motion.div>
        

    </div>
  )
}

export default Experience