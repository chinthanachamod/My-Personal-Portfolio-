import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
const SkillsSection = () => {
  const {
    theme
  } = useTheme();
  // Categorized skills
  const skillCategories = [{
    title: 'Technical Skills',
    subcategories: [{
      name: 'Programming Languages',
      skills: ['Java', 'JavaScript', 'SQL', 'Python']
    }, {
      name: 'Web Development',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap']
    }, {
      name: 'Database Management',
      skills: ['MySQL', 'MongoDB']
    }, {
      name: 'Frameworks',
      skills: ['Spring Boot', 'React', 'React Native', 'Node.js']
    }, {
      name: 'Version Control',
      skills: ['GitHub', 'Git', 'Docker']
    }, {
      name: 'Design Software',
      skills: ['Figma', 'Canva']
    }, {
      name: 'IDE Tools',
      skills: ['Visual Studio Code', 'IntelliJ IDEA', 'WebStorm']
    }, {
      name: 'Backend & Cloud Services',
      skills: ['Firebase', 'MockAPI']
    }]
  }, {
    title: 'Professional Skills',
    skills: ['Diversified thinking', 'Problem solving', 'Innovative ideas and creativity', 'Effective communication', 'Teamwork and leadership', 'Adaptability', 'Sports and musical skills']
  }, {
    title: 'AI Control',
    description: 'Good knowledge and experience in working with AI tools. Also have a strong interest in AI.'
  }];
  // Random star positions for the background
  const stars = Array.from({
    length: 100
  }).map(() => ({
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    opacity: Math.random() * 0.7 + 0.3,
    blinkDelay: Math.random() * 5
  }));
  return <section id="skills" className={`py-20 relative overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-800/5'}`}>
      {/* Night sky background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-blue-950 via-indigo-950 to-gray-900' : 'bg-gradient-to-b from-blue-100 via-indigo-50 to-white'}`}></div>
        {/* Stars */}
        {stars.map((star, i) => <motion.div key={i} className={`absolute rounded-full ${theme === 'dark' ? 'bg-white' : 'bg-blue-500'}`} style={{
        left: `${star.x}%`,
        top: `${star.y}%`,
        width: `${star.size}px`,
        height: `${star.size}px`
      }} animate={{
        opacity: [star.opacity, star.opacity * 1.5, star.opacity]
      }} transition={{
        repeat: Infinity,
        duration: 2 + star.blinkDelay,
        ease: 'easeInOut'
      }} />)}
        {/* Comet animation */}
        <motion.div className="absolute" initial={{
        x: '-10%',
        y: '10%',
        opacity: 0
      }} animate={{
        x: '110%',
        y: '40%',
        opacity: [0, 1, 1, 0]
      }} transition={{
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 7
      }}>
          <div className={`h-1 w-24 ${theme === 'dark' ? 'bg-blue-200' : 'bg-blue-500'} rounded-full blur-[2px] transform -rotate-12`}></div>
          <div className={`h-2 w-4 ${theme === 'dark' ? 'bg-white' : 'bg-blue-300'} rounded-full blur-[1px] -mt-1 transform -rotate-12`}></div>
        </motion.div>
        {/* Second comet with different timing */}
        <motion.div className="absolute" initial={{
        x: '110%',
        y: '30%',
        opacity: 0
      }} animate={{
        x: '-10%',
        y: '60%',
        opacity: [0, 1, 1, 0]
      }} transition={{
        duration: 5,
        ease: 'easeInOut',
        repeat: Infinity,
        repeatDelay: 9,
        delay: 4
      }}>
          <div className={`h-1 w-32 ${theme === 'dark' ? 'bg-indigo-200' : 'bg-indigo-500'} rounded-full blur-[2px] transform rotate-12`}></div>
          <div className={`h-2 w-4 ${theme === 'dark' ? 'bg-white' : 'bg-indigo-300'} rounded-full blur-[1px] -mt-1 transform rotate-12`}></div>
        </motion.div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true,
        margin: '-100px'
      }} transition={{
        duration: 0.8
      }} className="max-w-3xl mx-auto text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Skills
          </h2>
          <div className={`h-1 w-20 mx-auto mb-6 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}></div>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Explore my technical expertise, professional abilities, and
            specialized knowledge
          </p>
        </motion.div>
        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => <motion.div key={category.title} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          duration: 0.6,
          delay: categoryIndex * 0.2
        }} className={`p-8 rounded-xl backdrop-blur-sm ${theme === 'dark' ? 'bg-gray-800/50 border border-gray-700' : 'bg-white/80 border border-gray-200 shadow-lg'}`}>
              <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {category.title}
              </h3>
              {category.subcategories ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.subcategories.map((subcategory, index) => <motion.div key={subcategory.name} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.1,
              duration: 0.5
            }} className={`p-4 rounded-lg ${theme === 'dark' ? 'bg-gray-700/50 hover:bg-gray-700' : 'bg-gray-100/70 hover:bg-gray-200/70'} transition-colors`}>
                      <h4 className="font-semibold mb-3">{subcategory.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {subcategory.skills.map(skill => <span key={skill} className={`text-sm px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-blue-900/40 text-blue-100 border border-blue-800/50' : 'bg-blue-100 text-blue-800 border border-blue-200'}`}>
                            {skill}
                          </span>)}
                      </div>
                    </motion.div>)}
                </div> : category.skills ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.skills.map((skill, index) => <motion.div key={skill} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: index * 0.05,
              duration: 0.4
            }} whileHover={{
              y: -5
            }} className={`p-4 rounded-lg flex items-center justify-center text-center ${theme === 'dark' ? 'bg-gradient-to-br from-purple-900/40 to-blue-900/40 border border-purple-800/30' : 'bg-gradient-to-br from-purple-100 to-blue-100 border border-purple-200/50'} transition-all`}>
                      <span className="font-medium">{skill}</span>
                    </motion.div>)}
                </div> : <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800/30' : 'bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-100'}`}>
                  <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {category.description}
                  </p>
                </div>}
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default SkillsSection;