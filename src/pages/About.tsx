import React from "react";
import { motion } from "framer-motion";
import { Shield, Building2, Cpu, Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SEO } from "../components/common/SEO";
import { Logo } from "../components/ui/Logo";

const experts = [
  {
    name: "Omar Tariq",
    title: "SENIOR TAX ADVISOR",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    bio: "Over 15 years navigating complex regional tax structures and cross-border compliance.",
  },
  {
    name: "Leila Haddad",
    title: "LEAD ACCOUNTANT",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop",
    bio: "Specializes in institutional audit preparation and forensic accounting for high-net-worth portfolios.",
  },
  {
    name: "Tarek Al-Fayed",
    title: "MANAGING PARTNER",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    bio: "Former Big Four executive directing our strategic advisory and corporate restructuring practice.",
  },
];

export const About = () => {
  const { t } = useTranslation();

  const sectors = [
    {
      title: t('about.history_p2').includes('manufacturing') ? 'Manufacturing' : 'التصنيع',
      desc: t('about.history_p2'),
      icon: Building2,
    },
    {
      title: t('about.history_p2').includes('financial') ? 'Financial Services' : 'الخدمات المالية',
      desc: t('about.history_p2'),
      icon: Shield,
    },
    {
      title: t('about.history_p2').includes('trading') ? 'Trading' : 'التجارة',
      desc: t('about.history_p2'),
      icon: Briefcase,
    },
    {
      title: t('about.history_p2').includes('telecommunication') ? 'Telecommunication' : 'الاتصالات',
      desc: t('about.history_p2'),
      icon: Cpu,
    },
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-20 font-sans selection:bg-primary selection:text-black">
      <SEO titleKey="seo.about_title" descriptionKey="seo.about_desc" />
    <section className="relative min-h-[60vh] md:min-h-[80vh] flex items-center overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop"
          alt="Modern Architecture"
          className="w-full h-full object-cover grayscale opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      <div className="max-w-container-max mx-auto px-6 relative z-10 w-full py-20 text-center lg:text-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto lg:mx-0"
        >
          <span className="text-primary text-[10px] font-bold tracking-[0.6em] uppercase mb-6 md:mb-8 block">
            {t('about.managed_by.main')} {t('about.managed_by.accent')}
          </span>
          <h1 className="text-4xl md:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] font-serif uppercase">
            {t('about.title.main')} <br />
            <span className="text-primary italic">{t('about.title.accent')}</span>
          </h1>
          <p className="text-white/40 text-lg md:text-2xl max-w-3xl mx-auto lg:mx-0 leading-relaxed font-light">
            {t('about.subtitle')}
          </p>
        </motion.div>
      </div>
    </section>

    {/* Strategic Insight Image Section */}
    <section className="py-12 md:py-20 px-6 bg-[#0a0a0a]">
      <div className="max-w-container-max mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
          className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 group"
        >
          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop" 
            alt="Strategic Advisory" 
            className="w-full h-full object-cover grayscale brightness-50 group-hover:scale-105 transition-transform duration-[2s] ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-10 left-10 md:bottom-20 md:left-20 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase font-serif mb-4 leading-tight">
              {t('about.pillars.quality')} <span className="text-primary italic">&</span> {t('about.pillars.commitment')}
            </h2>
            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
              {t('about.vision.desc')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Our Story Section */}
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-container-max mx-auto grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-square bg-[#0d0d0d] border border-white/5 flex items-center justify-center p-12 md:p-20 order-2 lg:order-1 overflow-hidden"
        >
          <img 
            src="https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=1000&auto=format&fit=crop" 
            alt="Corporate Heritage" 
            className="absolute inset-0 w-full h-full object-cover opacity-20 grayscale"
          />
          <div className="absolute top-6 left-6 md:top-10 md:left-10 w-20 h-20 md:w-40 md:h-40 border-t border-l border-primary/20 z-10" />
          <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 w-20 h-20 md:w-40 md:h-40 border-b border-r border-primary/20 z-10" />
          <div className="text-center space-y-4 relative z-10">
            <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block">
              {t('nav.about')}
            </span>
            <Logo showText={false} className="h-24 md:h-40 w-auto brightness-110" />
          </div>

          {/* Year Badge */}
          <div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-primary/20 px-6 md:px-10 py-4 md:py-6 text-center">
            <div className="text-2xl md:text-4xl font-bold text-primary mb-1">2014</div>
            <div className="text-[10px] text-white/40 font-bold tracking-widest uppercase">
              {t('home.stats.experience')}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8 md:space-y-10 order-1 lg:order-2"
        >
          <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase font-serif">
            {t('about.managed_by.main')} <br />
            <span className="text-primary italic">{t('about.managed_by.accent')}</span>
          </h2>
          <div className="space-y-6 text-white/40 text-base md:text-lg leading-relaxed font-light">
            <p>
              {t('about.history_p1')}
            </p>
            <p>
              {t('about.history_p2')}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 pt-10 border-t border-white/5">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">
                Jordan
              </div>
              <div className="text-[10px] text-white/40 font-bold tracking-widest uppercase">
                 {t('home.stats.experience')}
              </div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-primary mb-2">SME</div>
              <div className="text-[10px] text-white/40 font-bold tracking-widest uppercase">
                 {t('home.stats.clients')}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Vision & Mission */}
    <section className="py-20 md:py-32 px-6 bg-[#0d0d0d] border-y border-white/5 relative overflow-hidden">
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-16 md:gap-24 text-center md:text-start relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          <div className="aspect-video mb-8 rounded-lg overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Vision" 
              className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-700"
            />
          </div>
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block">
            {t('about.vision.title')} {t('about.vision.accent')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif uppercase leading-tight">
            {t('about.vision.title')} <br />
            <span className="text-primary italic">{t('about.vision.accent')}</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
            {t('about.vision.desc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="space-y-6 md:space-y-8"
        >
          <div className="aspect-video mb-8 rounded-lg overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1454165833767-027ffea9e778?q=80&w=1000&auto=format&fit=crop" 
              alt="Our Mission" 
              className="w-full h-full object-cover grayscale opacity-60 hover:scale-105 transition-transform duration-700"
            />
          </div>
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block">
            {t('about.mission.title')} {t('about.mission.accent')}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white font-serif uppercase leading-tight">
             {t('about.mission.title')} <br />
            <span className="text-primary italic">{t('about.mission.accent')}</span>
          </h2>
          <p className="text-white/40 text-lg md:text-xl font-light leading-relaxed">
             {t('about.mission.desc')}
          </p>
        </motion.div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 md:py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-4">
            {t('about.why_title')}
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-white font-serif uppercase">
            {t('about.why_title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {[
            {
              title: t('about.pillars.commitment'),
              content: t('about.pillars.commitment_desc'),
            },
            {
              title: t('about.pillars.legality'),
              content: t('about.pillars.legality_desc'),
            },
            {
              title: t('about.pillars.quality'),
              content: t('about.pillars.quality_desc'),
            },
            {
              title: t('about.pillars.confidentiality'),
              content: t('about.pillars.confidentiality_desc'),
            },
          ].map((pillar, i) => (
            <div
              key={i}
              className="p-8 md:p-10 bg-white/[0.02] border border-white/5 space-y-4"
            >
              <h3 className="text-lg md:text-xl font-bold text-white uppercase tracking-tight">
                {pillar.title}
              </h3>
              <p className="text-white/40 text-xs md:text-sm font-light leading-relaxed">
                {pillar.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* experts and sectors omitted for brevity or simplified translation */}
    </div>
  );
};
