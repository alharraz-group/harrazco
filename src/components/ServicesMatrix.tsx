import React from 'react';
import { motion } from 'motion/react';
import { 
  Compass, 
  Briefcase, 
  FileCheck, 
  Building2, 
  CheckCircle2, 
  ArrowLeftCircle 
} from 'lucide-react';

interface ServicesMatrixProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesMatrix({ onSelectService }: ServicesMatrixProps) {
  const services = [
    {
      id: 'services-travel',
      title: 'خدمات السفر والحج والعمرة',
      subtitle: 'رحلات إيمانية منظمة برعاية شاملة',
      description: 'نلتزم بتقديم أرقى مستويات الخدمة لضيوف الرحمن والمسافرين، مع توفير كافة سبل الراحة والأمان طوال الرحلة.',
      image: 'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=1000&auto=format&fit=crop',
      icon: Compass,
      color: 'border-corporate-green-600 text-corporate-green-800 bg-corporate-green-50/50',
      tag: 'سياحة دينية وترفيهية',
      features: [
        'سكن فندقي VIP فاخر لا يتعدى 200 متر عن الحرم المكي الشريف.',
        'إشراف إداري وطبي متكامل ومرافق طوال فترة الحج والعمرة.',
        'تأمين تأشيرات الحج والعمرة والزيارات بأسرع الإجراءات الرسمية.',
        'حجز تذاكر الطيران على أفضل الخطوط الجوية وبأسعار تفضيلية.'
      ]
    },
    {
      id: 'services-visas',
      title: 'التأشيرات والاستقدام الخارجي',
      subtitle: 'استقطاب الكفاءات وتسهيل المعاملات الدولية',
      description: 'نوفر حلول استقدام متكاملة للشركات والأفراد من مختلف الدول، بموثوقية عالية وإجراءات قانونية موثقة.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=1000&auto=format&fit=crop',
      icon: Briefcase,
      color: 'border-corporate-blue-600 text-corporate-blue-800 bg-corporate-blue-50/50',
      tag: 'استقدام وتوظيف',
      features: [
        'توفير عقود عمل رسمية وموثقة في دول الخليج العربي والشرق الأوسط.',
        'tسهيل معاملات تأشيرات العمل والزيارات التجارية والعائلية.',
        'تفويض واستقدام العمالة المنزلية والمهنية المؤهلة.',
        'تخليص وتوثيق المستندات والشهادات من السفارات والخارجية.'
      ]
    },
    {
      id: 'services-local',
      title: 'الخدمات المحلية وتجديد الإقامة',
      subtitle: 'حلول إدارية وتخليص معاملات متكاملة',
      description: 'نهتم بكافة الإجراءات القانونية والمستندية للوافدين والمقيمين والشركات لتسهيل العمل والاستقرار بإنتاجية.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1000&auto=format&fit=crop',
      icon: FileCheck,
      color: 'border-emerald-600 text-emerald-800 bg-emerald-50/50',
      tag: 'معاملات حكومية',
      features: [
        'إصدار وتجديد الإقامات وبطاقات العمل للوافدين والمؤسسات.',
        'تخليص تأشيرات الزيارة العائلية وتأشيرات المرور والعودة.',
        'تعديل المهن ونقل الكفالات وفك الارتباط القانوني.',
        'متابعة وتسوية القضايا العمالية لدى مكاتب العمل والجهات المختصة.'
      ]
    },
    {
      id: 'services-realestate',
      title: 'التطوير والتسويق العقاري',
      subtitle: 'استثمارات عقارية آمنة وواعدة',
      description: 'شريكك العقاري الموثوق في تخطيط، بيع، وشراء الأراضي والعقارات السكنية والاستثمارية برؤية مستقبلية.',
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000&auto=format&fit=crop',
      icon: Building2,
      color: 'border-amber-600 text-amber-800 bg-amber-50/50',
      tag: 'إعمار واستثمار',
      features: [
        'شراء وبيع الأراضي السكنية والزراعية والاستثمارية بعوائد ممتازة.',
        'تطوير وإعمار المجمعات السكنية والمباني التجارية الحديثة.',
        'تسجيل وترخيص العقارات وتوثيق الملكيات لدى السجل العقاري.',
        'تسويق المشاريع الاستثمارية والوساطة العقارية بنظام احترافي.'
      ]
    }
  ];

  return (
    <section id="services" className="bg-slate-50 py-28 md:py-36 relative overflow-hidden" dir="rtl">
      {/* Subtle decorative elements for spacing rhythm */}
      <div className="absolute top-0 right-0 w-92 h-92 bg-corporate-green-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-92 h-92 bg-corporate-blue-100/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-corporate-green-800 font-bold text-xs md:text-sm tracking-widest uppercase"
          >
            مجالات التميز والريادة
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight md:leading-[1.2]"
          >
            منظومة خدماتنا المتكاملة للأعمال والأفراد
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto"
          >
            نجمع الخبرة الطويلة بالدقة والسرعة في التنفيذ لنوفر لك باقة خدمات احترافية تلبي جميع احتياجاتك محلياً ودولياً.
          </motion.p>
        </div>

        {/* Services luxurious Grid - collapses to 1 column on mobile, spacious gaps on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 w-full">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="w-full bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 flex flex-col justify-between"
              >
                
                {/* Luxurious Top High-Res Image with Overlay - responsive height */}
                <div className="relative w-full h-52 sm:h-80 lg:h-96 overflow-hidden group">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  {/* Absolute Badge Tag */}
                  <span className="absolute top-4 right-4 bg-white/95 backdrop-blur-xs text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                    {service.tag}
                  </span>

                  {/* Icon Widget */}
                  <div className="absolute bottom-4 right-6 p-3 rounded-2xl border border-white/20 backdrop-blur-md text-white shadow-lg">
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                {/* Card Content with Mobile Responsive Padding */}
                <div className="p-6 sm:p-10 md:p-12 flex-grow flex flex-col justify-between gap-8 md:gap-10">
                  <div className="space-y-6">
                    <span className="text-xs md:text-sm font-bold text-corporate-blue-700 uppercase tracking-wide block break-words">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl md:text-3xl font-black text-slate-900 tracking-tight leading-tight break-words">
                      {service.title}
                    </h3>
                    <p className="text-xs md:text-base text-slate-600 leading-relaxed break-words">
                      {service.description}
                    </p>

                    {/* Features List with generous space */}
                    <ul className="space-y-4 pt-6 border-t border-slate-100" id={`features-list-${service.id}`}>
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-corporate-green-600 mt-0.5 shrink-0" />
                          <span className="text-slate-700 text-xs md:text-base leading-relaxed font-medium break-words">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Action Bar - Touch Target Heights at least 48px */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectService(service.title)}
                      className="w-full h-14 bg-slate-50 hover:bg-corporate-green-800 text-slate-800 hover:text-white border border-slate-150 hover:border-corporate-green-800 rounded-2xl font-bold text-xs md:text-base transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer group shadow-xs"
                    >
                      <span>طلب الخدمة والاستشارة</span>
                      <ArrowLeftCircle className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
                    </button>
                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
