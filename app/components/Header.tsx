'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const { language, changeLanguage, t, languages } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDark 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg border-b border-slate-800' 
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-200'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
              isDark ? 'bg-gradient-to-br from-white to-slate-100' : 'bg-gradient-to-br from-slate-800 to-slate-600'
            }`}>
              <span className={`font-bold text-sm ${isDark ? 'text-slate-800' : 'text-white'}`}>IT</span>
            </div>
            <span className={`text-xl font-bold ${isDark ? 'text-white' : 'text-slate-900'}`}>Ion Think</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className={`transition-colors duration-200 font-medium ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className={`transition-colors duration-200 font-medium ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className={`transition-colors duration-200 font-medium ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {t('nav.contact')}
            </button>
          </nav>

          {/* Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Language Selector */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className={`transition-colors duration-200 ${
                    isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {currentLanguage?.label}
                  <ChevronDown size={16} className="ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent 
                align="end" 
                className={isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}
              >
                {languages.map((lang) => (
                  <DropdownMenuItem 
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`cursor-pointer ${
                      isDark ? 'text-slate-300 hover:text-white hover:bg-slate-700' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    } ${language === lang.code ? (isDark ? 'bg-slate-700' : 'bg-slate-100') : ''}`}
                  >
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className={`transition-colors duration-200 ${
                isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </Button>

            {/* CTA Button */}
            <Button 
              onClick={() => scrollToSection('contact')}
              className={`transition-all duration-200 hover:scale-105 font-semibold ${
                isDark 
                  ? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white'
              }`}
            >
              {t('nav.contactUs')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            {/* Mobile Theme Toggle */}
            <Button
              onClick={toggleTheme}
              variant="ghost"
              size="sm"
              className={`transition-colors duration-200 ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </Button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-colors duration-200 ${
                isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
              }`}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className={`lg:hidden absolute top-full left-0 right-0 shadow-lg border-t ${
            isDark 
              ? 'bg-slate-900/95 backdrop-blur-md border-slate-800' 
              : 'bg-white/95 backdrop-blur-md border-slate-200'
          }`}>
            <nav className="flex flex-col p-4 space-y-4">
              <button 
                onClick={() => scrollToSection('about')}
                className={`transition-colors duration-200 text-left font-medium ${
                  isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t('nav.about')}
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className={`transition-colors duration-200 text-left font-medium ${
                  isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t('nav.services')}
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className={`transition-colors duration-200 text-left font-medium ${
                  isDark ? 'text-slate-300 hover:text-white' : 'text-slate-700 hover:text-slate-900'
                }`}
              >
                {t('nav.contact')}
              </button>
              
              {/* Mobile Language Selector */}
              <div className={`border-t pt-4 mt-4 ${isDark ? 'border-slate-700' : 'border-slate-300'}`}>
                <div className="grid grid-cols-5 gap-2">
                  {languages.map((lang) => (
                    <Button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      variant={language === lang.code ? "default" : "ghost"}
                      size="sm"
                      className={`text-xs ${
                        language === lang.code
                          ? isDark ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-900'
                          : isDark ? 'text-slate-300 hover:text-white hover:bg-slate-800' : 'text-slate-700 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {lang.label}
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => scrollToSection('contact')}
                className={`transition-all duration-200 w-full font-semibold ${
                  isDark 
                    ? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600' 
                    : 'bg-slate-800 hover:bg-slate-700 text-white'
                }`}
              >
                {t('nav.contactUs')}
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

