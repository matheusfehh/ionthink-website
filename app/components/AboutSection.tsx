'use client';

import React from 'react';
import { Target, Eye, Heart, Zap } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const AboutSection = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const values = [
    {
      icon: Target,
      titleKey: "about.mission",
      descKey: "about.missionText"
    },
    {
      icon: Eye,
      titleKey: "about.vision", 
      descKey: "about.visionText"
    },
    {
      icon: Heart,
      titleKey: "about.values",
      descKey: "about.valuesText"
    }
  ];

  return (
    <section id="about" className={`py-20 lg:py-32 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <div className={`inline-flex items-center space-x-2 rounded-full px-4 py-2 text-sm font-medium mb-6 ${
            isDark ? 'bg-slate-800/70 text-slate-300 border border-slate-700/50' : 'bg-slate-100/80 text-slate-600 border border-slate-200/50'
          }`}>
            <Zap size={16} />
            <span>{t('about.badge')}</span>
          </div>
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t('about.title')}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t('about.description')}
          </p>
        </div>

        {/* Company Values */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-slate-700 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm hover:bg-slate-800' 
                  : 'border-slate-200 bg-gradient-to-br from-white to-slate-50/50 hover:bg-white'
              }`}
            >
              <CardContent className="p-6 lg:p-8 text-center">
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-br from-white to-slate-100' 
                      : 'bg-gradient-to-br from-slate-800 to-slate-600'
                  }`}>
                    <value.icon size={32} className={isDark ? 'text-slate-800' : 'text-white'} />
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {t(value.titleKey)}
                </h3>
                <p className={`leading-relaxed ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {t(value.descKey)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 lg:mt-32">
          <div className={`rounded-2xl p-6 lg:p-12 ${
            isDark 
              ? 'bg-gradient-to-r from-slate-800 to-slate-700' 
              : 'bg-gradient-to-r from-slate-900 to-slate-800'
          }`}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 text-center">
              <div className="space-y-2">
                <div className="text-2xl lg:text-4xl font-bold text-white">50+</div>
                <div className="text-slate-300 text-xs lg:text-base">{t('about.projects')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl lg:text-4xl font-bold text-white">95%</div>
                <div className="text-slate-300 text-xs lg:text-base">{t('about.satisfaction')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl lg:text-4xl font-bold text-white">24/7</div>
                <div className="text-slate-300 text-xs lg:text-base">{t('about.support')}</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl lg:text-4xl font-bold text-white">5+</div>
                <div className="text-slate-300 text-xs lg:text-base">{t('about.experience')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

