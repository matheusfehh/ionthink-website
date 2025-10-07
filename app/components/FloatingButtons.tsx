'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useTheme } from '../contexts/ThemeContext';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const openWhatsApp = () => {
    const phoneNumber = '5511999999999'; // Replace with actual number
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços da Ion Think.');
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <Button
        onClick={openWhatsApp}
        className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group ${
          isDark 
            ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600' 
            : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-md'
        }`}
        aria-label="Contact via WhatsApp"
      >
        <MessageCircle size={24} className="group-hover:scale-110 transition-transform duration-200" />
      </Button>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className={`w-14 h-14 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group animate-fade-in-up ${
            isDark 
              ? 'bg-slate-800 hover:bg-slate-700 text-white border border-slate-600' 
              : 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 shadow-md'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="group-hover:scale-110 transition-transform duration-200" />
        </Button>
      )}
    </div>
  );
};

export default FloatingButtons;

