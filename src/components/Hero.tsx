import React from 'react';
import { motion } from 'motion/react';
import { Compass, Briefcase, Building, ChevronLeft } from 'lucide-react';

interface HeroProps {
  onActionClick: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function Hero({ onActionClick, onOpenConsultation }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-36 pb-24 md:pt-48 md:pb-36 bg-gradient-to-b from-slate-50 to-white overflow-hidden flex items-center"
      dir="rtl"
    >
      {/* Decorative corporate background nodes */}
      <div className="absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-corporate-green-50/40 to-transparent pointer-events-none" />
      <div className="absolute -left-48 top-1/4 w-96 h-96 bg-corporate-blue-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-48 bottom-1/4 w-96 h-96 bg-corporate-green-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Right Column: High-Legibility Copy */}
          <div className="lg:col-span-7 space-y-8 text-center md:text-right flex flex-col items-center md:items-start" id="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-corporate-green-50 border border-corporate-green-100 text-corporate-green-800 rounded-full text-xs md:text-sm font-semibold tracking-wide"
            >
              <span className="w-2 h-2 rounded-full bg-corporate-green-600 animate-pulse" />
              <span>شريكك الاستراتيجي الموثوق في السودان والخليج</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-2xl sm:text-3xl md:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-tight md:leading-[1.15]"
            >
              حلول متكاملة لأعمالك <br className="hidden md:block"/>
              ورحلاتك،{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-corporate-green-700 to-corporate-blue-700">
                برؤية احترافية
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-base md:text-xl text-slate-600 max-w-2xl leading-relaxed"
            >
              مجموعة الحراز خيارك الأول والموثوق لخدمات السفر والحج، الاستقدام والتأشيرات، والتطوير العقاري داخل وخارج السودان. نعمل بمعايير جودة عالمية لنلبي تطلعاتك.
            </motion.p>

            {/* Actions Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col md:flex-row items-center gap-4 pt-4 w-full md:w-auto"
              id="hero-actions"
            >
              <button
                onClick={() => onActionClick('services-travel')}
                className="w-full md:w-auto px-8 py-4 bg-corporate-green-800 hover:bg-corporate-green-700 text-white rounded-xl font-bold text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 group"
                id="hero-primary-cta"
              >
                <span>اكتشف خدماتنا</span>
                <ChevronLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1" />
              </button>

              <button
                onClick={onOpenConsultation}
                className="w-full md:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-800 border-2 border-slate-200 hover:border-slate-300 rounded-xl font-bold text-base transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                id="hero-secondary-cta"
              >
                <span>طلب استشارة فورية</span>
              </button>
            </motion.div>

            {/* Quick Segment Pill Tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center md:justify-start gap-6 pt-8 border-t border-slate-100 w-full"
              id="hero-sectors"
            >
              <div className="flex items-center gap-2 text-slate-500">
                <Compass className="w-4 h-4 text-corporate-green-700" />
                <span className="text-sm font-semibold">السياحة والحج</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Briefcase className="w-4 h-4 text-corporate-blue-700" />
                <span className="text-sm font-semibold">التأشيرات والاستقدام</span>
              </div>
              <div className="flex items-center gap-2 text-slate-500">
                <Building className="w-4 h-4 text-amber-600" />
                <span className="text-sm font-semibold">التطوير العقاري</span>
              </div>
            </motion.div>
          </div>

          {/* Left Column: Visual Composition with layered modern frames (Bento-styled) */}
          <div className="lg:col-span-5 relative w-full h-[320px] sm:h-[400px] md:h-[550px]" id="hero-graphics">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full"
            >
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-corporate-green-600/10 to-corporate-blue-600/10 rounded-3xl blur-2xl -z-10" />

              {/* Main Background Card (Corporate Makkah View Placeholder) */}
              <div className="absolute top-0 right-0 w-[85%] h-[75%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000&auto=format&fit=crop"
                  alt="Makkah Corporate View"
                  className="w-full h-full object-cover grayscale-15 hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
              </div>

              {/* Secondary Layered Card (Modern Real Estate/Office Placeholder) */}
              <div className="absolute bottom-4 left-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-200 z-10">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
                  alt="Modern Real Estate Development"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              {/* Float Widget 1: Official Stamp of Trust */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="absolute top-1/2 left-2 md:-left-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
              >
                <div className="p-2 bg-corporate-green-50 rounded-xl text-corporate-green-700">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold">معدل الاعتماد</div>
                  <div className="text-sm font-bold text-slate-800">حكومي وموثوق 100%</div>
                </div>
              </motion.div>

              {/* Float Widget 2: Travel Counter */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut' }}
                className="absolute top-10 right-2 md:right-4 bg-white/95 backdrop-blur-md px-5 py-3.5 rounded-2xl shadow-xl border border-slate-100 z-20 flex items-center gap-3"
              >
                <div className="p-2 bg-corporate-blue-50 rounded-xl text-corporate-blue-600">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400 font-semibold">حج وعمرة</div>
                  <div className="text-sm font-bold text-slate-800">إقامة VIP فندقية</div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
