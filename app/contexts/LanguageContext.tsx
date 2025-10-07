'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface LanguageContextType {
  language: string;
  changeLanguage: (lang: string) => void;
  t: (key: string) => string;
  languages: Array<{ code: string; label: string }>;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations: Record<string, Record<string, string>> = {
  'pt-br': {
    // Header
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.contactUs': 'Fale Conosco',
    
    // Hero Section
    'hero.badge': 'Inovação e Tecnologia',
    'hero.title1': 'Transformando',
    'hero.title2': 'Ideias em',
    'hero.title3': 'Realidade Digital',
    'hero.description': 'Na Ion Think, desenvolvemos soluções tecnológicas inovadoras que impulsionam o crescimento do seu negócio. Conectamos estratégia, design e tecnologia para criar experiências extraordinárias.',
    'hero.services': 'Nossos Serviços',
    'hero.about': 'Sobre Nós',
    
    // About Section
    'about.badge': 'Sobre a Ion Think',
    'about.title': 'Quem Somos',
    'about.description': 'Somos uma empresa de tecnologia especializada em desenvolver soluções digitais inovadoras. Nossa equipe combina expertise técnica com visão estratégica para entregar resultados excepcionais que transformam negócios e criam valor sustentável.',
    'about.mission': 'Missão',
    'about.vision': 'Visão',
    'about.values': 'Valores',
    'about.missionText': 'Transformar ideias inovadoras em soluções tecnológicas que geram valor real para nossos clientes, impulsionando o crescimento e a eficiência dos negócios através da excelência em desenvolvimento de software.',
    'about.visionText': 'Ser reconhecida como a principal referência em soluções tecnológicas inovadoras, conectando estratégia, design e tecnologia para criar experiências digitais extraordinárias que transformam mercados.',
    'about.valuesText': 'Inovação constante, excelência técnica, transparência nas relações, compromisso com resultados e paixão por tecnologia. Acreditamos que a colaboração e a criatividade são fundamentais para o sucesso.',
    'about.projects': 'Projetos Entregues',
    'about.satisfaction': 'Satisfação do Cliente',
    'about.support': 'Suporte Técnico',
    'about.experience': 'Anos de Experiência',
    
    // Services Section
    'services.title': 'Conheça tudo o que podemos fazer',
    'services.description': 'Oferecemos uma gama completa de serviços tecnológicos para transformar sua visão em realidade. Cada solução é pensada estrategicamente para gerar resultados concretos para seu negócio.',
    'services.learnMore': 'Saiba mais',
    'services.cta.title': 'Pronto para transformar sua ideia em realidade?',
    'services.cta.description': 'Entre em contato conosco e descubra como podemos impulsionar seu negócio com nossas soluções tecnológicas.',
    'services.cta.button': 'Começar Projeto',
    
    // Contact Section
    'contact.title': 'Vamos Conversar',
    'contact.description': 'Pronto para transformar sua ideia em realidade? Entre em contato conosco e descubra como podemos ajudar seu negócio a crescer através da tecnologia.',
    'contact.form.title': 'Envie sua mensagem',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.company': 'Empresa',
    'contact.form.message': 'Mensagem',
    'contact.form.send': 'Enviar Mensagem',
    'contact.form.success': 'Mensagem enviada!',
    'contact.form.successDesc': 'Obrigado pelo contato. Responderemos em breve.',
    'contact.info.title': 'Entre em contato',
    'contact.info.description': 'Estamos sempre disponíveis para discutir novas oportunidades e projetos. Entre em contato através dos canais abaixo ou utilize o formulário ao lado.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Telefone',
    'contact.info.location': 'Localização',
    'contact.hours.title': 'Horário de Atendimento',
    'contact.hours.weekdays': 'Segunda - Sexta:',
    'contact.hours.saturday': 'Sábado:',
    'contact.hours.sunday': 'Domingo:',
    'contact.hours.closed': 'Fechado',
    
    // Footer
    'footer.description': 'Transformamos ideias em soluções tecnológicas inovadoras. Conectamos estratégia, design e tecnologia para criar experiências extraordinárias.',
    'footer.quickLinks': 'Links Úteis',
    'footer.services': 'Nossos Serviços',
    'footer.contact': 'Contato Rápido',
    'footer.rights': '© 2025 Ion Think. Todos os direitos reservados.',
    'footer.privacy': 'Política de Privacidade',
    'footer.terms': 'Termos de Uso'
  },
  
  'en': {
    // Header
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.contactUs': 'Contact Us',
    
    // Hero Section
    'hero.badge': 'Innovation and Technology',
    'hero.title1': 'Transforming',
    'hero.title2': 'Ideas into',
    'hero.title3': 'Digital Reality',
    'hero.description': 'At Ion Think, we develop innovative technological solutions that drive your business growth. We connect strategy, design and technology to create extraordinary experiences.',
    'hero.services': 'Our Services',
    'hero.about': 'About Us',
    
    // About Section
    'about.badge': 'About Ion Think',
    'about.title': 'Who We Are',
    'about.description': 'We are a technology company specialized in developing innovative digital solutions. Our team combines technical expertise with strategic vision to deliver exceptional results that transform businesses and create sustainable value.',
    'about.mission': 'Mission',
    'about.vision': 'Vision',
    'about.values': 'Values',
    'about.missionText': 'Transform innovative ideas into technological solutions that generate real value for our clients, driving business growth and efficiency through excellence in software development.',
    'about.visionText': 'To be recognized as the main reference in innovative technological solutions, connecting strategy, design and technology to create extraordinary digital experiences that transform markets.',
    'about.valuesText': 'Constant innovation, technical excellence, transparency in relationships, commitment to results and passion for technology. We believe that collaboration and creativity are fundamental to success.',
    'about.projects': 'Delivered Projects',
    'about.satisfaction': 'Client Satisfaction',
    'about.support': 'Technical Support',
    'about.experience': 'Years of Experience',
    
    // Services Section
    'services.title': 'Discover everything we can do',
    'services.description': 'We offer a complete range of technological services to transform your vision into reality. Each solution is strategically designed to generate concrete results for your business.',
    'services.learnMore': 'Learn more',
    'services.cta.title': 'Ready to transform your idea into reality?',
    'services.cta.description': 'Contact us and discover how we can boost your business with our technological solutions.',
    'services.cta.button': 'Start Project',
    
    // Contact Section
    'contact.title': 'Let\'s Talk',
    'contact.description': 'Ready to transform your idea into reality? Contact us and discover how we can help your business grow through technology.',
    'contact.form.title': 'Send your message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.company': 'Company',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.form.success': 'Message sent!',
    'contact.form.successDesc': 'Thank you for contacting us. We will respond shortly.',
    'contact.info.title': 'Get in touch',
    'contact.info.description': 'We are always available to discuss new opportunities and projects. Contact us through the channels below or use the form beside.',
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.location': 'Location',
    'contact.hours.title': 'Business Hours',
    'contact.hours.weekdays': 'Monday - Friday:',
    'contact.hours.saturday': 'Saturday:',
    'contact.hours.sunday': 'Sunday:',
    'contact.hours.closed': 'Closed',
    
    // Footer
    'footer.description': 'We transform ideas into innovative technological solutions. We connect strategy, design and technology to create extraordinary experiences.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Quick Contact',
    'footer.rights': '© 2025 Ion Think. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use'
  },
  
  'es': {
    'nav.about': 'Acerca',
    'nav.services': 'Servicios',
    'nav.contact': 'Contacto',
    'nav.contactUs': 'Contáctanos',
    'hero.badge': 'Innovación y Tecnología',
    'hero.title1': 'Transformando',
    'hero.title2': 'Ideas en',
    'hero.title3': 'Realidad Digital',
    'hero.description': 'En Ion Think, desarrollamos soluciones tecnológicas innovadoras que impulsan el crecimiento de su negocio. Conectamos estrategia, diseño y tecnología para crear experiencias extraordinarias.',
    'hero.services': 'Nuestros Servicios',
    'hero.about': 'Acerca de Nosotros',
    'services.title': 'Descubre todo lo que podemos hacer',
    'services.cta.button': 'Comenzar Proyecto',
    'services.learnMore': 'Saber más',
    'contact.title': 'Hablemos',
    'contact.form.send': 'Enviar Mensaje',
    'contact.hours.closed': 'Cerrado'
  },
  
  'de': {
    'nav.about': 'Über',
    'nav.services': 'Dienstleistungen',
    'nav.contact': 'Kontakt',
    'nav.contactUs': 'Kontaktieren Sie uns',
    'hero.badge': 'Innovation und Technologie',
    'hero.title1': 'Verwandlung',
    'hero.title2': 'Ideen in',
    'hero.title3': 'Digitale Realität',
    'hero.services': 'Unsere Dienstleistungen',
    'hero.about': 'Über uns',
    'services.title': 'Entdecken Sie alles, was wir tun können',
    'services.cta.button': 'Projekt starten',
    'services.learnMore': 'Mehr erfahren',
    'contact.title': 'Lass uns reden',
    'contact.form.send': 'Nachricht senden',
    'contact.hours.closed': 'Geschlossen'
  },
  
  'jp': {
    'nav.about': '私たちについて',
    'nav.services': 'サービス',
    'nav.contact': 'お問い合わせ',
    'nav.contactUs': 'お問い合わせ',
    'hero.badge': 'イノベーションとテクノロジー',
    'hero.title1': '変換',
    'hero.title2': 'アイデアを',
    'hero.title3': 'デジタル現実へ',
    'hero.services': '私たちのサービス',
    'hero.about': '私たちについて',
    'services.title': '私たちができることをすべて発見してください',
    'services.cta.button': 'プロジェクトを開始',
    'services.learnMore': 'もっと詳しく',
    'contact.title': '話しましょう',
    'contact.form.send': 'メッセージを送信',
    'contact.hours.closed': '閉店'
  }
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<string>('pt-br');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      if (savedLanguage) {
        setLanguage(savedLanguage);
      }
    }
  }, []);

  const changeLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    if (mounted && typeof window !== 'undefined') {
      localStorage.setItem('language', newLanguage);
    }
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || translations['pt-br'][key] || key;
  };

  const value = {
    language,
    changeLanguage,
    t,
    languages: [
      { code: 'pt-br', label: 'PT-BR' },
      { code: 'en', label: 'EN' },
      { code: 'es', label: 'ES' },
      { code: 'de', label: 'DE' },
      { code: 'jp', label: 'JP' }
    ]
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

