import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Send, 
  CheckCircle, 
  ShieldCheck, 
  Phone, 
  MessageSquare,
  HelpCircle,
  Building2,
  Compass,
  Briefcase
} from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustMetrics from './components/TrustMetrics';
import ServicesMatrix from './components/ServicesMatrix';
import ContactSection from './components/ContactSection';
import MapSection from './components/MapSection';
import Footer from './components/Footer';

export default function App() {
  // Navigation & Page State
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedService, setSelectedService] = useState('');
  
  // Consultation Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalName, setModalName] = useState('');
  const [modalPhone, setModalPhone] = useState('');
  const [modalService, setModalService] = useState('خدمات السفر والحج والعمرة');
  const [modalMessage, setModalMessage] = useState('');
  const [modalSubmitting, setModalSubmitting] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const [modalError, setModalError] = useState('');

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'services-travel', 'services-visas', 'services-realestate', 'contact'];
      const scrollPosition = window.scrollY + 300;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to a target element
  const handleScrollToSection = (id: string) => {
    // If it's a sub-service id, we might want to highlight it in the matrix
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // When a service CTA button is clicked, auto-select it in the main contact form
  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offsetTop = contactSection.offsetTop - 100;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  // Submit Handler for the floating full-screen Consultation Modal
  const handleModalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalError('');

    if (!modalName.trim()) {
      setModalError('الرجاء إدخال الاسم بالكامل للبدء.');
      return;
    }
    if (!modalPhone.trim()) {
      setModalError('الرجاء إدخال رقم الهاتف للتواصل.');
      return;
    }

    setModalSubmitting(true);

    setTimeout(() => {
      // Fetch existing leads to append
      const saved = localStorage.getItem('alharraz_leads');
      let currentLeads = [];
      if (saved) {
        try {
          currentLeads = JSON.parse(saved);
        } catch (e) {
          currentLeads = [];
        }
      }

      const newLead = {
        id: 'lead-' + Date.now(),
        fullName: modalName,
        phone: modalPhone,
        serviceType: modalService,
        message: modalMessage || 'طلب استشارة فورية عبر البوابة الذكية للمجموعة',
        status: 'new',
        createdAt: new Date().toISOString()
      };

      const updated = [newLead, ...currentLeads];
      localStorage.setItem('alharraz_leads', JSON.stringify(updated));

      // Trigger success state
      setModalSubmitting(false);
      setModalSuccess(true);
      
      // Reset Modal fields
      setModalName('');
      setModalPhone('');
      setModalMessage('');

      // Auto close modal after successful submission
      setTimeout(() => {
        setIsModalOpen(false);
        setModalSuccess(false);
      }, 4000);
    }, 1000);
  };

  return (
    <div className="bg-white min-h-screen font-sans selection:bg-corporate-green-100 selection:text-corporate-green-950 pb-32 md:pb-0" dir="rtl">
      
      {/* 1. Header & Navigation System */}
      <Navbar 
        onNavClick={handleScrollToSection} 
        onOpenConsultation={() => setIsModalOpen(true)}
        activeSection={activeSection}
      />

      {/* 2. Main Landing Portal (Hero Section) */}
      <Hero 
        onActionClick={handleScrollToSection}
        onOpenConsultation={() => setIsModalOpen(true)}
      />

      {/* 3. Stat Ribbon Section */}
      <TrustMetrics />

      {/* 4. Luxury Service Cards (Bento Matrix) */}
      <ServicesMatrix onSelectService={handleSelectService} />

      {/* 5. Lead Generation & Map Location Column */}
      <ContactSection 
        preSelectedService={selectedService}
        onClearPreSelected={() => setSelectedService('')}
      />

      {/* 5.5. Interactive Geographical Location and Branches Map */}
      <MapSection />

      {/* 6. Professional Dark Footer & Floating Pulse Elements */}
      <Footer 
        onNavClick={handleScrollToSection}
        onOpenConsultation={() => setIsModalOpen(true)}
      />

      {/* 7. Full-Screen Interactive Consultation Modal (Glassmorphic Backdrop) */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            
            {/* Modal Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-slate-950/80 backdrop-blur-md"
              id="modal-backdrop"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="bg-white rounded-3xl max-w-lg w-full p-8 md:p-10 shadow-2xl relative z-10 border border-slate-100 overflow-hidden"
              id="consultation-modal-panel"
            >
              
              {/* Dynamic decorative top bar color */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-corporate-green-700 via-emerald-600 to-corporate-blue-600" />

              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 left-6 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-50 transition-colors cursor-pointer"
                id="modal-close-trigger"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6">
                
                {/* Modal Title */}
                <div className="text-right">
                  <div className="inline-flex items-center gap-1.5 text-corporate-green-800 font-bold text-xs bg-corporate-green-50 px-2.5 py-1 rounded-full mb-2">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>تأكيد الإرسال المباشر للمبيعات</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 leading-tight">
                    احصل على استشارة مخصصة مجاناً
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 mt-1">
                    أدخل معلوماتك الأساسية وسيقوم مستشار العلاقات العامة في مجموعة الحراز بالاتصال بك فوراً.
                  </p>
                </div>

                <AnimatePresence mode="wait">
                  {modalSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 space-y-4"
                    >
                      <div className="w-16 h-16 bg-corporate-green-50 text-corporate-green-700 rounded-full flex items-center justify-center mx-auto shadow-sm border border-corporate-green-100">
                        <CheckCircle className="w-10 h-10" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-900">نشكر تواصلكم مع مجموعة الحراز</h4>
                      <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed">
                        تم تسجيل طلب الاستشارة الخاصة بك بنجاح في لوحة المعاملات المركزية. جاري فرز الطلب وتخصيص مستشار مبيعات لمتابعة كافة متطلباتك.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.form 
                      key="form"
                      onSubmit={handleModalSubmit} 
                      className="space-y-5 text-right"
                    >
                      {/* Error Banner */}
                      {modalError && (
                        <div className="p-4 bg-red-50 border-r-4 border-red-500 text-red-800 text-sm font-semibold rounded-xl flex items-center gap-2">
                          <span className="w-2 h-2 bg-red-600 rounded-full shrink-0" />
                          <span>{modalError}</span>
                        </div>
                      )}

                      {/* Name input */}
                      <div className="space-y-2">
                        <label htmlFor="modalName" className="text-xs font-bold text-slate-700">
                          الاسم الثنائي أو الكامل <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="modalName"
                          value={modalName}
                          onChange={(e) => setModalName(e.target.value)}
                          placeholder="مثال: أحمد عبد اللطيف"
                          className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:bg-white focus:border-corporate-green-800 focus:outline-none"
                        />
                      </div>

                      {/* Phone input */}
                      <div className="space-y-2">
                        <label htmlFor="modalPhone" className="text-xs font-bold text-slate-700">
                          رقم الهاتف / واتساب للتواصل <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="modalPhone"
                          value={modalPhone}
                          onChange={(e) => setModalPhone(e.target.value)}
                          placeholder="مثال: 249912404581+"
                          dir="ltr"
                          className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:bg-white focus:border-corporate-green-800 focus:outline-none text-right"
                        />
                      </div>

                      {/* Service selector */}
                      <div className="space-y-2">
                        <label htmlFor="modalService" className="text-xs font-bold text-slate-700">
                          الخدمة التي ترغب بالاستفسار عنها
                        </label>
                        <select
                          id="modalService"
                          value={modalService}
                          onChange={(e) => setModalService(e.target.value)}
                          className="w-full h-12 px-5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-bold focus:bg-white focus:border-corporate-green-800 focus:outline-none appearance-none cursor-pointer"
                        >
                          <option value="خدمات السفر والحج والعمرة">خدمات السفر والحج والعمرة</option>
                          <option value="التأشيرات والاستقدام الخارجي">التأشيرات والاستقدام الخارجي</option>
                          <option value="الخدمات المحلية وتجديد الإقامة">الخدمات المحلية وتجديد الإقامة</option>
                          <option value="التطوير والتسويق العقاري">التطوير والتسويق العقاري</option>
                          <option value="استشارة عامة / أخرى">استشارة عامة / أخرى</option>
                        </select>
                      </div>

                      {/* Optional message input */}
                      <div className="space-y-2">
                        <label htmlFor="modalMessage" className="text-xs font-bold text-slate-700">
                          رسالتك أو ملاحظتك (اختياري)
                        </label>
                        <textarea
                          id="modalMessage"
                          rows={3}
                          value={modalMessage}
                          onChange={(e) => setModalMessage(e.target.value)}
                          placeholder="مثال: أود معرفة توفر التراخيص أو عروض الأسعار..."
                          className="w-full p-4 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm font-medium focus:bg-white focus:border-corporate-green-800 focus:outline-none resize-none"
                        />
                      </div>

                      {/* Buttons */}
                      <div className="pt-2 flex gap-4">
                        <button
                          type="button"
                          onClick={() => setIsModalOpen(false)}
                          className="w-1/3 h-12 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-sm transition-colors cursor-pointer"
                        >
                          إلغاء
                        </button>
                        <button
                          type="submit"
                          disabled={modalSubmitting}
                          className="w-2/3 h-12 bg-corporate-green-800 hover:bg-corporate-green-700 text-white rounded-xl font-bold text-sm shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          {modalSubmitting ? (
                            <span>جاري معالجة الطلب...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4" />
                              <span>إرسال وتأكيد الطلب</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.form>
                  )}
                </AnimatePresence>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
