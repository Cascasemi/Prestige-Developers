import React from 'react';
import Layout from './components/Layout/Layout';
import HeroSection from './components/Home/HeroSection';
import ServicesSection from './components/Home/ServicesSection';
import StatsSection from './components/Home/StatsSection';
import AboutSection from './components/Home/AboutSection';
import ProjectsSection from './components/Home/ProjectsSection';
import CTASection from './components/Home/CTASection';

function App() {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <AboutSection />
      <ProjectsSection />
      <CTASection />
    </Layout>
  );
}

export default App;