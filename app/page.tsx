'use client';

import { useEffect, useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import { useTheme } from './contexts/ThemeContext';

export default function Home() {
  const { isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-pulse text-slate-600">Loading...</div>
        </div>
      </main>
    );
  }

  return (
    <main className={`min-h-screen transition-colors duration-300 ${
      isDark 
        ? 'bg-slate-900 text-white' 
        : 'bg-gray-50 text-slate-900'
    }`}>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </main>
  );
}

