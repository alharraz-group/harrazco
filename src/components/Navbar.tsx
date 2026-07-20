import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, ShieldCheck, HelpCircle } from 'lucide-react';

interface NavbarProps {
  onNavClick: (sectionId: string) => void;
  onOpenConsultation: () => void;
  activeSection: string;
}

export default function Navbar({ onNavClick, onOpenConsultation, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'الرئيسية' },
    { id: 'services-travel', label: 'السفر والحج' },
    { id: 'services-visas', label: 'الاستقدام والتأشيرات' },
    { id: 'services-realestate', label: 'التطوير العقاري' },
    { id: 'contact', label: 'اتصل بنا' }
  ];

  const handleLinkClick = (id: string) => {
    setIsOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <header
        id="corporate-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100'
            : 'bg-white shadow-sm md:bg-transparent md:shadow-none'
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-5 md:px-8 h-20 md:h-auto md:py-5">
          <div className="flex items-center justify-between h-full">
            
            {/* Right: Brand Logo & Title */}
            <div 
              onClick={() => handleLinkClick('hero')}
              className="flex items-center gap-3 cursor-pointer group"
              id="brand-logo-container"
            >
              <div className="w-12 h-12 rounded-xl overflow-hidden shadow-md border border-slate-100 bg-white flex items-center justify-center p-0.5 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src="https://i.postimg.cc/PpLMFxD7/image.jpg" 
                  alt="Al-Harraz Logo" 
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-right">
                <span className="text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-none">
                  مجموعة الحراز
                </span>
                <span className="text-[10px] md:text-xs font-semibold text-corporate-green-800 mt-1">
                  للخدمات المتكاملة
                </span>
              </div>
            </div>

            {/* Center: Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-8" id="desktop-navigation">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`relative text-sm font-medium py-2 transition-colors duration-200 cursor-pointer ${
                    activeSection === link.id
                      ? 'text-corporate-green-800 font-semibold'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-corporate-green-700 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Left: Desktop Call-To-Action & Mobile Trigger */}
            <div className="flex items-center gap-4" id="header-cta-actions">
              <a
                href="tel:+249112705718"
                className="hidden xl:flex items-center gap-2 text-sm text-slate-600 hover:text-corporate-blue-700 transition-colors"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-corporate-blue-600" />
                <span>+249 112 705 718</span>
              </a>

              <button
                onClick={onOpenConsultation}
                className="hidden md:flex items-center gap-2 bg-corporate-green-800 hover:bg-corporate-green-700 text-white px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 cursor-pointer"
                id="btn-nav-consultation"
              >
                <ShieldCheck className="w-4 h-4" />
                <span>استشارة مجانية</span>
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                aria-label="Toggle Menu"
                id="mobile-menu-toggle"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-xs z-40 md:hidden"
              id="mobile-drawer-backdrop"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[80%] max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col justify-between md:hidden"
              id="mobile-drawer-panel"
              dir="rtl"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://i.postimg.cc/PpLMFxD7/image.jpg"
                      alt="Al-Harraz Logo"
                      className="w-10 h-10 object-contain rounded-lg"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex flex-col text-right">
                      <span className="font-bold text-slate-900 text-base leading-tight">مجموعة الحراز</span>
                      <span className="text-[10px] text-corporate-green-800">للخدمات المتكاملة</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-slate-500 hover:bg-slate-50 transition-colors"
                    id="mobile-drawer-close"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4 mt-8" id="mobile-navigation-links">
                  {navLinks.map((link) => (
                    <button
                      key={link.id}
                      onClick={() => handleLinkClick(link.id)}
                      className={`text-right text-base font-semibold py-3 px-4 rounded-xl transition-all cursor-pointer ${
                        activeSection === link.id
                          ? 'bg-corporate-green-50 text-corporate-green-800'
                          : 'text-slate-700 hover:bg-slate-50'
                      }`}
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>

              <div className="pt-6 border-t border-slate-100 flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <span className="text-xs text-slate-400 font-medium">للاتصال الفوري:</span>
                  <a
                    href="tel:+249112705718"
                    className="text-sm font-bold text-slate-800 hover:text-corporate-blue-700 transition-colors"
                    dir="ltr"
                  >
                    +249 112 705 718
                  </a>
                  <a
                    href="tel:+249900740722"
                    className="text-sm font-bold text-slate-800 hover:text-corporate-blue-700 transition-colors"
                    dir="ltr"
                  >
                    +249 900 740 722
                  </a>
                </div>

                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenConsultation();
                  }}
                  className="w-full bg-corporate-green-800 hover:bg-corporate-green-700 text-white py-3 rounded-xl font-bold shadow-md text-center transition-colors cursor-pointer"
                  id="mobile-btn-consultation"
                >
                  طلب استشارة مجانية
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
