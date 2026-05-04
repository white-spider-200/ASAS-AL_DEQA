import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-20 font-sans selection:bg-primary selection:text-black">
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
        
        <div className="max-w-container-max mx-auto px-6 relative z-10 w-full py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase mb-8 block">{t('contact.hero_subtitle')}</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] font-serif uppercase">
              {t('contact.hero_title.main')} <span className="text-primary italic">{t('contact.hero_title.accent')}</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <div className="max-w-container-max mx-auto px-6 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          {/* Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-16"
          >
            <div className="space-y-8">
               <h2 className="text-4xl font-serif font-bold text-white uppercase tracking-tight">{t('contact.info_title')}</h2>
               <p className="text-white/40 text-xl font-light leading-relaxed max-w-xl">
                 {t('contact.info_desc')}
               </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-16">
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-primary/60">
                  <MapPin size={20} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t('contact.location')}</span>
                </div>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Financial District, Floor 10<br />
                  Amman, Jordan
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-primary/60">
                  <Phone size={20} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t('contact.phone')}</span>
                </div>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  +962 6 555 4433<br />
                  +962 79 000 0000
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-primary/60">
                  <Mail size={20} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t('contact.email')}</span>
                </div>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  advisory@asas-aldiqqa.com<br />
                  info@asas-aldiqqa.com
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 text-primary/60">
                  <Clock size={20} />
                  <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{t('contact.hours')}</span>
                </div>
                <p className="text-white/60 text-lg font-light leading-relaxed">
                  Sun - Thu: 9:00 AM - 5:00 PM<br />
                  Fri - Sat: Closed
                </p>
              </div>
            </div>

            <div className="p-10 bg-white/[0.02] border border-white/5 flex items-start gap-6">
               <ShieldCheck className="text-primary/60 shrink-0" size={24} />
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
            <div className="bg-[#0d0d0d] p-12 md:p-20 space-y-12">
              <div className="space-y-4">
                <h3 className="text-3xl font-serif font-bold text-white uppercase tracking-tight">{t('contact.form_title')}</h3>
                <p className="text-white/30 text-sm font-light">{t('contact.form_subtitle')}</p>
              </div>

              <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 gap-10">
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{t('contact.label_name')}</label>
                    <input 
                      type="text" 
                      className="w-full bg-[#0a0a0a] border border-white/10 px-8 py-5 rounded-sm focus:outline-none focus:border-primary/40 transition-all text-white placeholder:text-white/10 text-xs font-bold tracking-widest"
                      placeholder={t('contact.placeholder_name')}
                    />
                  </div>
                  <div className="space-y-4">
                    <label className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{t('contact.label_email')}</label>
                    <input 
                      type="email" 
                      className="w-full bg-[#0a0a0a] border border-white/10 px-8 py-5 rounded-sm focus:outline-none focus:border-primary/40 transition-all text-white placeholder:text-white/10 text-xs font-bold tracking-widest"
                      placeholder={t('contact.placeholder_email')}
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{t('contact.label_subject')}</label>
                  <select className="w-full bg-[#0a0a0a] border border-white/10 px-8 py-5 rounded-sm focus:outline-none focus:border-primary/40 transition-all text-white appearance-none cursor-pointer text-xs font-bold tracking-widest">
                    <option className="bg-[#0d0d0d]">{t('services.items.tax_compliance')}</option>
                    <option className="bg-[#0d0d0d]">{t('services.items.accounting')}</option>
                    <option className="bg-[#0d0d0d]">{t('services.items.tax_litigation')}</option>
                    <option className="bg-[#0d0d0d]">{t('services.items.erp')}</option>
                  </select>
                </div>

                <div className="space-y-4">
                  <label className="text-[10px] font-bold text-white/40 tracking-[0.3em] uppercase">{t('contact.label_message')}</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-[#0a0a0a] border border-white/10 px-8 py-5 rounded-sm focus:outline-none focus:border-primary/40 transition-all text-white resize-none placeholder:text-white/10 text-xs font-bold tracking-widest leading-relaxed"
                    placeholder={t('contact.placeholder_message')}
                  ></textarea>
                </div>

                <button className="w-full bg-primary text-black py-6 font-bold text-xs tracking-[0.4em] uppercase flex items-center justify-center gap-4 hover:bg-white transition-all group active:scale-[0.98]">
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

