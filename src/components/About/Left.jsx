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
                            <h1 className='text-4xl text-gray-200 font-bold text-center mb-12'>About Me</h1>
                        </h3>
                    </Reveal>
                    <Reveal width="100%" delay={0.2}>
                        <p className="text-lg leading-relaxed text-gray-300 text-justify">
                            I&#39;m Alison Le, a Software Engineering student at University of Texas at Dallas, pursuing a certificate in Applied Experience Design and Research.
                            My education has given me a strong foundation in backend development - working with databases, algorithms,
                            and system architecture across multiple programming languages. Through internships,
                            I&#39;ve applied that technical foundation to frontend and UI work, building polished, user-facing applications where solid engineering meets thoughtful design.
                        </p>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default Left
