import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
interface LayoutProps {
  children: React.ReactNode;
}
const Layout: React.FC<LayoutProps> = ({
  children
}) => {
  const {
    theme
  } = useTheme();
  return <motion.div initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    duration: 0.5
  }} className={`min-h-screen w-full transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} relative overflow-hidden`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Animated circles */}
        <motion.div className={`absolute w-[500px] h-[500px] rounded-full ${theme === 'dark' ? 'bg-blue-700/5' : 'bg-blue-500/5'}`} style={{
        top: '-10%',
        right: '-10%'
      }} animate={{
        scale: [1, 1.2, 1],
        x: [0, 30, 0],
        y: [0, -30, 0]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        repeatType: 'reverse'
      }} />
        <motion.div className={`absolute w-[300px] h-[300px] rounded-full ${theme === 'dark' ? 'bg-purple-700/5' : 'bg-purple-500/5'}`} style={{
        bottom: '10%',
        left: '5%'
      }} animate={{
        scale: [1, 1.3, 1],
        x: [0, -20, 0],
        y: [0, 40, 0]
      }} transition={{
        duration: 18,
        repeat: Infinity,
        repeatType: 'reverse'
      }} />
        <motion.div className={`absolute w-[400px] h-[400px] rounded-full ${theme === 'dark' ? 'bg-cyan-700/5' : 'bg-cyan-500/5'}`} style={{
        top: '30%',
        left: '-10%'
      }} animate={{
        scale: [1, 1.1, 1],
        x: [0, 40, 0],
        y: [0, 20, 0]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        repeatType: 'reverse'
      }} />
        {/* Floating gradient dots */}
        {theme === 'dark' && Array.from({
        length: 15
      }).map((_, i) => <motion.div key={i} className="absolute rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-md" style={{
        width: Math.random() * 30 + 10,
        height: Math.random() * 30 + 10,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, Math.random() * 100 - 50, 0],
        x: [0, Math.random() * 100 - 50, 0],
        opacity: [0.3, 0.6, 0.3]
      }} transition={{
        duration: Math.random() * 20 + 15,
        repeat: Infinity,
        repeatType: 'reverse'
      }} />)}
      </div>
      {/* Content with backdrop filter for better readability */}
      <div className="relative z-10">{children}</div>
    </motion.div>;
};
export default Layout;