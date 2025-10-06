import { motion } from 'framer-motion';
import { ArrowDownIcon, FileDownIcon } from 'lucide-react';
import { useTheme } from './ThemeContext';
const HeroSection = () => {
  const {
    theme
  } = useTheme();
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  const itemVariants = {
    hidden: {
      y: 50,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut'
      }
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-b from-blue-900/20 via-gray-900 to-gray-900' : 'bg-gradient-to-b from-blue-100/30 via-white to-white'}`}></div>
        {theme === 'dark' && <div className="absolute top-0 left-0 right-0 h-[500px] bg-blue-500/10 blur-3xl rounded-full transform -translate-y-1/2"></div>}
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="flex flex-col items-center text-center" variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants} className="mb-8">
            <div className={`inline-block p-1 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-400 to-purple-400'}`}>
              <div className={`px-6 py-2 rounded-full ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                  Welcome to my portfolio
                </span>
              </div>
            </div>
          </motion.div>
          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="inline-block">Hello, I'm </span>
            <span className={`inline-block ${theme === 'dark' ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text' : 'bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'}`}>
              _Chinthana Chamod
            </span>
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-xl md:text-2xl lg:text-3xl mb-8">
            <span className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              Full-Stack Developer 
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className={`max-w-lg mb-10 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            I create modern and responsive web applications with a focus on user
            experience and performance.
          </motion.p>
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4 justify-center">
            <a href="#contact" className={`px-8 py-3 rounded-full text-white font-medium bg-gradient-to-r ${theme === 'dark' ? 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'} transition-all shadow-lg hover:shadow-blue-500/20`}>
              Contact Me
            </a>
            <a href="/Chinthana-Chamod-CV.pdf" download="Chinthana-Chamod-CV.pdf" className={`px-8 py-3 rounded-full font-medium border-2 transition-colors flex items-center gap-2 ${theme === 'dark' ? 'border-gray-700 hover:border-gray-600 text-white hover:bg-gray-800' : 'border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-100'}`}>
              <FileDownIcon size={18} />
              Download CV
            </a>
            <a href="#projects" className={`px-8 py-3 rounded-full font-medium border-2 transition-colors ${theme === 'dark' ? 'border-gray-700 hover:border-gray-600 text-white hover:bg-gray-800' : 'border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-100'}`}>
              View My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
      <motion.a href="#about" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      delay: 2,
      duration: 1,
      repeat: Infinity,
      repeatType: 'reverse'
    }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer">
        <ArrowDownIcon className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`} size={32} />
      </motion.a>
    </section>;
};
export default HeroSection;