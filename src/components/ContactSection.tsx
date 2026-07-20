import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  MessageSquare, 
  Mail, 
  Send, 
  CheckCircle, 
  AlertCircle, 
  User, 
  ChevronDown, 
  ShieldCheck, 
  RefreshCw,
  ExternalLink
} from 'lucide-react';

interface ContactSectionProps {
  preSelectedService: string;
  onClearPreSelected: () => void;
  openConsultationByDefault?: boolean;
  onCloseConsultation?: () => void;
}

export default function ContactSection({ 
  preSelectedService, 
  onClearPreSelected
}: ContactSectionProps) {
  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceType, setServiceType] = useState('استشارة عامة / أخرى');
  const [message, setMessage] = useState('');
  
  // UX State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Update selected service if pre-selected via clicking service card
  useEffect(() => {
    if (preSelectedService) {
      setServiceType(preSelectedService);
      // Smooth scroll to form
      const el = document.getElementById('contact-form-container');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  }, [preSelectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    // Validations
    if (!fullName.trim()) {
      setErrorMessage('الرجاء إدخال الاسم بالكامل.');
      return;
    }
    if (!phone.trim()) {
      setErrorMessage('الرجاء إدخال رقم هاتف للتواصل.');
      return;
    }

    setIsSubmitting(true);

    // Simulate database write network response
    setTimeout(() => {
      const newLead = {
        id: 'lead-' + Date.now(),
        fullName,
        phone,
        email: email || undefined,
        serviceType,
        message,
        createdAt: new Date().toISOString()
      };

      // Store in local storage for persistence & proof of concept
      try {
        const saved = localStorage.getItem('alharraz_leads');
        const existing = saved ? JSON.parse(saved) : [];
        localStorage.setItem('alharraz_leads', JSON.stringify([newLead, ...existing]));
      } catch (err) {
        console.error('Local storage write failed', err);
      }

      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset fields
      setFullName('');
      setPhone('');
      setEmail('');
      setMessage('');
      onClearPreSelected();

      // Clear success notification after 7 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 7000);
    }, 1100);
  };

  return (
    <section id="contact" className="bg-white py-28 md:py-36 border-t border-slate-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        
        {/* Section Heading with generous spacing */}
        <div className="text-right max-w-3xl mb-20 space-y-6">
          <span className="text-corporate-green-800 font-bold text-xs md:text-sm tracking-widest uppercase block">
            بوابة التواصل والتنسيق المباشر
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight md:leading-[1.2]">
            دعنا نساهم في نجاح خطوتك القادمة
          </h2>
          <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed">
            سواء كنت تخطط لرحلة عمرة مباركة، أو تبحث عن كوادر متميزة لشركتك، أو ترغب في استثمار عقاري واعد؛ فريق خبراء مجموعة الحراز جاهز للتواصل الفوري وخدمتكم.
          </p>
        </div>

        {/* Two-Column Corporate Layout - strictly 1 column on mobile, spacious gaps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start w-full" id="contact-grid">
          
          {/* Right Column: Contact info & Official Coordinates */}
          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12 w-full" id="contact-details-panel">
            
            <div className="bg-slate-50 p-6 sm:p-10 md:p-12 rounded-3xl border border-slate-100 flex flex-col gap-8 md:gap-10 shadow-xs">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 border-b border-slate-200 pb-6">
                المقر الرئيسي والمبيعات
              </h3>

              <div className="flex flex-col gap-6 md:gap-8">
                
                {/* Location Card */}
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-white text-corporate-green-800 rounded-xl shadow-xs border border-slate-100 shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-slate-500">العنوان الرسمي</h4>
                    <p className="text-base font-extrabold text-slate-800 leading-normal">بور سودان، جمهورية السودان</p>
                    <a 
                      href="https://maps.app.goo.gl/BYkaZKm7cdKBqGDN6" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-corporate-blue-700 font-bold hover:underline pt-1"
                    >
                      <span>عرض على خرائط Google</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* Phones Card */}
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-white text-corporate-blue-700 rounded-xl shadow-xs border border-slate-100 shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-slate-500">أرقام هواتف المبيعات والاستشارات</h4>
                    <div className="flex flex-col gap-2" dir="ltr">
                      <a href="tel:+249112705718" className="text-base font-extrabold text-slate-800 hover:text-corporate-blue-700 transition-colors text-right leading-none">
                        +249 112 705 718
                      </a>
                      <a href="tel:+249900740722" className="text-base font-extrabold text-slate-800 hover:text-corporate-blue-700 transition-colors text-right leading-none">
                        +249 900 740 722
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct Card */}
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-white text-emerald-600 rounded-xl shadow-xs border border-slate-100 shrink-0">
                    <MessageSquare className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-slate-500">مراسلة فورية عبر واتساب</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">تحدث مباشرة مع مستشار الخدمات لإجابة فورية:</p>
                    <a 
                      href="https://wa.me/249912404581" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-100 text-xs font-bold py-2.5 px-4 rounded-xl hover:bg-emerald-100 transition-colors mt-2 w-fit"
                    >
                      <span>دردشة واتساب مباشرة</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {/* General Inquiry Email */}
                <div className="flex gap-5 items-start">
                  <div className="p-3 bg-white text-slate-600 rounded-xl shadow-xs border border-slate-100 shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h4 className="text-sm font-bold text-slate-500">البريد الإلكتروني للتعاقدات</h4>
                    <a 
                      href="mailto:contact@alharrazgroup.com"
                      className="text-base font-extrabold text-slate-800 hover:text-corporate-green-800 transition-colors block break-all"
                    >
                      contact@alharrazgroup.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Quality Commitment Card */}
            <div className="p-6 md:p-10 rounded-3xl bg-corporate-green-50/40 border border-corporate-green-100/50 flex flex-col gap-4">
              <h4 className="text-base font-bold text-corporate-green-950">التزام مجموعة الحراز بالجودة</h4>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                نضمن سرية بياناتكم ومراجعة جميع طلبات الاستشارة والتعاقدات التجارية عبر فريقنا الإداري في غضون ٢٤ ساعة عمل كحد أقصى، مع المتابعة المستمرة حتى إتمام الخدمة بنجاح تام.
              </p>
            </div>

          </div>

          {/* Left Column: Highly Polished Interactive Lead Form */}
          <div className="lg:col-span-7 w-full" id="contact-form-container">
            <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-12 border border-slate-150 shadow-xl flex flex-col gap-6 md:gap-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-100 pb-6 gap-4">
                <h3 className="text-2xl md:text-3xl font-black text-slate-950 tracking-tight">
                  طلب استشارة وحجز موعد
                </h3>
                <span className="text-xs text-corporate-green-800 bg-corporate-green-50 px-4 py-1.5 rounded-full font-bold w-fit">
                  مراجعة خلال 24 ساعة
                </span>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 md:gap-6">
                {/* Error Alerts */}
                {errorMessage && (
                  <div className="p-4 bg-red-50 border-r-4 border-red-500 text-red-800 text-sm font-semibold rounded-xl flex items-center gap-2.5">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Success Message */}
                {submitSuccess && (
                  <div className="p-6 bg-corporate-green-50 border-r-4 border-corporate-green-600 text-corporate-green-950 text-sm font-semibold rounded-xl space-y-2">
                    <div className="flex items-center gap-2.5 text-corporate-green-800">
                      <CheckCircle className="w-5.5 h-5.5 shrink-0" />
                      <span className="font-bold text-base">تم إرسال طلبك بنجاح!</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      لقد تم تسجيل بياناتك في نظام مجموعة الحراز المتكامل للخدمات. سيتصل بك مستشارنا المختص هاتفياً أو عبر واتساب في أقرب فرصة ممكنة لخدمتكم وتلبية طلبكم.
                    </p>
                  </div>
                )}

                {/* Input Name */}
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-sm font-bold text-slate-700 block">
                    الاسم بالكامل <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="مثال: محمد أحمد علي"
                      required
                      className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm md:text-base font-medium transition-all focus:bg-white focus:border-corporate-green-800 focus:ring-2 focus:ring-corporate-green-800/10 focus:outline-none placeholder:text-slate-400"
                    />
                    <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  </div>
                </div>

                {/* Phone & Email Row - collapses to single column on small screens */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-bold text-slate-700 block">
                      رقم الهاتف / واتساب <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="مثال: 249900000000+"
                        dir="ltr"
                        required
                        className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm md:text-base font-medium transition-all focus:bg-white focus:border-corporate-green-800 focus:ring-2 focus:ring-corporate-green-800/10 focus:outline-none placeholder:text-slate-400 text-right"
                      />
                      <Phone className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-bold text-slate-700 block">
                      البريد الإلكتروني (اختياري)
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                        className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm md:text-base font-medium transition-all focus:bg-white focus:border-corporate-green-800 focus:ring-2 focus:ring-corporate-green-800/10 focus:outline-none placeholder:text-slate-400"
                      />
                      <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    </div>
                  </div>
                </div>

                {/* Service Dropdown */}
                <div className="space-y-2">
                  <label htmlFor="serviceType" className="text-sm font-bold text-slate-700 block">
                    نوع الخدمة المطلوبة
                  </label>
                  <div className="relative">
                    <select
                      id="serviceType"
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full h-14 px-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm md:text-base font-bold transition-all focus:bg-white focus:border-corporate-green-800 focus:ring-2 focus:ring-corporate-green-800/10 focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="خدمات السفر والحج والعمرة">خدمات السفر والحج والعمرة</option>
                      <option value="التأشيرات والاستقدام الخارجي">التأشيرات والاستقدام الخارجي</option>
                      <option value="الخدمات المحلية وتجديد الإقامة">الخدمات المحلية وتجديد الإقامة</option>
                      <option value="التطوير والتسويق العقاري">التطوير والتسويق العقاري</option>
                      <option value="استشارة عامة / أخرى">استشارة عامة / أخرى</option>
                    </select>
                    <ChevronDown className="absolute left-4 top-4.5 w-5 h-5 text-slate-500 pointer-events-none" />
                  </div>
                </div>

                {/* Message Box */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-bold text-slate-700 block">
                    تفاصيل الاستفسار والطلبات الخاصة
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="اكتب هنا ما ترغب في الاستفسار عنه بالتفصيل ليتسنى لنا إعداد الرد المناسب..."
                    className="w-full p-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm md:text-base font-medium transition-all focus:bg-white focus:border-corporate-green-800 focus:ring-2 focus:ring-corporate-green-800/10 focus:outline-none placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Compliance Label */}
                <div className="text-xs text-slate-400 leading-relaxed flex items-center gap-2 pt-2">
                  <ShieldCheck className="w-5 h-5 text-corporate-green-700 shrink-0" />
                  <span>بياناتك آمنة تماماً بموجب سياسة الخصوصية لمجموعة الحراز للخدمات المتكاملة.</span>
                </div>

                {/* Action Submit - Touch target 14 height */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-14 bg-corporate-green-800 hover:bg-corporate-green-700 text-white rounded-xl font-bold text-base shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-5 h-5 animate-spin" />
                      <span>جاري تسجيل الطلب وإرساله...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>إرسال طلب الاستشارة والاتصال</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
