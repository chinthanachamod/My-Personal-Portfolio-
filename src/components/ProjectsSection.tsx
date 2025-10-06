import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
const ProjectsSection = () => {
  const {
    theme
  } = useTheme();
  const [activeFilter, setActiveFilter] = useState('all');
  const projects = [{
    id: 1,
    title: 'Blood Donation Management System',
    category: 'web',
    image: 'src/assets/Blood_Donationa_MS.jpg',
    description: 'A web-based platform designed to connect blood donors, hospitals, and patients. The system enables donors to register and request donations, patients to request blood, and hospitals to manage blood stock, appointments, and requests efficiently. It includes role-based authentication, email notifications, and location-based hospital search.',
    technologies: ['Spring Boot', 'MySQL', 'HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Spring Security'],
    liveLink: 'https://www.youtube.com/watch?v=OJ0JZV-H3kc',
    githubLink: 'https://github.com/chinthanachamod/Blood-Donation-Management-System'
  }, {
    id: 2,
    title: 'Animal Empire - Animal Hospital',
    category: 'web',
    image: 'src/assets/Animal_Hospital.jpg',
    description: 'Animal Empire-Animal Hospital is a layered architecture Java application designed to manage appointments, pets, owners, medicines, suppliers, and prescriptions for an animal hospital.',
    technologies: ['Java 17', 'Maven', 'JavaFX', 'FXML', 'MySQL', 'JFoenix', 'Layered architecture / MVC-style organization'],
    liveLink: '',
    githubLink: 'https://github.com/chinthanachamod/Animal-Hospital---Layered'
  }, {
    id: 3,
    title: 'TastyLanka Mobile App',
    category: 'app',
    image: 'src/assets/TastyLanka-mobile app.png',
    description: 'TastyLanka is a cross-platform mobile app that helps users, especially foreigners, discover, explore and share authentic traditional Sri Lankan food.',
    technologies: ['React Native', 'Firebase', 'TypeScript', 'Expo'],
    liveLink: 'https://youtu.be/r_z9hVSRIik',
    githubLink: 'https://github.com/chinthanachamod'
  }, {
    id: 4,
    title: 'Smart Parking Management System (SPMS) - Backend',
    category: 'other',
    image: 'src/assets/Smart_Parking_MS.png',
    description: 'A microservices-based smart parking system built with Spring Boot and Spring Cloud. It provides service discovery, centralized configuration, an API gateway, and dedicated services for users, vehicles, payments and parking-space management.',
    technologies: ['Java', 'Spring Boot', 'Spring Cloud (Eureka, Config)', 'API Gateway', 'Maven', 'PostgreSQL', 'Docker', 'REST', 'JUnit'],
    liveLink: '',
    githubLink: 'https://github.com/chinthanachamod/Smart-Parking-MS'
  }, {
    id: 5,
    title: 'The Connect-4 Game',
    category: 'other',
    image: 'src/assets/Connect-4-Game.png',
    description: 'A desktop implementation of the classic Connect Four game built with Java and JavaFX. Supports two human players and an AI opponent, includes player creation UI, game-state persistence, and a responsive board UI.',
    technologies: ['Java 11+', 'JavaFX', 'Maven', 'JUnit', 'Scene Builder'],
    liveLink: '',
    githubLink: 'https://github.com/chinthanachamod/connect-four-game-assignment'
  }];
  const filters = [{
    id: 'all',
    label: 'All'
  }, {
    id: 'web',
    label: 'Web'
  }, {
    id: 'app',
    label: 'App'
  }, {
    id: 'other',
    label: 'Other'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="projects" className={`py-20 relative ${theme === 'dark' ? 'bg-transparent' : 'bg-transparent'}`}>
      {/* Subtle gradient overlay for better readability */}
      <div className={`absolute inset-0 z-0 ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900/60 via-gray-900/40 to-gray-900/60' : 'bg-gradient-to-b from-gray-50/60 via-white/40 to-gray-50/60'}`}></div>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className={`h-1 w-20 mx-auto mb-6 ${theme === 'dark' ? 'bg-blue-500' : 'bg-blue-600'}`}></div>
          <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Check out some of my recent work
          </p>
        </motion.div>
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {filters.map(filter => <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-6 py-2 rounded-full transition-colors ${activeFilter === filter.id ? `bg-blue-600 text-white` : `${theme === 'dark' ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}`}>
                {filter.label}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => <motion.div key={project.id} initial={{
          opacity: 0,
          y: 30
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true,
          margin: '-50px'
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }} className={`rounded-lg overflow-hidden shadow-lg ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
              <div className="relative overflow-hidden group">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex justify-end gap-2">
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
                        <ExternalLinkIcon size={18} className="text-white" />
                      </a>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors">
                        <GithubIcon size={18} className="text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className={`mb-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => <span key={tech} className={`text-xs px-3 py-1 rounded-full ${theme === 'dark' ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700'}`}>
                      {tech}
                    </span>)}
                </div>
              </div>
            </motion.div>)}
        </div>
        <div className="text-center mt-12">
          <a href="#" className={`inline-flex items-center px-6 py-3 rounded-full font-medium border-2 transition-colors ${theme === 'dark' ? 'border-gray-700 hover:border-gray-600 text-white' : 'border-gray-300 hover:border-gray-400 text-gray-800'}`}>
            View All Projects
          </a>
        </div>
      </div>
    </section>;
};
export default ProjectsSection;