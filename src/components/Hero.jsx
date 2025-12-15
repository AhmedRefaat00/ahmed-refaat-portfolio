// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import LightRays from "../reactbits/LightRays";
import RotatingText from "../reactbits/RotatingText";
import TextType from "../reactbits/TextType";
import meImage from "../assets/me.jpg";

export default function Hero() {
    return (
        <section id="top" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a1a]">
            {/* Light Rays Background Effect */}
            <div className="absolute inset-0 w-full h-full z-0">
                <LightRays
                    raysOrigin="top-center"
                    raysColor="#00d9ff"
                    raysSpeed={1.5}
                    lightSpread={0.8}
                    rayLength={1.2}
                    followMouse={true}
                    mouseInfluence={0.15}
                    noiseAmount={0.1}
                    distortion={0.05}
                    className="custom-rays opacity-60"
                />
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1a1a]/80 to-[#1a1a1a] z-[1]" />

            {/* Main Content Container */}
            <div className="relative z-[2] w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Text Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="space-y-6 lg:space-y-8"
                    >


                        {/* Main Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
                        >
                            I'm{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                                Ahmed Refaat
                            </span>
                            ,<br />
                            a{" "}
                            <span className="inline-block">
                                <TextType
                                    text={["Full-Stack Developer", "Front-End Developer", "Mobile Developer"]}
                                    typingSpeed={75}
                                    pauseDuration={2000}
                                    showCursor={true}
                                    cursorCharacter="|"
                                    className="text-cyan-400"
                                    cursorClassName="text-cyan-400 animate-pulse"
                                />
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="text-gray-300 text-lg sm:text-xl leading-relaxed max-w-2xl"
                        >
                            I'm a Frontend & Cross-Platform Developer with a strong knowledge in React.js, React Native, and backend development using Node.js. Experienced in UI/UX design with Figma.
                        </motion.p>

                        {/* Rotating Text Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                            className="flex items-center gap-3 flex-wrap"
                        >
                            <span className="text-gray-400 text-lg">I</span>
                            <RotatingText
                                texts={['Create', 'Code', 'Design', 'Build']}
                                mainClassName="px-4 sm:px-5 md:px-6 bg-gradient-to-r from-cyan-400 to-blue-500 text-black overflow-hidden py-2 sm:py-2.5 md:py-3 justify-center rounded-lg font-bold text-lg sm:text-xl shadow-lg shadow-cyan-500/50"
                                staggerFrom="last"
                                initial={{ y: "100%" }}
                                animate={{ y: 0 }}
                                exit={{ y: "-120%" }}
                                staggerDuration={0.025}
                                splitLevelClassName="overflow-hidden pb-1"
                                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                                rotationInterval={2000}
                            />
                            <span className="text-gray-400 text-lg">amazing experiences</span>
                        </motion.div>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.9 }}
                            className="flex flex-wrap gap-4 pt-4"
                        >
                            <a
                                href="#contact"
                                onClick={e => {
                                    e.preventDefault();
                                    const el = document.getElementById('contact');
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-lg hover:from-cyan-300 hover:to-blue-400 transition-all duration-300 shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:scale-105"
                            >
                                Get In Touch
                            </a>
                            <a
                                href="#projects"
                                onClick={e => {
                                    e.preventDefault();
                                    const el = document.getElementById('projects');
                                    if (el) {
                                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                                    }
                                }}
                                className="px-6 py-3 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
                            >
                                View My Work
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex justify-center lg:justify-end"
                    >
                        <div className="relative">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-2xl opacity-30 animate-pulse" />

                            {/* Image Container */}
                            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-cyan-400/50 shadow-2xl shadow-cyan-500/50">
                                <motion.img
                                    src={meImage}
                                    alt="Ahmed Refaat Profile Picture"
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>

                            {/* Floating Elements */}
                            <motion.div
                                className="absolute -top-4 -right-4 w-16 h-16 bg-cyan-400/20 rounded-full blur-xl"
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                            />
                            <motion.div
                                className="absolute -bottom-4 -left-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"
                                animate={{
                                    y: [0, 10, 0],
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 0.5,
                                }}
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-[2]"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}