import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import Reveal from "../Reveal.jsx";


const Left = () => {
    return (
        <div className="w-full max-w-5xl mx-auto px-6 md:px-8 py-12" id="about">
            <div className="w-full">
                <div className="max-w-3xl mx-auto">
                    <Reveal width="100%">
                        <h3 className="text-4xl font-semibold mb-6 text-center md:text-left">
                           <span className="text-pink-400"> About Me</span>
                        </h3>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-lg leading-relaxed text-gray-300 text-justify">
                            A passionate developer with expertise in modern web technologies.
                            I love creating beautiful, responsive, and user-friendly applications
                            that solve real-world problems. My journey in tech has been filled with
                            exciting challenges that have helped me grow both professionally and personally.
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default Left
