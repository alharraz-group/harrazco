import React from 'react';
import { motion } from 'motion/react';
import { 
  MapPin, 
  Clock, 
  Compass, 
  Navigation, 
  Building, 
  CheckCircle2,
  ExternalLink,
  PhoneCall
} from 'lucide-react';

export default function MapSection() {
  const [activeBranch, setActiveBranch] = React.useState(0);

  const branches = [
    {
      city: 'بور سودان (المقر الرئيسي)',
      address: 'وسط المدينة، قرب المؤسسات الحكومية والميناء',
      phone: '+249 112 705 718',
      hours: 'السبت - الخميس: 8:00 ص - 4:00 م',
      status: 'نشط حالياً',
      mapUrl: 'https://maps.app.goo.gl/BYkaZKm7cdKBqGDN6',
      embedUrl: 'https://maps.google.com/maps?q=Port%20Sudan,%20Sudan&t=&z=13&ie=UTF8&iwloc=&output=embed'
    },
    {
      city: 'مكتب تنسيق الخرطوم',
      address: 'شارع محمد نجيب، جنوب مركز السودان للعيون وشمال جهاز المغتربين، الخرطوم، السودان',
      phone: '+249 999 458 145',
      hours: 'السبت - الخميس: 8:00 ص - 4:00 م',
      status: 'مكتب تنسيق معتمد',
      mapUrl: 'https://maps.app.goo.gl/ZJmAdWEfLijREvKeA',
      embedUrl: 'https://maps.google.com/maps?q=Mohamed%20Najib%20Street,%20Khartoum,%20Sudan&t=&z=15&ie=UTF8&iwloc=&output=embed'
    }
  ];

  return (
    <section id="map-section" className="bg-slate-50 py-24 md:py-32 border-t border-slate-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Header */}
        <div className="text-right max-w-3xl mb-16 flex flex-col gap-4">
          <span className="text-corporate-blue-700 font-bold text-xs md:text-sm tracking-widest uppercase block">
            التواجد الجغرافي والفروع
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight md:leading-[1.2]">
            الموقع الجغرافي للمجموعة وخريطة الفروع
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
            تتواجد مكاتب مجموعة الحراز في مواقع حيوية لتسهيل مراجعات العملاء وتخليص كافة المعاملات الرسمية بالتنسيق مع الجهات والسفارات المعنية.
          </p>
        </div>

        {/* Beautiful Map Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch w-full">
          
          {/* Right Part: Interactive Map Card (7 cols) */}
          <div className="lg:col-span-7 h-[320px] sm:h-[400px] md:h-[550px] relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200" id="google-map-container">
            {/* Embedded Google Maps with smooth elegant frame */}
            <iframe 
              src={branches[activeBranch].embedUrl}
              className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="موقع مجموعة الحراز على الخريطة"
            />
            
            {/* Floating Info card over the Map */}
            <div className="absolute bottom-4 right-4 left-4 md:right-8 md:left-auto md:w-96 bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-slate-100 flex flex-col gap-3 md:gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-corporate-green-50 text-corporate-green-800 rounded-xl">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-slate-900">{branches[activeBranch].city}</h4>
                  <p className="text-xs text-slate-500 leading-normal max-w-[250px] truncate">{branches[activeBranch].address}</p>
                </div>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 gap-2">
                <a 
                  href={branches[activeBranch].mapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-corporate-blue-700 font-bold hover:underline"
                >
                  <span>فتح في تطبيق خرائط Google</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <span className="text-[10px] text-corporate-green-800 bg-corporate-green-50 px-2 py-1 rounded-full font-bold shrink-0">
                  موقع موثق ومؤكد
                </span>
              </div>
            </div>
          </div>

          {/* Left Part: Branches Directory list & Work Hours (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-10" id="branches-directory">
            
            <div className="flex flex-col gap-6">
              <h3 className="text-xl md:text-2xl font-black text-slate-950 flex items-center gap-3 border-b border-slate-200 pb-4">
                <Building className="w-6 h-6 text-corporate-green-800" />
                <span>دليل الفروع والمكاتب المعتمدة</span>
              </h3>

              <div className="flex flex-col gap-6">
                {branches.map((branch, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setActiveBranch(idx)}
                    className={`p-6 rounded-2xl border transition-all flex flex-col gap-4 cursor-pointer select-none ${
                      activeBranch === idx 
                        ? 'bg-white border-corporate-green-600 shadow-md ring-2 ring-corporate-green-600/10' 
                        : 'bg-white/60 border-slate-150 hover:bg-white hover:border-slate-300 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-extrabold text-slate-900">
                        {branch.city}
                      </span>
                      <span className={`text-[10px] md:text-xs font-bold px-2.5 py-1 rounded-full ${
                        activeBranch === idx 
                          ? 'text-corporate-green-800 bg-corporate-green-50' 
                          : 'text-slate-500 bg-slate-100'
                      }`}>
                        {branch.status}
                      </span>
                    </div>

                    <p className="text-xs md:text-sm text-slate-500 leading-relaxed break-words">
                      {branch.address}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 border-t border-slate-100 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-slate-400 shrink-0" />
                        <span>{branch.hours}</span>
                      </div>
                      <div className="flex items-center gap-2" dir="ltr">
                        <PhoneCall className="w-4 h-4 text-corporate-blue-600 shrink-0" />
                        <span className="font-bold">{branch.phone}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Navigation Assistance Banner */}
            <div className="p-6 md:p-8 rounded-3xl bg-slate-900 text-white flex flex-col gap-4 shadow-xl border border-slate-800">
              <div className="flex items-center gap-3">
                <Compass className="w-6 h-6 text-corporate-blue-400" />
                <h4 className="text-base font-bold text-white">هل تواجه صعوبة في الوصول إلينا؟</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                يمكنك الاتصال بفرع بور سودان مباشرة للحصول على إرشادات جغرافية دقيقة أو لطلب مندوب رسمي لتسهيل تسليم واستلام المستندات الخاصة بالمعاملات.
              </p>
              <div className="pt-2">
                <a 
                  href="tel:+249112705718"
                  className="inline-flex items-center gap-2 bg-corporate-green-800 hover:bg-corporate-green-700 text-white text-xs font-bold py-2.5 px-5 rounded-xl transition-all w-fit"
                >
                  <span>اتصل بالاستقبال الآن</span>
                  <Navigation className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
