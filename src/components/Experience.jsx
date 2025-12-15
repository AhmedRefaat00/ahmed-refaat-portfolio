import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import ScrollStack, { ScrollStackItem } from '../reactbits/ScrollStack';
import bedabImage from '../assets/bedab.jfif';
import mostqel from '../assets/mostqel.jfif';
import itiImage from '../assets/iti.jfif';


export default function Experience() {
    const experiences = [
        {
            title: 'Full-stack & Cross-platform Freelance Developer',
            company: 'Mostaqel',
            location: 'Cairo, Egypt',
            period: 'Aug 2024 – Present',
            icon: '💼',
            iconImage: mostqel,
            gradient: 'from-cyan-400 to-blue-500',
            achievements: [
                'Developed and maintained responsive web pages using React.js, Redux, HTML, CSS, and Bootstrap, resulting in an estimated 20% improvement in user engagement across devices.',
                'Optimized application performance by implementing best practices like code-splitting and memoization, leading to faster perceived load times.',
                'Contributed to Git-based version control and collaborated effectively with the team on complex features.'
            ],
            technologies: ['React.js', 'Redux', 'Node.js', 'React Native', 'TypeScript']
        },
        {
            title: 'Front-End & Cross Mobile Developer Trainee',
            company: 'ITI Smart Village',
            location: 'Cairo, Egypt',
            period: 'Mar 2024 – Aug 2024',
            icon: '🎓',
            iconImage: itiImage,
            gradient: 'from-blue-400 to-purple-500',
            achievements: [
                'Completed an intensive, hands-on training program covering React.js, React Native, and Flutter development, focusing on state management, component lifecycle, and modern front-end practices.',
                'Developed complex applications using MERN stack, integrated web APIs, and applied best practices in code structure, modularity, and unit testing to ensure scalable and maintainable codebases.'
            ],
            technologies: ['React.js', 'React Native', 'Flutter', 'MERN Stack', 'REST APIs']
        },
        {
            title: 'Frontend Developer',
            company: 'Bedab Egypt',
            location: 'Cairo, Egypt',
            period: 'Jan 2024 – May 2024',
            icon: '🚀',
            iconImage: bedabImage,
            gradient: 'from-purple-400 to-pink-500',
            achievements: [
                'Developed and maintained responsive web pages using React.js, Redux, HTML, CSS, and Bootstrap, resulting in an estimated 20% improvement in user engagement across devices.',
                'Optimized application performance by implementing best practices like code-splitting and memoization, leading to faster perceived load times.',
                'Contributed to Git-based version control and collaborated effectively with the team on complex features.'
            ],
            technologies: ['React.js', 'Redux', 'HTML/CSS', 'Bootstrap', 'Git']
        }
    ];

    return (
        <section id="experience" className="relative w-full min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

            {/* Section Header */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 md:mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4">
                        <span className="text-white">My </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                            Experience
                        </span>
                    </h2>
                    <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
                        A journey through my professional growth and achievements
                    </p>
                    <div className="mt-4 sm:mt-6 w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
                </motion.div>
            </div>

            {/* ScrollStack Container */}
            <div className="relative z-10 w-full">
                <style>{`
                    .scroll-stack-inner {
                        padding-top: 10vh !important;
                        padding-left: 1rem !important;
                        padding-right: 1rem !important;
                        padding-bottom: 20rem !important;
                    }
                    @media (min-width: 640px) {
                        .scroll-stack-inner {
                            padding-left: 2rem !important;
                            padding-right: 2rem !important;
                            padding-bottom: 25rem !important;
                        }
                    }
                    @media (min-width: 768px) {
                        .scroll-stack-inner {
                            padding-left: 3rem !important;
                            padding-right: 3rem !important;
                            padding-bottom: 30rem !important;
                        }
                    }
                    @media (min-width: 1024px) {
                        .scroll-stack-inner {
                            padding-left: 5rem !important;
                            padding-right: 5rem !important;
                            padding-bottom: 10rem !important;
                            padding-top: 0rem !important;
                        }
                    }
                    .scroll-stack-card {
                        height: auto !important;
                        min-height: 280px !important;
                        padding: 1rem !important;
                        margin-bottom: 1.5rem !important;
                        border-radius: 1.5rem !important;
                    }
                    @media (min-width: 640px) {
                        .scroll-stack-card {
                            min-height: 300px !important;
                            padding: 1.5rem !important;
                            margin-bottom: 2rem !important;
                            border-radius: 2rem !important;
                        }
                    }
                    @media (min-width: 768px) {
                        .scroll-stack-card {
                            min-height: 320px !important;
                            padding: 2rem !important;
                            margin-bottom: 2.5rem !important;
                        }
                    }
                    @media (min-width: 1024px) {
                        .scroll-stack-card {
                            min-height: 320px !important;
                            padding: 3rem !important;
                            border-radius: 2.5rem !important;
                        }
                    }
                `}</style>
                <ScrollStack
                    useWindowScroll={true}
                    itemDistance={60}
                    itemScale={0.02}
                    itemStackDistance={25}
                    stackPosition="20%"
                    baseScale={0.88}
                    rotationAmount={0.3}
                    blurAmount={1}
                >
                    {experiences.map((exp, index) => (
                        <ScrollStackItem
                            key={index}
                            itemClassName="bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-400/20 shadow-2xl shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all duration-300"
                        >
                            <div className="flex flex-col h-full overflow-hidden">
                                {/* Header */}
                                <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                                    <div className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center shadow-lg overflow-hidden`}>
                                        {exp.iconImage ? (
                                            <img
                                                src={exp.iconImage}
                                                alt={exp.company}
                                                className="w-full h-full object-cover rounded-lg sm:rounded-xl"
                                            />
                                        ) : (
                                            <span className="text-lg sm:text-xl md:text-2xl">{exp.icon}</span>
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1 sm:mb-2 leading-tight">
                                            {exp.title}
                                        </h3>
                                        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs sm:text-sm md:text-base text-gray-300">
                                            <span className="text-cyan-400 font-semibold whitespace-nowrap">{exp.company}</span>
                                            <span className="text-gray-500 hidden sm:inline">•</span>
                                            <span className="whitespace-nowrap">{exp.location}</span>
                                            <span className="text-gray-500 hidden sm:inline">•</span>
                                            <span className="text-xs sm:text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Achievements */}
                                <div className="flex-1 space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                                    {exp.achievements.map((achievement, idx) => (
                                        <div key={idx} className="flex gap-2 sm:gap-3">
                                            <div className={`shrink-0 w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gradient-to-r ${exp.gradient} mt-1.5 sm:mt-2`} />
                                            <p className="text-sm sm:text-base text-gray-300 leading-relaxed flex-1">
                                                {achievement}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                {/* Technologies */}
                                <div className="pt-3 sm:pt-4 border-t border-cyan-400/20">
                                    <p className="text-xs sm:text-sm text-white mb-2 sm:mb-3 font-semibold uppercase tracking-wider">
                                        Technologies
                                    </p>
                                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                        {exp.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r ${exp.gradient} bg-opacity-20 text-white border border-white/20 whitespace-nowrap`}
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollStackItem>
                    ))}
                </ScrollStack>
            </div>
        </section>
    );
}
