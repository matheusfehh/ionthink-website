'use client';

import React from 'react';
import { ArrowRight, Code, Users, Palette, TrendingUp, Share2, Gamepad2, Cloud } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import ConstellationEffect from './ConstellationEffect';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const ServicesSection = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();

  const services = [
    {
      icon: Code,
      title: "Fábrica de Software",
      description: "Desenvolvimento de software personalizado com metodologias ágeis, desde MVPs até sistemas corporativos complexos.",
      features: ["Desenvolvimento Full-Stack", "Arquitetura Escalável", "Metodologias Ágeis"]
    },
    {
      icon: Users,
      title: "Consultoria",
      description: "Consultoria estratégica em tecnologia para otimizar processos, definir arquiteturas e orientar transformação digital.",
      features: ["Estratégia Digital", "Arquitetura de Sistemas", "Transformação Digital"]
    },
    {
      icon: Cloud,
      title: "SaaS/Produtos",
      description: "Criação de produtos SaaS escaláveis e plataformas digitais que geram receita recorrente para seu negócio.",
      features: ["Plataformas SaaS", "APIs Robustas", "Escalabilidade"]
    },
    {
      icon: Palette,
      title: "Webdesign",
      description: "Design de interfaces modernas e responsivas, focado na experiência do usuário e conversão de resultados.",
      features: ["UI/UX Design", "Design Responsivo", "Prototipagem"]
    },
    {
      icon: TrendingUp,
      title: "Marketing",
      description: "Estratégias de marketing digital integradas com tecnologia para maximizar ROI e crescimento sustentável.",
      features: ["Marketing Digital", "SEO/SEM", "Analytics"]
    },
    {
      icon: Share2,
      title: "Gestão de Redes Sociais",
      description: "Gestão completa de redes sociais com estratégias de conteúdo e automação para engajamento máximo.",
      features: ["Estratégia de Conteúdo", "Automação", "Community Management"]
    },
    {
      icon: Gamepad2,
      title: "Game Dev",
      description: "Desenvolvimento de jogos e aplicações interativas usando tecnologias modernas e engines especializadas.",
      features: ["Unity/Unreal Engine", "Jogos Mobile", "Realidade Virtual"]
    }
  ];

  return (
    <section id="services" className={`py-20 lg:py-32 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800' 
        : 'bg-gradient-to-br from-slate-50 via-gray-50 to-slate-100'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t('services.title')}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-2xl transition-all duration-500 hover:scale-105 h-full flex flex-col ${
                isDark 
                  ? 'border-slate-700 bg-slate-800/80 backdrop-blur-sm hover:bg-slate-800' 
                  : 'border-slate-200 bg-white/80 backdrop-blur-sm hover:bg-white'
              }`}
            >
              <CardContent className="p-6 lg:p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-br from-white to-slate-100' 
                      : 'bg-gradient-to-br from-slate-800 to-slate-600'
                  }`}>
                    <service.icon size={28} className={isDark ? 'text-slate-800' : 'text-white'} />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className={`text-xl font-bold mb-3 group-hover:transition-colors ${
                    isDark ? 'text-white group-hover:text-slate-200' : 'text-slate-900 group-hover:text-slate-800'
                  }`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm lg:text-base leading-relaxed mb-4 ${
                    isDark ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className={`text-xs lg:text-sm flex items-center ${
                        isDark ? 'text-slate-500' : 'text-slate-500'
                      }`}>
                        <div className={`w-1.5 h-1.5 rounded-full mr-2 ${
                          isDark ? 'bg-slate-600' : 'bg-slate-400'
                        }`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button 
                  variant="outline" 
                  className={`w-full group/btn transition-all duration-300 ${
                    isDark 
                      ? 'border-slate-600 text-slate-300 hover:bg-slate-700 hover:border-slate-500 hover:text-white' 
                      : 'border-slate-300 text-slate-700 hover:bg-slate-50 hover:border-slate-400'
                  }`}
                >
                  {t('services.learnMore')}
                  <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section with Constellation Effect */}
        <div className="mt-16 lg:mt-20 text-center">
          <div className={`relative rounded-2xl p-8 lg:p-12 overflow-hidden ${
            isDark 
              ? 'bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600' 
              : 'bg-gradient-to-r from-slate-900 to-slate-800'
          }`}>
            <ConstellationEffect />
            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                {t('services.cta.title')}
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                {t('services.cta.description')}
              </p>
              <Button 
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-white !text-slate-900 hover:bg-slate-800 hover:!text-white px-8 py-4 text-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                {t('services.cta.button')}
                <ArrowRight size={20} className="ml-2 text-slate-900 group-hover:text-white transition-colors" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

