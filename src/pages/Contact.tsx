import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { SEO } from '../components/common/SEO';
import { Logo } from '../components/ui/Logo';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-20 font-sans selection:bg-primary selection:text-black">
      <SEO titleKey="seo.contact_title" descriptionKey="seo.contact_desc" />
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop" 
            alt="Minimalist Architecture" 
            className="w-full h-full object-cover grayscale opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        
        <div className="max-w-container-max mx-auto px-6 relative z-10 w-full py-16 md:py-20 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase mb-6 md:mb-8 block">{t('contact.hero_subtitle')}</span>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] font-serif uppercase">
              {t('contact.hero_title.main')} <span className="text-primary italic">{t('contact.hero_title.accent')}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-6 py-20 md:py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03] pointer-events-none select-none">
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=1000&auto=format&fit=crop" 
            alt="Map Overlay" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-12 md:space-y-16"
          >
            <div className="flex items-center gap-6 mb-12">
              <Logo showText={false} className="h-16 w-16" />
              <div className="h-12 w-px bg-primary/20 hidden sm:block" />
              <div className="hidden sm:block">
                <div className="text-primary text-[10px] font-bold tracking-[0.3em] uppercase">{t('about.managed_by.main')}</div>
                <div className="text-white text-xs font-bold tracking-widest uppercase">{t('about.managed_by.accent')}</div>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
               <h2 className="text-3xl md:text-4xl font-serif font-bold text-white uppercase tracking-tight">{t('contact.info_title')}</h2>
               <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed max-w-xl">
                 {t('contact.info_desc')}
               </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 md:gap-16">
              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 text-primary/60">
                  <MapPin size={18} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t('contact.location')}</span>
                </div>
                <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                  Financial District, Floor 10<br />
                  Amman, Jordan
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 text-primary/60">
                  <Phone size={18} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t('contact.phone')}</span>
                </div>
                <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                  +962 6 555 4433<br />
                  +962 79 000 0000
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 text-primary/60">
                  <Mail size={18} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t('contact.email')}</span>
                </div>
                <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                  advisory@asas-aldiqqa.com<br />
                  info@asas-aldiqqa.com
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 text-primary/60">
                  <Clock size={18} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t('contact.hours')}</span>
                </div>
                <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
                  Sun - Thu: 9:00 AM - 5:00 PM<br />
                  Fri - Sat: Closed
                </p>
              </div>
            </div>

            <div className="p-8 md:p-10 bg-white/[0.02] border border-white/5 flex items-start gap-6">
               <ShieldCheck className="text-primary/60 shrink-0" size={20} />
               <p className="text-[10px] text-white/30 leading-relaxed font-bold tracking-[0.2em] uppercase">
                 {t('contact.confidentiality')}
               </p>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="p-px bg-white/10 rounded-sm"
          >
            <div className="bg-[#0d0d0d] p-8 md:p-20 space-y-10 md:space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-white uppercase tracking-tight">{t('contact.form_title')}</h3>
                <p className="text-white/30 text-xs md:text-sm font-light">{t('contact.form_subtitle')}</p>
              </div>

              <form className="space-y-8 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-8 md:gap-10">
                  <div className="space-y-4">
                    <label htmlFor="contact-name" className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{t('contact.label_name')}</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      className="w-full bg-[#0a0a0a] border border-white/10 px-6 md:px-8 py-4 md:py-5 rounded-sm focus:outline-none focus:border-primary/40 transition-all text-white placeholder:text-white/10 text-[10px] md:text-xs font-bold tracking-widest"
                      placeholder={t('contact.placeholder_name')}
                      aria-label={t('contact.label_name')}
                    />
                  </div>
                  <div className="space-y-4">
                    <label htmlFor="contact-email" className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{t('contact.label_email')}</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      className="w-full bg-[#0a0a0a] border border-white/10 px-6 md:px-8 py-4 md:py-5 rounded-sm focus:outline-none focus:border-primary/40 transition-all text-white placeholder:text-white/10 text-[10px] md:text-xs font-bold tracking-widest"
                      placeholder={t('contact.placeholder_email')}
                      aria-label={t('contact.label_email')}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label htmlFor="contact-subject" className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{t('contact.label_subject')}</label>
                  <select 
                    id="contact-subject"
                    className="w-full bg-[#0a0a0a] border border-white/10 px-6 md:px-8 py-4 md:py-5 rounded-sm focus:outline-none focus:border-primary/40 transition-all text-white appearance-none cursor-pointer text-[10px] md:text-xs font-bold tracking-widest"
                    aria-label={t('contact.label_subject')}
                  >
                    <option className="bg-[#0d0d0d]">{t('services.items.tax_compliance')}</option>
                    <option className="bg-[#0d0d0d]">{t('services.items.accounting')}</option>
                    <option className="bg-[#0d0d0d]">{t('services.items.tax_litigation')}</option>
                    <option className="bg-[#0d0d0d]">{t('services.items.erp')}</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label htmlFor="contact-message" className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{t('contact.label_message')}</label>
                  <textarea 
                    id="contact-message"
                    rows={4}
                    className="w-full bg-[#0a0a0a] border border-white/10 px-6 md:px-8 py-4 md:py-5 rounded-sm focus:outline-none focus:border-primary/40 transition-all text-white resize-none placeholder:text-white/10 text-[10px] md:text-xs font-bold tracking-widest leading-relaxed"
                    placeholder={t('contact.placeholder_message')}
                    aria-label={t('contact.label_message')}
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary text-black py-5 md:py-6 font-bold text-[10px] md:text-xs tracking-[0.4em] uppercase flex items-center justify-center gap-4 hover:bg-white transition-all group active:scale-[0.98]"
                  aria-label={t('contact.button_send')}
                >
                  {t('contact.button_send')}
                  <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

