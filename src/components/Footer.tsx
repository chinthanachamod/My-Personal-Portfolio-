import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { ArrowUpIcon, GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from 'lucide-react';
const Footer = () => {
  const {
    theme
  } = useTheme();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const socialIcons = [{
    name: 'GitHub',
    icon: <GithubIcon size={20} />,
    href: 'https://github.com/chinthanachamod'
  }, {
    name: 'LinkedIn',
    icon: <LinkedinIcon size={20} />,
    href: 'https://linkedin.com/in/chinthanachamod'
  }, {
    name: 'Twitter',
    icon: <TwitterIcon size={20} />,
    href: 'https://twitter.com/chinthanachamod'
  }, {
    name: 'Instagram',
    icon: <InstagramIcon size={20} />,
    href: 'https://instagram.com/chinthanachamod'
  }];
  return <footer className={`py-12 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'} relative overflow-hidden`}>
      {/* Background decoration */}
      {theme === 'dark' && <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-blue-900/5 to-transparent"></div>}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 lg:col-span-2">
            <a href="#home" className="text-2xl font-bold">
              ChaMaX
            </a>
            <p className={`mt-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} max-w-md`}>
              Full-Stack Developer creating modern web applications with cutting-edge
              technologies. Specialized in React, Spring Boot, and scalable solutions.
            </p>
            <div className="flex space-x-4 mt-6">
              {socialIcons.map(social => <a key={social.name} href={social.href} className={`p-2 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white' : 'bg-gray-200 hover:bg-gray-300 text-gray-700 hover:text-gray-900'} transition-colors`} aria-label={social.name}>
                  {social.icon}
                </a>)}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(link => <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:underline transition-all hover:text-blue-500">
                      {link}
                    </a>
                  </li>)}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className={`space-y-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              <li>Sri Lanka</li>
              <li>chinthanachamod@gmail.com</li>
              <li>+94 (70) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4 md:mb-0`}>
            &copy; {new Date().getFullYear()} Chinthana Chamod. All rights reserved.
          </div>
          <button onClick={scrollToTop} className={`p-3 rounded-full ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`} aria-label="Scroll to top">
            <ArrowUpIcon size={20} />
          </button>
        </div>
      </div>
    </footer>;
};
export default Footer;