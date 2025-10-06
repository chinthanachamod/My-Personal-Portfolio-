// import { motion } from 'framer-motion';
// import { useTheme } from './ThemeContext';
// import { FileDownIcon } from 'lucide-react';
// const AboutSection = () => {
//   const {
//     theme
//   } = useTheme();
//   return <section id="about" className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} relative`}>
//       {/* Background decorations */}
//       {theme === 'dark' && <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full"></div>}
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <motion.div initial={{
//         opacity: 0,
//         y: 50
//       }} whileInView={{
//         opacity: 1,
//         y: 0
//       }} viewport={{
//         once: true,
//         margin: '-100px'
//       }} transition={{
//         duration: 0.8
//       }} className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
//           <div className={`h-1 w-20 mx-auto mb-6 ${theme === 'dark' ? 'bg-gradient-to-r from-blue-500 to-purple-500' : 'bg-gradient-to-r from-blue-600 to-purple-600'}`}></div>
//         </motion.div>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//           <motion.div initial={{
//           opacity: 0,
//           x: -50
//         }} whileInView={{
//           opacity: 1,
//           x: 0
//         }} viewport={{
//           once: true,
//           margin: '-100px'
//         }} transition={{
//           duration: 0.8
//         }}>
//             <div className="relative group max-w-sm mx-auto">
//               <img src="src/assets/My Image.jpg" alt="Profile" className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:transform group-hover:scale-[1.01]" />
//             </div>
//           </motion.div>
//           <motion.div initial={{
//           opacity: 0,
//           x: 50
//         }} whileInView={{
//           opacity: 1,
//           x: 0
//         }} viewport={{
//           once: true,
//           margin: '-100px'
//         }} transition={{
//           duration: 0.8,
//           delay: 0.2
//         }}>
//             <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
//             <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//               I'm a passionate full-stack developer with expertise in modern web technologies.
//               I specialize in creating scalable web applications using React, Node.js, Spring Boot,
//               and various database technologies. My strong foundation in both frontend and backend
//               development allows me to build comprehensive solutions.
//             </p>
//             <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//               I have experience with Java, JavaScript, Python, and SQL, along with frameworks
//               like React, React Native, and Spring Boot. I'm passionate about clean code,
//               user experience, and staying updated with the latest technology trends.
//               I also have good knowledge and experience working with AI tools.
//             </p>
//             <div className="grid grid-cols-2 gap-4 mb-8">
//               <div>
//                 <h4 className="font-bold mb-2">Name:</h4>
//                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                   Chinthana Chamod
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-bold mb-2">Email:</h4>
//                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                   chinthanachamod50@gmail.com
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-bold mb-2">Location:</h4>
//                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                   Sri Lanka
//                 </p>
//               </div>
//               <div>
//                 <h4 className="font-bold mb-2">Availability:</h4>
//                 <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
//                   Open to Opportunities
//                 </p>
//               </div>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               <a href="#contact" className={`inline-flex items-center px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r ${theme === 'dark' ? 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' : 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'} transition-all shadow-lg hover:shadow-blue-500/20`}>
//                 Contact Me
//               </a>
//               <a href="/Chinthana-Chamod-CV.pdf" download="Chinthana-Chamod-CV.pdf" className={`inline-flex items-center px-6 py-3 rounded-full font-medium border-2 gap-2 ${theme === 'dark' ? 'border-gray-700 hover:border-gray-600 text-white hover:bg-gray-800' : 'border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-100'} transition-colors`}>
//                 <FileDownIcon size={18} />
//                 Download CV
//               </a>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>;
// };
// export default AboutSection;
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { FileDownIcon } from 'lucide-react';

const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <section 
      id="about" 
      className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'} relative`}
    >
      {/* Background decorations */}
      {theme === 'dark' && (
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-r from-blue-500/5 to-purple-500/5 blur-3xl rounded-full"></div>
      )}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div 
            className={`h-1 w-20 mx-auto mb-6 ${
              theme === 'dark' 
                ? 'bg-gradient-to-r from-blue-500 to-purple-500' 
                : 'bg-gradient-to-r from-blue-600 to-purple-600'
            }`}
          ></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group max-w-sm mx-auto">
              {/* Rotating dotted circle */}
              <motion.div
                className="absolute inset-0 border-2 border-dashed rounded-lg pointer-events-none -z-10"
                style={{
                  borderColor: theme === 'dark' ? 'rgba(96, 165, 250, 0.5)' : 'rgba(59, 130, 246, 0.5)'
                }}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <img 
                src="src/assets/My Image.jpg" 
                alt="Profile" 
                className="w-full h-auto object-cover rounded-lg transition-transform duration-300 group-hover:transform group-hover:scale-[1.01] relative z-10" 
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-4">Who am I?</h3>
            <p className={`mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              I'm a passionate full-stack developer with expertise in modern web technologies.
              I specialize in creating scalable web applications using React, Node.js, Spring Boot,
              and various database technologies. My strong foundation in both frontend and backend
              development allows me to build comprehensive solutions.
            </p>
            <p className={`mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              I have experience with Java, JavaScript, Python, and SQL, along with frameworks
              like React, React Native, and Spring Boot. I'm passionate about clean code,
              user experience, and staying updated with the latest technology trends.
              I also have good knowledge and experience working with AI tools.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div>
                <h4 className="font-bold mb-2">Name:</h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Chinthana Chamod
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Email:</h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'} text-sm sm:text-base break-all sm:break-normal overflow-wrap-anywhere`}>
                  <a href="mailto:chinthanachamod50@gmail.com" className="hover:underline transition-colors">
                    chinthanachamod50@gmail.com
                  </a>
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Location:</h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Sri Lanka
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-2">Availability:</h4>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  Open to Opportunities
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="#contact" 
                className={`inline-flex items-center px-6 py-3 rounded-full text-white font-medium bg-gradient-to-r ${
                  theme === 'dark' 
                    ? 'from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                    : 'from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600'
                } transition-all shadow-lg hover:shadow-blue-500/20`}
              >
                Contact Me
              </a>
              <a 
                href="/Chinthana-Chamod-CV.pdf" 
                download="Chinthana-Chamod-CV.pdf" 
                className={`inline-flex items-center px-6 py-3 rounded-full font-medium border-2 gap-2 ${
                  theme === 'dark' 
                    ? 'border-gray-700 hover:border-gray-600 text-white hover:bg-gray-800' 
                    : 'border-gray-300 hover:border-gray-400 text-gray-800 hover:bg-gray-100'
                } transition-colors`}
              >
                <FileDownIcon size={18} />
                Download CV
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;