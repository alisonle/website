import React from "react";
import { motion } from "framer-motion";
import ShinyEffect from "../ShinyEffect.jsx";
import HeroLeft from './HeroLeft';
import HeroRight from './HeroRight';

const Hero = () => {
    return (
        <div className="mt-24 max-w-[1200px] mx-auto relative">
            <div className="absolute inset-0 hidden md:block" style={{ pointerEvents: 'none' }}>
                <ShinyEffect left={0} top={0} size={1400} />
            </div>

            <div className="grid md:grid-cols-2 place-items-center gap-8 relative z-10">
                <HeroLeft />
                <HeroRight />
            </div>
        </div>
    );
};

export default Hero;