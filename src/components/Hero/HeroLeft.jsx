import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { AiOutlineGithub, AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";

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
                className="md:text-7xl text-5xl tracking-tight mb-4"
            >
                <span className="vibrant-pink font-['Archivo_Black']">Alison Le</span>
            </motion.p>

            <TypeAnimation
                sequence={["Designer", 1000, "Developer", 1000]}
                speed={50}
                repeat={Infinity}
                className="text-white-100 max-w-[300px] md:max-w-[500px] md:text-2xl text-lg mb-6"
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-row items-center gap-6 my-4 md:mb-0"
            >
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgba(0, 0, 0, 0.3)" }}
                    className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border border-pink-400 rounded-xl"
                >
                    Download Resume
                </motion.button>

                <div className="flex gap-6 flex-row text-4xl md:text-6xl text-pink-400 z-20">
                    <motion.a whileHover={{ scale: 1.2 }} href="#">
                        <AiOutlineGithub />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href="#">
                        <AiOutlineLinkedin />
                    </motion.a>
                    <motion.a whileHover={{ scale: 1.2 }} href="#">
                        <AiOutlineInstagram />
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default HeroLeft;

