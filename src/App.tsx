import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ThreeScene from './components/ThreeScene';
import ServicesSection from './components/ServicesSection';
import PricingSection from './components/PricingSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import ScrollIndicator from './components/ScrollIndicator';
import WhatsAppButton from './components/WhatsAppButton';
import './App.css';

function App() {
  // Load theme from localStorage on mount
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : true;
  });

  // Save theme to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-dark-bg' : 'bg-gray-100'} transition-colors duration-300`}>
      {/* Navigation */}
      <Navigation isDarkMode={isDarkMode} />
      
      {/* Hero Section */}
      <section id="home">
        <HeroSection isDarkMode={isDarkMode} />
      </section>
      
      {/* 3D Scene */}
      <div className="fixed inset-0 z-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 5, 10]} />
          <ThreeScene isDarkMode={isDarkMode} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>
      
      {/* Content Sections */}
      <div className="relative z-10">
        <section id="gallery" className="min-h-screen flex items-center justify-center">
          {/* Gallery section will be enhanced later */}
          <div className={`text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            <h2 className="text-4xl font-bold mb-4">Gallery</h2>
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Interactive 3D gallery showcase
            </p>
          </div>
        </section>
        
        <ServicesSection isDarkMode={isDarkMode} />
        <PricingSection isDarkMode={isDarkMode} />
        <AboutSection isDarkMode={isDarkMode} />
        <ContactSection isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
      
      {/* UI Controls */}
      <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <ScrollIndicator isDarkMode={isDarkMode} />
      <WhatsAppButton isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
