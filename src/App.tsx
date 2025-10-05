import React from 'react';
import { ThemeProvider } from './components/ThemeContext';
import Layout from './components/Layout';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { AnimatePresence } from 'framer-motion';
export function App() {
  return <ThemeProvider>
      <AnimatePresence>
        <Layout>
          <Header />
          <main className="w-full">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </Layout>
      </AnimatePresence>
    </ThemeProvider>;
}