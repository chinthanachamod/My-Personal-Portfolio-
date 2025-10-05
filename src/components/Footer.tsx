import { useTheme } from './ThemeContext';
import { ArrowUpIcon, GithubIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
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
    name: 'WhatsApp',
    icon: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.569-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488"/>
      </svg>
    ),
    href: 'https://wa.me/94717500753'
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
              <li>chinthanachamod50@gmail.com</li>
              <li>+94 (71) 750-0753</li>
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