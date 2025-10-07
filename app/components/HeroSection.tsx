'use client';

import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/button';
import AtomAnimation from './AtomAnimation';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const HeroSection = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-slate-800 to-slate-900' 
        : 'bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100'
    }`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, ${isDark ? 'rgba(255,255,255,0.1)' : 'rgba(71,85,105,0.1)'} 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-screen flex items-center">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center w-full">
            {/* Content - Left Side */}
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className={`inline-flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium ${
                  isDark 
                    ? 'bg-slate-800/70 text-slate-300 border border-slate-700/50' 
                    : 'bg-slate-100/80 text-slate-600 border border-slate-200/50'
                }`}>
                  <Zap size={16} className={isDark ? 'text-slate-400' : 'text-slate-500'} />
                  <span>{t('hero.badge')}</span>
                </div>
                
                <h1 className={`text-5xl xl:text-6xl font-bold leading-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {t('hero.title1')}
                  <br />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{t('hero.title2')}</span>
                  <br />
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark 
                      ? 'from-slate-200 via-slate-300 to-slate-400' 
                      : 'from-slate-700 via-slate-800 to-slate-900'
                  }`}>
                    {t('hero.title3')}
                  </span>
                </h1>
                
                <p className={`text-xl leading-relaxed max-w-lg ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {t('hero.description')}
                </p>
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  className={`px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600' 
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  {t('hero.services')}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('about')}
                  className={`px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white' 
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {t('hero.about')}
                </Button>
              </div>
            </div>

            {/* Atom Animation - Right Side */}
            <div className="flex justify-center">
              <AtomAnimation />
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden w-full">
            <div className="text-center space-y-8 animate-fade-in-up">
              {/* Mobile Atom Animation - Top */}
              <div className="flex justify-center mb-8">
                <div className="scale-75 sm:scale-90">
                  <AtomAnimation />
                </div>
              </div>

              {/* Mobile Content */}
              <div className="space-y-6">
                <div className={`inline-flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium ${
                  isDark 
                    ? 'bg-slate-800/70 text-slate-300 border border-slate-700/50' 
                    : 'bg-slate-100/80 text-slate-600 border border-slate-200/50'
                }`}>
                  <Zap size={16} className={isDark ? 'text-slate-400' : 'text-slate-500'} />
                  <span>{t('hero.badge')}</span>
                </div>
                
                <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold leading-tight ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {t('hero.title1')}
                  <br />
                  <span className={isDark ? 'text-slate-300' : 'text-slate-700'}>{t('hero.title2')}</span>
                  <br />
                  <span className={`bg-gradient-to-r bg-clip-text text-transparent ${
                    isDark 
                      ? 'from-slate-200 via-slate-300 to-slate-400' 
                      : 'from-slate-700 via-slate-800 to-slate-900'
                  }`}>
                    {t('hero.title3')}
                  </span>
                </h1>
                
                <p className={`text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto px-4 ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {t('hero.description')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Button 
                  onClick={() => scrollToSection('services')}
                  className={`w-full sm:w-auto px-8 py-4 text-lg font-semibold group transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600' 
                      : 'bg-slate-800 hover:bg-slate-700 text-white'
                  }`}
                >
                  {t('hero.services')}
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => scrollToSection('about')}
                  className={`w-full sm:w-auto px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 ${
                    isDark 
                      ? 'border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white' 
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {t('hero.about')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className={`w-6 h-10 border-2 rounded-full flex justify-center ${
          isDark ? 'border-slate-500' : 'border-slate-400'
        }`}>
          <div className={`w-1 h-3 rounded-full mt-2 animate-pulse ${
            isDark ? 'bg-slate-500' : 'bg-slate-400'
          }`}></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

