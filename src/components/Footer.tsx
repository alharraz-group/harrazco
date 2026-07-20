import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronLeft, 
  ShieldCheck, 
  Briefcase, 
  Building 
} from 'lucide-react';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
  onOpenConsultation: () => void;
}

export default function Footer({ onNavClick, onOpenConsultation }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-white pt-24 pb-16 md:pt-32 md:pb-20 relative overflow-hidden" dir="rtl">
      
      {/* Decorative subtle ambient lights */}
      <div className="absolute -left-48 -bottom-48 w-96 h-96 bg-corporate-green-950/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -right-48 -top-48 w-96 h-96 bg-corporate-blue-950/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 relative z-10">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-slate-800">
          
          {/* Column 1: Brand details (4 columns) */}
          <div className="lg:col-span-4 space-y-6 text-right">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md border border-slate-800 bg-white flex items-center justify-center p-0.5">
                <img 
                  src="https://i.postimg.cc/PpLMFxD7/image.jpg" 
                  alt="Al-Harraz Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-white leading-none">
                  مجموعة الحراز
                </span>
                <span className="text-xs font-semibold text-corporate-green-500 mt-1">
                  للخدمات المتكاملة
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              نحن مجموعة وطنية رائدة متخصصة في توفير الحلول المتكاملة لقطاع السفر والسياحة، تنظيم وفود الحج والعمرة، استقدام الكفاءات المهنية، والتطوير العقاري والاستثمار داخل وخارج السودان.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs text-slate-400 font-semibold">بوابة الخدمات معتمدة رسمياً وقانونياً</span>
            </div>
          </div>

          {/* Column 2: Quick Links (3 columns) */}
          <div className="lg:col-span-3 space-y-5 text-right">
            <h4 className="text-base font-bold text-white tracking-wider border-r-4 border-corporate-green-600 pr-3">
              أقسام المجموعة
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <button 
                  onClick={() => onNavClick('services-travel')} 
                  className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-corporate-green-600 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>السفر والحج والعمرة</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick('services-visas')} 
                  className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-corporate-green-600 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>التأشيرات والاستقدام الخارجي</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick('services-local')} 
                  className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-corporate-green-600 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>الخدمات المحلية وتجديد الإقامة</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavClick('services-realestate')} 
                  className="hover:text-white transition-colors flex items-center gap-2 group cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4 text-corporate-green-600 transition-transform duration-200 group-hover:-translate-x-1" />
                  <span>التطوير والتسويق العقاري</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Support (5 columns) */}
          <div className="lg:col-span-5 space-y-5 text-right">
            <h4 className="text-base font-bold text-white tracking-wider border-r-4 border-corporate-blue-600 pr-3">
              اتصال ومؤازرة العملاء
            </h4>
            
            <div className="space-y-4 text-sm text-slate-400">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-corporate-green-500 mt-0.5 shrink-0" />
                <span>المقر الرئيسي: بور سودان، جمهورية السودان.</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-corporate-blue-500 mt-0.5 shrink-0" />
                <div className="flex flex-col gap-1 text-right" dir="ltr">
                  <a href="tel:+249112705718" className="hover:text-white transition-colors">
                    +249 112 705 718
                  </a>
                  <a href="tel:+249900740722" className="hover:text-white transition-colors">
                    +249 900 740 722
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-slate-400 mt-0.5 shrink-0" />
                <span>البريد الموحد: contact@alharrazgroup.com</span>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="mt-2 bg-gradient-to-l from-corporate-green-800 to-corporate-green-700 hover:from-corporate-green-700 hover:to-corporate-green-600 text-white px-6 py-3 rounded-xl text-xs font-bold transition-all duration-300 shadow-md flex items-center gap-2 cursor-pointer"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
              <span>تقديم طلب تعاقد أو استشارة فورية</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright alignment */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-6">
          <div className="text-right">
            <p>© {currentYear} مجموعة الحراز للخدمات المتكاملة. جميع الحقوق محفوظة.</p>
            <p className="mt-1 text-slate-600">بور سودان - السودان | سجل تجاري رقم 2984</p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 transition-colors cursor-pointer">سياسة الخصوصية</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">شروط وأحكام الخدمة</span>
            <span className="hover:text-slate-400 transition-colors cursor-pointer">معايير الامتثال والجودة</span>
          </div>
        </div>

      </div>

      {/* Floating pulsing WhatsApp Icon widget */}
      <div className="fixed bottom-6 left-6 z-[999] group scale-90 md:scale-100">
        
        {/* Pulsing Backlight background */}
        <div className="absolute inset-0 bg-emerald-500 rounded-full blur-md opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-ping -z-10" />

        {/* Action Button Link */}
        <a
          href="https://wa.me/249912404581"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 transform group-hover:scale-110"
          id="floating-whatsapp-widget"
          aria-label="Contact Al-Harraz Group via WhatsApp"
        >
          {/* Dynamic WhatsApp icon layout using custom pure SVG with Lucide feel */}
          <svg
            className="w-8 h-8 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.963C16.528 2.017 14.077 1.01 11.47 1.01c-5.436 0-9.86 4.37-9.864 9.8 0 1.7.457 3.36 1.32 4.81l-.997 3.641 3.728-.967zm11.238-6.195c-.3-.15-1.773-.875-2.047-.975-.274-.1-.474-.15-.674.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-1.205-.6-2.012-1.11-2.766-2.4-.202-.347.202-.323.578-1.075.075-.15.038-.282-.019-.397-.057-.115-.474-1.144-.65-1.569-.17-.41-.357-.35-.49-.35h-.42c-.15 0-.395.056-.6.282-.205.225-.783.765-.783 1.86s.8 2.155.912 2.307c.112.152 1.575 2.406 3.816 3.375.533.23 1.01.378 1.356.488.536.17 1.024.146 1.41.09.43-.062 1.334-.546 1.52-.1.218-.182.218-.182 1.14-.15.302-.15.4-.15.5-.075.2-.2.3-.3.15-.1-.05-1.52-.725-1.82-.875z" />
          </svg>
        </a>

        {/* Tooltip Label for Desktop hover */}
        <div className="absolute left-16 bottom-3 bg-slate-900 text-white text-xs font-bold py-2 px-4 rounded-xl opacity-0 translate-x-2 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 whitespace-nowrap shadow-xl">
          تواصل معنا فوراً على واتساب
        </div>

      </div>

    </footer>
  );
}
