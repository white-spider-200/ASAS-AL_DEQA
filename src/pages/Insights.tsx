import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Newspaper, BarChart2, Globe } from 'lucide-react';
import { SEO } from '../components/common/SEO';

export const Insights = () => {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white pt-24">
      <SEO titleKey="seo.insights_title" descriptionKey="seo.insights_desc" />
      <section className="py-24 px-6 relative overflow-hidden text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-primary text-[10px] font-bold tracking-[0.4em] uppercase block mb-8"
        >
          رؤى وأفكار
        </motion.span>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
          بوصلتك في عالم <br />
          <span className="text-primary italic">المال والأعمال.</span>
        </h1>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-12 text-right">
          {[
            { tag: 'تقرير ربع سنوي', title: 'مستقبل السوق العقاري في الرياض 2024', desc: 'تحليل شامل للفرص والتحديات في ظل رؤية المملكة 2030.' },
            { tag: 'مقالة', title: 'دليل الامتثال الضريبي للشركات الناشئة', desc: 'كيف تبدأ مشروعك بأسس مالية قانونية صحيحة.' },
            { tag: 'رؤية', title: 'أثر الذكاء الاصطناعي على المحاسبة الاستشارية', desc: 'كيف نعيد تعريف الكفاءة باستخدام التقنيات الحديثة.' },
            { tag: 'تحليل', title: 'خارطة طريق الاستثمار في الطاقة المتجددة', desc: 'استكشاف القطاعات الواعدة في التحول الأخضر.' }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="group cursor-pointer border-b border-white/5 pb-12"
            >
              <span className="text-primary text-[10px] font-bold tracking-widest uppercase mb-4 block opacity-60">{item.tag}</span>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{item.title}</h3>
              <p className="text-white/40 text-base leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
