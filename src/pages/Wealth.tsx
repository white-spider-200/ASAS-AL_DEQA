import React from 'react';
import { motion } from 'motion/react';
import { PieChart, ShieldCheck, TrendingUp, Landmark } from 'lucide-react';

export const Wealth = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24" dir="rtl">
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="max-w-container-max mx-auto text-center space-y-8">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase"
          >
            إدارة الثروات
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            حماية وتنمية <br />
            <span className="text-primary italic text-3xl md:text-5xl">أصولك العائلية والمؤسسية.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            نحن نصمم استراتيجيات مخصصة للحفاظ على الثروة عبر الأجيال، مع التركيز على الانضباط المالي والنمو المستدام.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-container-max mx-auto grid md:grid-cols-3 gap-12 text-right">
          {[
            { icon: <TrendingUp className="text-primary" />, title: 'تنمية الأصول', desc: 'استراتيجيات استثمارية مدروسة تهدف إلى تحقيق عوائد مستدامة في ظل تقلبات السوق.' },
            { icon: <ShieldCheck className="text-primary" />, title: 'الحفاظ على الثروة', desc: 'أطر حماية صارمة تضمن استمرارية الثروة وانتقالها السلس للأجيال القادمة.' },
            { icon: <Landmark className="text-primary" />, title: 'التخطيط الاستراتيجي', desc: 'هيكلة مالية وضريبية شاملة تتماشى مع الأهداف الشخصية والمؤسسية.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 bg-white/[0.02] border border-white/5 rounded-2xl space-y-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
