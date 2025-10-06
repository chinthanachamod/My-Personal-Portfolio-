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
    title: 'Modern E-Commerce Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
    description: 'Full-stack e-commerce platform with payment integration, admin dashboard, and inventory management.',
    technologies: ['React', 'Spring Boot', 'MySQL', 'PayPal API'],
    liveLink: 'https://github.com/chinthanachamod',
    githubLink: 'https://github.com/chinthanachamod'
  }, {
    id: 2,
    title: 'Project Management System',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    description: 'Comprehensive project management tool with team collaboration features and real-time updates.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveLink: 'https://github.com/chinthanachamod',
    githubLink: 'https://github.com/chinthanachamod'
  }, {
    id: 3,
    title: 'Mobile Banking App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    description: 'Secure mobile banking application with biometric authentication and transaction management.',
    technologies: ['React Native', 'Firebase', 'Redux', 'Biometric Auth'],
    liveLink: 'https://github.com/chinthanachamod',
    githubLink: 'https://github.com/chinthanachamod'
  }, {
    id: 4,
    title: 'Real Estate Platform',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    description: 'Property listing and management platform with advanced search and virtual tours.',
    technologies: ['React', 'Spring Boot', 'PostgreSQL', 'Google Maps API'],
    liveLink: 'https://github.com/chinthanachamod',
    githubLink: 'https://github.com/chinthanachamod'
  }, {
    id: 5,
    title: 'Learning Management System',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    description: 'Online learning platform with video streaming, progress tracking, and assessment tools.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Video.js'],
    liveLink: 'https://github.com/chinthanachamod',
    githubLink: 'https://github.com/chinthanachamod'
  }, {
    id: 6,
    title: 'Health Monitoring App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
    description: 'Health tracking mobile app with AI-powered insights and doctor consultation features.',
    technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase'],
    liveLink: 'https://github.com/chinthanachamod',
    githubLink: 'https://github.com/chinthanachamod'
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