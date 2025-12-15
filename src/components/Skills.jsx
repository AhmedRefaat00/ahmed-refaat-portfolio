import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'motion/react';
import * as SimpleIcons from 'simple-icons';
import LightRays from '../reactbits/LightRays';

// Helper function to get icon from simple-icons
const getIcon = (iconName) => {
  try {
    // simple-icons uses Get() method or direct access with slug
    let icon = null;

    // Try using Get method if available
    if (typeof SimpleIcons.Get === 'function') {
      icon = SimpleIcons.Get(iconName);
      if (!icon) {
        icon = SimpleIcons.Get(iconName.toLowerCase());
      }
    }

    // Try direct access by slug
    if (!icon) {
      const slug = iconName.toLowerCase().replace(/\./g, 'dot').replace(/\s+/g, '');
      const iconKey = Object.keys(SimpleIcons).find(
        key => {
          const iconObj = SimpleIcons[key];
          return iconObj && (
            iconObj.slug === slug ||
            iconObj.slug === iconName.toLowerCase() ||
            key.toLowerCase() === iconName.toLowerCase()
          );
        }
      );
      if (iconKey && SimpleIcons[iconKey]) {
        icon = SimpleIcons[iconKey];
      }
    }

    if (icon && icon.path) {
      return {
        path: icon.path,
        viewBox: icon.viewBox || '0 0 24 24'
      };
    }
  } catch (e) {
    console.warn(`Icon not found: ${iconName}`, e);
  }
  return null;
};

// Icon component wrapper
const IconComponent = ({ iconName, className }) => {
  const icon = getIcon(iconName);
  if (!icon) {
    return (
      <div className={`${className} flex items-center justify-center text-xs font-bold`}>
        {iconName.charAt(0)}
      </div>
    );
  }
  return (
    <svg className={className} viewBox={icon.viewBox} fill="currentColor">
      <path d={icon.path} fill="currentColor" />
    </svg>
  );
};

export default function Skills() {
  const skills = [
    { name: 'React', iconName: 'React', color: '#61DAFB', category: 'Frontend' },
    { name: 'JavaScript', iconName: 'JavaScript', color: '#F7DF1E', category: 'Language' },
    { name: 'TypeScript', iconName: 'TypeScript', color: '#3178C6', category: 'Language' },
    { name: 'HTML5', iconName: 'HTML5', color: '#E34F26', category: 'Frontend' },
    { name: 'CSS3', iconName: 'CSS3', color: '#1572B6', category: 'Frontend' },
    { name: 'Node.js', iconName: 'Nodedotjs', color: '#339933', category: 'Backend' },
    { name: 'Python', iconName: 'Python', color: '#3776AB', category: 'Language' },
    { name: 'Git', iconName: 'Git', color: '#F05032', category: 'Tools' },
    { name: 'MongoDB', iconName: 'MongoDB', color: '#47A248', category: 'Database' },
    { name: 'Tailwind CSS', iconName: 'TailwindCSS', color: '#06B6D4', category: 'Frontend' },
    { name: 'Firebase', iconName: 'Firebase', color: '#FFCA28', category: 'Backend' },
    { name: 'Flutter', iconName: 'Flutter', color: '#02569B', category: 'Mobile' },
    { name: 'Redux', iconName: 'Redux', color: '#764ABC', category: 'Frontend' },
    { name: 'Bootstrap', iconName: 'Bootstrap', color: '#563D7C', category: 'Frontend' },
    { name: 'Tailwind CSS', iconName: 'Tailwindcss', color: '#06B6D4', category: 'Frontend' },
    { name: 'MUI', iconName: 'Mui', color: '#007FFF', category: 'Frontend' },
    { name: 'Laravel', iconName: 'Laravel', color: '#FF2D20', category: 'Backend' },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Language', 'Mobile', 'Database', 'Tools'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredSkills = selectedCategory === 'All'
    ? skills
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative w-full min-h-screen bg-[#1a1a1a] py-12 sm:py-16 md:py-20 overflow-hidden">
      {/* Light Rays Background Effect */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-20">
        <LightRays
          raysOrigin="bottom-center"
          raysColor="#00d9ff"
          raysSpeed={1.2}
          lightSpread={0.9}
          rayLength={1.0}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.05}
          distortion={0.03}
          className="custom-rays"
        />
      </div>

      {/* Enhanced Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,217,255,0.1),transparent_60%)] pointer-events-none" />

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
              Skills
            </span>
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto px-4">
            Technologies and tools I work with
          </p>
          <div className="mt-4 sm:mt-6 w-16 sm:w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm sm:text-base font-semibold transition-all duration-300 ${selectedCategory === category
                ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/50'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 border border-gray-700/50'
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
          {filteredSkills.map((skill, index) => {
            return (
              <motion.div
                key={`${skill.name}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative"
              >
                <div
                  className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/90 backdrop-blur-sm border border-cyan-400/20 rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer transition-all duration-300 hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
                  style={{
                    '--skill-color': skill.color
                  }}
                >
                  {/* Shine Effect on Hover */}
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at center, ${skill.color}20, transparent 70%)`,
                      filter: `blur(20px)`,
                    }}
                  />

                  {/* Icon Container */}
                  <div className="relative z-10 flex flex-col items-center justify-center">
                    <div
                      className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 transition-all duration-500 group-hover:scale-110"
                      style={{
                        color: skill.color,
                        filter: 'drop-shadow(0 0 0px currentColor)',
                      }}
                    >
                      <IconComponent
                        iconName={skill.iconName}
                        className="w-full h-full transition-all duration-500 group-hover:drop-shadow-[0_0_20px_currentColor] group-hover:brightness-125"
                      />
                    </div>

                    {/* Skill Name */}
                    <h3 className="text-xs sm:text-sm font-semibold text-white text-center group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Glow Effect */}
                  <div
                    className="absolute inset-0 rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      boxShadow: `0 0 30px ${skill.color}40, inset 0 0 20px ${skill.color}20`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
