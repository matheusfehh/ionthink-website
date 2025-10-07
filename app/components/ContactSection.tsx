'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

const ContactSection = () => {
  const { isDark } = useTheme();
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      titleKey: "contact.info.email",
      value: "contato@ionthink.com",
      link: "mailto:contato@ionthink.com"
    },
    {
      icon: Phone,
      titleKey: "contact.info.phone",
      value: "+55 (11) 9999-9999",
      link: "tel:+5511999999999"
    },
    {
      icon: MapPin,
      titleKey: "contact.info.location",
      value: "São Paulo, SP - Brasil",
      link: "#"
    }
  ];

  return (
    <section id="contact" className={`py-20 lg:py-32 ${
      isDark ? 'bg-slate-800' : 'bg-white'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            {t('contact.title')}
          </h2>
          <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}>
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <Card className={`shadow-lg ${
            isDark ? 'border-slate-700 bg-slate-900/80 backdrop-blur-sm' : 'border-slate-200 bg-white'
          }`}>
            <CardContent className="p-6 lg:p-8">
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {t('contact.form.title')}
              </h3>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                  <h4 className={`text-xl font-semibold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {t('contact.form.success')}
                  </h4>
                  <p className={isDark ? 'text-slate-400' : 'text-slate-600'}>
                    {t('contact.form.successDesc')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                        {t('contact.form.name')} *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder={t('contact.form.name')}
                        required
                        className={`transition-colors ${
                          isDark 
                            ? 'border-slate-600 bg-slate-800 text-white focus:border-slate-500 focus:ring-slate-500' 
                            : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                        {t('contact.form.email')} *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="seu@email.com"
                        required
                        className={`transition-colors ${
                          isDark 
                            ? 'border-slate-600 bg-slate-800 text-white focus:border-slate-500 focus:ring-slate-500' 
                            : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      {t('contact.form.company')}
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder={t('contact.form.company')}
                      className={`transition-colors ${
                        isDark 
                          ? 'border-slate-600 bg-slate-800 text-white focus:border-slate-500 focus:ring-slate-500' 
                          : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
                      }`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className={isDark ? 'text-slate-300' : 'text-slate-700'}>
                      {t('contact.form.message')} *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Conte-nos sobre seu projeto..."
                      rows={5}
                      required
                      className={`transition-colors ${
                        isDark 
                          ? 'border-slate-600 bg-slate-800 text-white focus:border-slate-500 focus:ring-slate-500' 
                          : 'border-slate-300 focus:border-slate-500 focus:ring-slate-500'
                      }`}
                    />
                  </div>

                  <Button 
                    type="submit"
                    className={`w-full py-3 text-lg font-semibold group transition-all duration-300 hover:scale-105 ${
                      isDark 
                        ? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600' 
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    {t('contact.form.send')}
                    <Send size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className={`text-2xl font-bold mb-6 ${
                isDark ? 'text-white' : 'text-slate-900'
              }`}>
                {t('contact.info.title')}
              </h3>
              <p className={`text-lg leading-relaxed mb-8 ${
                isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
                {t('contact.info.description')}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className={`hover:shadow-lg transition-shadow duration-300 ${
                  isDark ? 'border-slate-700 bg-slate-900/80 backdrop-blur-sm' : 'border-slate-200 bg-white'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isDark 
                          ? 'bg-gradient-to-br from-white to-slate-100' 
                          : 'bg-gradient-to-br from-slate-800 to-slate-600'
                      }`}>
                        <info.icon size={24} className={isDark ? 'text-slate-800' : 'text-white'} />
                      </div>
                      <div>
                        <h4 className={`font-semibold mb-1 ${
                          isDark ? 'text-white' : 'text-slate-900'
                        }`}>
                          {t(info.titleKey)}
                        </h4>
                        <a 
                          href={info.link}
                          className={`transition-colors duration-200 ${
                            isDark ? 'text-slate-400 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Working Hours */}
            <Card className={`${
              isDark 
                ? 'border-slate-700 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm' 
                : 'border-slate-200 bg-gradient-to-br from-slate-50 to-white'
            }`}>
              <CardContent className="p-6">
                <h4 className={`font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-slate-900'
                }`}>
                  {t('contact.hours.title')}
                </h4>
                <div className={`space-y-2 text-sm ${
                  isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.weekdays')}</span>
                    <span>09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.saturday')}</span>
                    <span>09:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('contact.hours.sunday')}</span>
                    <span>{t('contact.hours.closed')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

