import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiFillBehanceSquare, AiOutlineLinkedin } from "react-icons/ai";

const HeroLeft = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="w-full"
        >
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="md:text-7xl text-5xl tracking-tight mb-4 px-4 sm:px-0"
            >
                <span className="vibrant-pink font-['Archivo_Black']">Alison Le</span>
            </motion.p>

            <TypeAnimation
                sequence={["Designer", 1000, "Developer", 1000]}
                speed={50}
                repeat={Infinity}
                className="text-white-100 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6 px-4 sm:px-0"
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 my-4 w-full px-4 sm:px-0"
            >
                <motion.a
                    href="/Alison Le Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                    className="z-10 cursor-pointer font-bold text-gray-200 w-full sm:w-auto p-3 sm:p-4 border border-pink-400 rounded-xl text-sm sm:text-base inline-block text-center"
                >
                    Download Resume
                </motion.a>

                <div className="flex gap-4 sm:gap-6 flex-row text-3xl sm:text-4xl md:text-6xl text-pink-400 z-20 w-full sm:w-auto justify-center sm:justify-start">
                    <motion.a whileHover={{ scale: 1.2 }} href="https://github.com/alisonle" target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href="https://www.linkedin.com/in/le-alison" target="_blank" rel="noopener noreferrer">
                        <AiOutlineLinkedin />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href="https://www.behance.net/alisonle2" target="_blank" rel="noopener noreferrer">
                        <AiFillBehanceSquare/>
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeroLeft;

