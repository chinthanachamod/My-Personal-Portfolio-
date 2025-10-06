
import { ThemeProvider } from './components/ThemeContext';
import Layout from './components/Layout';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import { AnimatePresence } from 'framer-motion';
export function App() {
  return <ThemeProvider>
      <AnimatePresence>
        <Layout>
          <Header />
          <main className="w-full relative">
            <HeroSection />
            <AboutSection />
            
            {/* Particle animation background for Skills, Projects, and Contact sections */}
            <div className="relative">
              <ParticleBackground />
              <SkillsSection />
              <ProjectsSection />
              <ContactSection />
            </div>
          </main>
          <Footer />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>;
}