'use client';

import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const quickLinks = [
    { nameKey: 'nav.about', href: '#about' },
    { nameKey: 'nav.services', href: '#services' },
    { nameKey: 'nav.contact', href: '#contact' },
    { name: 'Fábrica de Software', href: '#' },
    { name: 'Consultoria', href: '#' },
    { name: 'SaaS/Produtos', href: '#' }
  ];

  const services = [
    { name: 'Desenvolvimento Web', href: '#' },
    { name: 'Aplicativos Mobile', href: '#' },
    { name: 'UI/UX Design', href: '#' },
    { name: 'Marketing Digital', href: '#' },
    { name: 'Game Development', href: '#' },
    { name: 'Cloud Solutions', href: '#' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  const scrollToSection = (id: string) => {
    if (id.startsWith('#')) {
      const element = document.getElementById(id.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className={`${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white' 
        : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-white to-slate-200 rounded-lg flex items-center justify-center">
                  <span className="text-slate-800 font-bold text-sm">IT</span>
                </div>
                <span className="text-xl font-bold">Ion Think</span>
              </div>
              <p className="text-slate-300 leading-relaxed text-sm lg:text-base">
                {t('footer.description')}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-slate-800 hover:bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-slate-700"
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold">{t('footer.quickLinks')}</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-slate-300 hover:text-white transition-colors duration-200 text-left text-sm lg:text-base"
                    >
                      {link.nameKey ? t(link.nameKey) : link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold">{t('footer.services')}</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="text-slate-300 hover:text-white transition-colors duration-200 text-sm lg:text-base"
                    >
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-lg font-bold">{t('footer.contact')}</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Mail size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-xs lg:text-sm">{t('contact.info.email')}</p>
                    <a 
                      href="mailto:contato@ionthink.com"
                      className="text-white hover:text-slate-200 transition-colors duration-200 text-sm lg:text-base"
                    >
                      contato@ionthink.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Phone size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-xs lg:text-sm">{t('contact.info.phone')}</p>
                    <a 
                      href="tel:+5511999999999"
                      className="text-white hover:text-slate-200 transition-colors duration-200 text-sm lg:text-base"
                    >
                      +55 (11) 9999-9999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin size={18} className="text-slate-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-slate-300 text-xs lg:text-sm">{t('contact.info.location')}</p>
                    <p className="text-white text-sm lg:text-base">São Paulo, SP - Brasil</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-slate-700 py-6 lg:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-slate-300">
              <Zap size={16} />
              <span className="text-xs lg:text-sm">
                {t('footer.rights')}
              </span>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-6 text-xs lg:text-sm text-slate-300">
              <a href="#" className="hover:text-white transition-colors duration-200">
                {t('footer.privacy')}
              </a>
              <a href="#" className="hover:text-white transition-colors duration-200">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

