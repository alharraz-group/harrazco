import React from 'react';
import { motion } from 'motion/react';
import { Award, Globe, ShieldCheck, HeartHandshake } from 'lucide-react';

export default function TrustMetrics() {
  const metrics = [
    {
      id: 'metric-1',
      icon: Award,
      value: '15+',
      label: 'عاماً من الخبرة',
      description: 'تقديم الخدمات المتكاملة وتسهيل المعاملات الرسمية.',
      colorClass: 'text-corporate-green-700 bg-corporate-green-50'
    },
    {
      id: 'metric-2',
      icon: Globe,
      value: '50+',
      label: 'دولة شريكة',
      description: 'شبكة علاقات دولية واسعة لتسهيل الاستقدام والسفر.',
      colorClass: 'text-corporate-blue-700 bg-corporate-blue-50'
    },
    {
      id: 'metric-3',
      icon: ShieldCheck,
      value: '100%',
      label: 'موثوقية قانونية',
      description: 'تراخيص رسمية معتمدة من كافة الجهات الحكومية ذات الصلة.',
      colorClass: 'text-emerald-700 bg-emerald-50'
    },
    {
      id: 'metric-4',
      icon: HeartHandshake,
      value: '24/7',
      label: 'دعم ومتابعة',
      description: 'فريق عمل متفرغ لخدمتكم ومرافقة وفود الحجيج والمسافرين.',
      colorClass: 'text-amber-700 bg-amber-50'
    }
  ];

  return (
    <section id="trust-metrics" className="bg-white py-24 border-y border-slate-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
          {metrics.map((metric, index) => {
            const IconComponent = metric.icon;
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center lg:items-start text-center lg:text-right p-6 rounded-2xl hover:bg-slate-50/80 transition-all duration-300 group"
              >
                <div className={`p-4 rounded-xl mb-4 transition-transform duration-300 group-hover:scale-110 ${metric.colorClass}`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                
                <span className="text-3xl md:text-4xl font-extrabold text-slate-950 tracking-tight leading-none mb-2">
                  {metric.value}
                </span>
                
                <h3 className="text-base md:text-lg font-bold text-slate-800 mb-2">
                  {metric.label}
                </h3>
                
                <p className="text-xs md:text-sm text-slate-500 leading-relaxed max-w-xs">
                  {metric.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
