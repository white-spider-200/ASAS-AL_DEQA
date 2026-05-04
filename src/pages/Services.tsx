import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, ShieldAlert, BarChart3, Landmark, PieChart, Briefcase, ChevronRight, Target, ClipboardCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '../lib/utils';

export const Services = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const servicesList = [
    {
      icon: <BarChart3 className="text-primary" size={32} />,
      title: t('services.items.tax_compliance'),
      desc: t('services.items.tax_compliance_desc')
    },
    {
      icon: <Landmark className="text-primary" size={32} />,
      title: t('services.items.accounting'),
      desc: t('services.items.accounting_desc')
    },
    {
      icon: <ShieldAlert className="text-primary" size={32} />,
      title: t('services.items.tax_management'),
      desc: t('services.items.tax_management_desc')
    },
    {
      icon: <Briefcase className="text-primary" size={32} />,
      title: t('services.items.tax_litigation'),
      desc: t('services.items.tax_litigation_desc')
    },
    {
      icon: <ClipboardCheck className="text-primary" size={32} />,
      title: t('services.items.documentation'),
      desc: t('services.items.documentation_desc')
    },
    {
      icon: <TrendingUp className="text-primary" size={32} />,
      title: t('services.items.inventory'),
      desc: t('services.items.inventory_desc')
    },
    {
      icon: <Zap className="text-primary" size={32} />,
      title: t('services.items.erp'),
      desc: t('services.items.erp_desc')
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-20 font-sans selection:bg-primary selection:text-black">
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
        
        <div className="max-w-container-max mx-auto px-6 relative z-10 w-full py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase mb-8 block">{t('nav.services')}</span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1] font-serif uppercase">
              {t('services.title.main')} <span className="text-primary italic">{t('services.title.accent')}</span>
            </h1>
            <p className="text-white/40 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-light">
              {t('services.subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-6">
        <div className="max-w-container-max mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5">
            {servicesList.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-16 bg-[#0a0a0a] hover:bg-[#0d0d0d] transition-all duration-500 flex flex-col items-start"
              >
                <div className="mb-12 text-primary/60 group-hover:text-primary transition-colors duration-500">
                  {s.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight font-serif group-hover:text-primary transition-colors">{s.title}</h3>
                <p className="text-white/30 leading-relaxed text-lg font-light mb-12 min-h-[80px]">
                  {s.desc}
                </p>
                <Link to="/contact" className="mt-auto flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] text-primary hover:gap-6 transition-all uppercase">
                  {t('services.cta_button')} <ChevronRight className={cn(isRtl ? "rotate-180" : "")} size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 bg-[#000] px-6 border-t border-white/5">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-32 space-y-4">
             <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase">{t('services.title.main')} {t('services.title.accent')}</span>
             <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white uppercase font-serif">{t('about.why_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {[
              { step: '01', title: t('about.pillars.commitment'), desc: t('about.pillars.commitment_desc'), icon: ClipboardCheck },
              { step: '02', title: t('about.pillars.legality'), desc: t('about.pillars.legality_desc'), icon: Target },
              { step: '03', title: t('about.pillars.quality'), desc: t('about.pillars.quality_desc'), icon: Zap },
              { step: '04', title: t('about.pillars.confidentiality'), desc: t('about.pillars.confidentiality_desc'), icon: Briefcase }
            ].map((step, idx) => (
              <div key={idx} className="space-y-8 relative group">
                <div className="text-7xl font-serif text-white/5 select-none">{step.step}</div>
                <div className="space-y-4">
                  <div className="text-primary/40 group-hover:text-primary transition-colors">
                     <step.icon size={24} />
                  </div>
                  <h4 className="text-xl font-bold text-white uppercase tracking-tight">{step.title}</h4>
                  <p className="text-white/30 text-sm leading-relaxed font-light">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
         <div className="max-w-4xl mx-auto text-center space-y-12">
            <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight uppercase font-serif">
               {t('services.cta_title')}
            </h2>
            <Link to="/contact" className="inline-block bg-primary text-black px-16 py-6 font-bold text-xs tracking-[0.3em] uppercase hover:bg-white transition-all">
               {t('services.cta_button')}
            </Link>
         </div>
      </section>
    </div>
  );
};

