import React from 'react';
import { motion } from 'motion/react';
import { Building2, Users, Target, Shield } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const Institutional = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24">
      <SEO titleKey="seo.institutional_title" descriptionKey="seo.institutional_desc" />
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="max-w-container-max mx-auto text-center space-y-8">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase"
          >
            الحلول المؤسسية
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            تمكين المؤسسات <br />
            <span className="text-primary italic text-3xl md:text-5xl">بخلفية مالية صلبة.</span>
          </h1>
          <p className="text-white/40 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
            نقدم استشارات متخصصة للشركات الكبرى والمؤسسات الحكومية لتطوير كفاءتها التشغيلية وامتثالها المالي.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-right">
          {[
            { icon: <Building2 className="text-primary" />, title: 'هيكلة الشركات', desc: 'إعادة تنظيم العمليات لرفع الكفاءة.' },
            { icon: <Users className="text-primary" />, title: 'الحوكمة', desc: 'بناء أطر عمل رقابية متينة.' },
            { icon: <Target className="text-primary" />, title: 'التحويل الاستراتيجي', desc: 'قيادة التغيير نحو التميز الرقمي والمالي.' },
            { icon: <Shield className="text-primary" />, title: 'ادارة الامتثال', desc: 'ضمان التوافق مع الأنظمة المحلية والدولية.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="p-10 border border-white/5 bg-white/[0.02] flex flex-col gap-4"
            >
              <div className="text-primary mb-4">{item.icon}</div>
              <h4 className="font-bold text-lg">{item.title}</h4>
              <p className="text-white/40 text-xs leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
