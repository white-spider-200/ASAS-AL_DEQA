import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldAlert, BarChart3, Landmark, PieChart, Briefcase, ChevronRight, Target, ClipboardCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';
import { SEO } from '../components/common/SEO';

export const Services = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const servicesList = [
    {
      icon: <BarChart3 className="text-primary" size={32} />,
      title: t('services.items.tax_compliance'),
      desc: t('services.items.tax_compliance_desc'),
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <Landmark className="text-primary" size={32} />,
      title: t('services.items.accounting'),
      desc: t('services.items.accounting_desc'),
      image: "https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <ShieldAlert className="text-primary" size={32} />,
      title: t('services.items.tax_management'),
      desc: t('services.items.tax_management_desc'),
      image: "https://images.unsplash.com/photo-1507679799987-c7377ec48696?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: t('services.items.tax_litigation'),
      desc: t('services.items.tax_litigation_desc'),
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <ClipboardCheck className="text-primary" size={32} />,
      title: t('services.items.documentation'),
      desc: t('services.items.documentation_desc'),
      image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: t('services.items.inventory'),
      desc: t('services.items.inventory_desc'),
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=500&auto=format&fit=crop"
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: t('services.items.erp'),
      desc: t('services.items.erp_desc'),
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-20 font-sans selection:bg-primary selection:text-black">
      <SEO titleKey="seo.services_title" descriptionKey="seo.services_desc" />
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
            alt="Modern Office" 
            className="w-full h-full object-cover grayscale opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </div>
        
        <div className="max-w-container-max mx-auto px-6 relative z-10 w-full py-16 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase mb-6 md:mb-8 block">{t('nav.services')}</span>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] font-serif uppercase">
              {t('services.title.main')} <span className="text-primary italic">{t('services.title.accent')}</span>
            </h1>
            <p className="text-white/40 text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 px-6">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {servicesList.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 md:p-16 bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-all duration-500 flex flex-col items-start relative overflow-hidden"
              >
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700">
                  <img 
                    src={s.image} 
                    alt={s.title} 
                    className="w-full h-full object-cover grayscale scale-110 group-hover:scale-100 transition-transform duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                </div>
                <div className="relative z-10 mb-8 md:mb-12 text-primary/60 group-hover:text-primary transition-colors duration-500 scale-90 md:scale-100 origin-left">
                  {s.icon}
                </div>
                <h3 className="relative z-10 text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 uppercase tracking-tight font-serif group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="relative z-10 text-white/30 leading-relaxed text-base md:text-lg font-light mb-8 md:mb-12 min-h-0 md:min-h-[80px]">
                  {s.desc}
                </p>
                <Link to="/contact" className="relative z-10 mt-auto flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] text-primary hover:gap-6 transition-all uppercase">
                  {t('services.cta_button')} <ChevronRight className={cn(isRtl ? "rotate-180" : "")} size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-32 bg-[#000] px-6 border-t border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop" 
            alt="Business Strategy" 
            className="w-full h-full object-cover grayscale opacity-[0.03]"
          />
        </div>
        <div className="max-w-container-max mx-auto relative z-10">
          <div className="text-center mb-16 md:mb-32 space-y-4">
             <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{t('services.title.main')} {t('services.title.accent')}</span>
             <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white uppercase font-serif">{t('about.why_title')}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { step: '01', title: t('about.pillars.commitment'), desc: t('about.pillars.commitment_desc'), icon: ClipboardCheck },
              { step: '02', title: t('about.pillars.legality'), desc: t('about.pillars.legality_desc'), icon: Target },
              { step: '03', title: t('about.pillars.quality'), desc: t('about.pillars.quality_desc'), icon: Zap },
              { step: '04', title: t('about.pillars.confidentiality'), desc: t('about.pillars.confidentiality_desc'), icon: Briefcase }
            ].map((step, idx) => (
              <div key={idx} className="space-y-6 md:space-y-8 relative group">
                <div className="text-5xl md:text-7xl font-serif text-white/5 select-none">{step.step}</div>
                <div className="space-y-4">
                  <div className="text-primary/40 group-hover:text-primary transition-colors">
                     <step.icon size={20} className="md:w-6 md:h-6" />
                  </div>
                  <h4 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">{step.title}</h4>
                  <p className="text-white/30 text-xs md:text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-6 bg-[#0a0a0a]">
         <div className="max-w-4xl mx-auto text-center space-y-8 md:space-y-12">
            <h2 className="text-3xl md:text-6xl font-bold text-white tracking-tight uppercase font-serif">
               {t('services.cta_title')}
            </h2>
            <Link to="/contact" className="inline-block bg-primary text-black px-12 md:px-16 py-4 md:py-6 font-bold text-[10px] md:text-xs tracking-[0.3em] uppercase hover:bg-white transition-all rounded-sm w-full sm:w-auto">
               {t('services.cta_button')}
            </Link>
         </div>
      </section>
    </div>
  );
};

