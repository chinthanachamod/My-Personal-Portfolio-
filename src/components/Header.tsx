import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';
import { SunIcon, MoonIcon, MenuIcon, XIcon } from 'lucide-react';
const Header = () => {
  const {
    theme,
    toggleTheme
  } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const brandName = 'ChaMaX';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter effect
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    const typeWriter = () => {
      if (isTyping) {
        if (displayText.length < brandName.length) {
          setDisplayText(brandName.slice(0, displayText.length + 1));
          timeout = setTimeout(typeWriter, 200); // Typing speed
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, 1000); // Pause before erasing
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
          timeout = setTimeout(typeWriter, 100); // Erasing speed
        } else {
          timeout = setTimeout(() => {
            setIsTyping(true);
          }, 500); // Pause before typing again
        }
      }
    };

    timeout = setTimeout(typeWriter, 200);
    return () => clearTimeout(timeout);
  }, [displayText, isTyping, brandName]);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Skills',
    href: '#skills'
  }, {
    name: 'Projects',
    href: '#projects'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} transition={{
    type: 'spring',
    stiffness: 100
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? `${theme === 'dark' ? 'bg-gray-900/90 shadow-lg' : 'bg-white/90 shadow-md'} backdrop-blur-md` : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="text-2xl font-bold">
              <span className="inline-flex items-center">
                {displayText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ 
                    duration: 0.8, 
                    repeat: Infinity, 
                    repeatType: "reverse" 
                  }}
                  className="ml-1 text-blue-500"
                >
                  |
                </motion.span>
              </span>
            </a>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className={`text-sm font-medium transition-colors hover:text-blue-500 ${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                {link.name}
              </a>)}
            <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
          </nav>
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button onClick={toggleTheme} className="p-2 mr-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors" aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon size={20} /> : <MoonIcon size={20} />}
            </button>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
              {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className={`md:hidden ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(link => <a key={link.name} href={link.href} onClick={() => setMobileMenuOpen(false)} className={`block px-3 py-2 rounded-md text-base font-medium ${theme === 'dark' ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-100'}`}>
                {link.name}
              </a>)}
          </div>
        </motion.div>}
    </motion.header>;
};
export default Header;