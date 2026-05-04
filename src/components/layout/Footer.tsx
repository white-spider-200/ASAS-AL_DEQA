import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
import { useTranslation } from 'react-i18next';

import { Logo } from '../ui/Logo';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-20 pb-10">
      <div className="max-w-container-max mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link to="/" className="mb-6 block">
              <span className="text-xl font-bold tracking-widest text-primary uppercase font-serif">Asas Al-Deqa</span>
            </Link>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8 font-light italic">
              {t('footer.desc')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-white/50">
            <Link to="/about" className="hover:text-primary transition-colors">{t('nav.about')}</Link>
            <Link to="/services" className="hover:text-primary transition-colors">{t('nav.services')}</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">{t('nav.contact')}</Link>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-4 text-xs font-bold tracking-widest uppercase text-white/50">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link to="/regulations" className="hover:text-primary transition-colors">Financial Regulations</Link>
            <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">
          <p>{t('footer.rights')}</p>
          <div className="flex gap-4">
             <span>{t('footer.tagline')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
