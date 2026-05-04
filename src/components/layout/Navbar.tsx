import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronRight, Languages } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTranslation } from 'react-i18next';

import { Logo } from '../ui/Logo';
import { LimelightNav } from '../ui/limelight-nav';

export const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'services', label: t('nav.services'), path: '/services' },
    { id: 'about', label: t('nav.about'), path: '/about' },
    { id: 'contact', label: t('nav.contact'), path: '/contact' },
  ];

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en';
    i18n.changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b',
        scrolled 
          ? 'bg-background/80 backdrop-blur-md py-4 border-outline/10' 
          : 'bg-transparent py-6 border-transparent'
      )}
    >
      <div className="max-w-container-max mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tighter text-primary uppercase">Asas Al-Deqa</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <LimelightNav 
            items={navLinks} 
            className="border-none bg-transparent"
            itemContainerClassName="hover:text-primary transition-all duration-300 px-3"
            activeClassName="text-primary opacity-100"
            inactiveClassName="text-on-surface/60 opacity-100 font-bold"
          />
          
          {/* Language Toggle */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-primary hover:text-white transition-colors uppercase ml-4"
          >
            <Languages size={14} />
            {i18n.language === 'en' ? 'العربية' : 'EN'}
          </button>

          <Link
            to="/contact"
            className="bg-primary text-on-primary px-8 py-3 text-[12px] font-bold hover:bg-primary-container transition-all tracking-[0.2em] uppercase rounded-sm"
          >
            {t('services.cta_button')}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-[10px] font-bold tracking-widest text-primary uppercase px-2"
          >
            <Languages size={16} />
            {i18n.language === 'en' ? 'AR' : 'EN'}
          </button>
          <button
            className="text-on-surface"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 top-[73px] bg-background z-40 md:hidden flex flex-col p-8 gap-8"
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  'text-2xl font-noto-serif font-medium border-b border-outline/10 pb-4 flex justify-between items-center',
                  location.pathname === link.path ? 'text-primary' : 'text-on-surface'
                )}
              >
                {link.label}
                <ChevronRight className={cn(i18n.language === 'ar' ? 'rotate-180' : '', "text-primary")} />
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-primary text-on-primary text-center py-4 text-lg font-bold"
            >
              {t('services.cta_button')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
