import React from 'react'
import { FaGithubSquare, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='max-w-[1300px] mx-auto flex justify-between items-center p-6 md:p-8 text-sm md:text-lg mt-12'>
            <div className="relative group">
                <a
                    href="https://github.com/alisonle/website"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:text-pink-400 transition-all duration-300 hover:scale-110"
                >
                    <FaGithubSquare className="text-4xl text-gray-400" />
                </a>
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-sm text-white bg-gray-400 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    View source code
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-400 rotate-45 -mt-1"></div>
                </div>
            </div>

            <p className='text-gray-400 text-right'>@2025 Alison</p>
        </div>
    )

}

export default Footer