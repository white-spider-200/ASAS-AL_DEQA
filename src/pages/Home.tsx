import React from 'react';
import { motion } from 'motion/react';
import { Shield, Target, Users, Landmark, ArrowRight, ArrowLeft, CheckCircle2, BarChart3, Briefcase } from 'lucide-react';
import { CinematicHeroV2 } from '../components/ui/CinematicHeroV2';
import { GlowCard } from '../components/ui/GlowCard';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


export const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="bg-[#0a0a0a] min-h-screen selection:bg-primary selection:text-black antialiased">
      <CinematicHeroV2 />

      {/* Established Heritage Section */}
      <section className="py-32 px-6 bg-[#0d0d0d] border-t border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48 -mt-48" />
        <div className="max-w-container-max mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-primary/5 border border-primary/20 rounded-sm">
                <Landmark size={16} className="text-primary" />
                <span className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase">{t('about.managed_by.main')} {t('about.managed_by.accent')}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight uppercase font-serif">
                {t('home.legacy_title.main')} <br />
                <span className="text-primary italic">{t('home.legacy_title.accent')}</span>
              </h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-xl font-light">
                {t('home.legacy_desc')}
              </p>
              <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/5">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">2014</div>
                  <div className="text-[10px] text-white/40 tracking-widest uppercase font-bold">{t('home.stats.experience')}</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">500+</div>
                  <div className="text-[10px] text-white/40 tracking-widest uppercase font-bold">{t('home.stats.clients')}</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative aspect-square rounded-2xl overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop" 
                alt="Office Interior" 
                className="w-full h-full object-cover grayscale opacity-50 hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="py-32 px-6 bg-[#0a0a0a]">
        <div className="max-w-container-max mx-auto">
          <div className="text-center mb-24 space-y-4">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase"
            >
              {t('services.title.main')} {t('services.title.accent')}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white tracking-tight uppercase"
            >
              {t('services.subtitle')}
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: t('services.items.tax_compliance'), desc: t('services.items.tax_compliance_desc'), icon: Shield },
              { title: t('services.items.accounting'), desc: t('services.items.accounting_desc'), icon: Landmark },
              { title: t('services.items.tax_management'), desc: t('services.items.tax_management_desc'), icon: Target },
              { title: t('services.items.tax_litigation'), desc: t('services.items.tax_litigation_desc'), icon: Users },
              { title: t('services.items.inventory'), desc: t('services.items.inventory_desc'), icon: CheckCircle2 },
              { title: t('services.items.erp'), desc: t('services.items.erp_desc'), icon: Briefcase },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="h-full"
              >
                <GlowCard 
                  customSize 
                  className="h-full bg-white/[0.02] border-white/5 hover:bg-white/[0.04] transition-all group p-10 flex flex-col items-start"
                  glowColor="gold"
                >
                  <service.icon className="text-primary mb-6 group-hover:scale-110 transition-transform" size={32} />
                  <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed flex-grow">{service.desc}</p>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#bda55d]/[0.02] pointer-events-none" />
        <div className="max-w-container-max mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight font-serif uppercase">
              {t('services.cta_title')}
            </h2>
            <p className="text-white/40 text-xl max-w-2xl mx-auto font-light leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center font-bold tracking-widest">
              <Link to="/contact" className="bg-primary text-black px-12 py-5 font-bold hover:bg-primary transition-all text-xs tracking-widest uppercase rounded-sm flex items-center gap-4 group">
                {t('services.cta_button')}
                {t('common.dir') === 'rtl' ? (
                  <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                )}
              </Link>
              <Link to="/services" className="px-12 py-5 border border-white/20 text-white font-bold hover:bg-white/5 transition-all text-xs tracking-widest uppercase rounded-sm">
                {t('hero.cta_services')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mini Footer */}
      <footer className="py-12 border-t border-white/5 px-6">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <span className="text-white font-bold tracking-widest uppercase text-xs">ASAS AL-DEQA</span>
          <div className="flex flex-wrap justify-center gap-8 text-[10px] text-white/30 font-bold tracking-widest uppercase">
            <Link to="/privacy" className="hover:text-primary transition-colors">PRIVACY POLICY</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">TERMS OF SERVICE</Link>
            <span>{t('footer.rights')}</span>
          </div>
        </div>
      </footer>
    </main>
  );
};
