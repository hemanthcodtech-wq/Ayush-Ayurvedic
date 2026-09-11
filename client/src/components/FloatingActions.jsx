import React, { useState, useEffect } from 'react';
import { MessageSquare, Phone, ChevronUp } from 'lucide-react';
import { clinicInfo } from '../data/ayurvedaData';

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-5 z-[850] flex flex-col gap-2 sm:gap-3 items-end">
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[var(--color-primary)] text-white border-2 border-[var(--color-gold)] shadow-[0_4px_12px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:bg-[var(--color-primary-dark)] transition-all duration-300 cursor-pointer"
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.backgroundColor = 'var(--color-primary)'; }}
        >
          <ChevronUp size={20} className="sm:w-[22px] sm:h-[22px]" />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${clinicInfo.phoneRaw}`}
        aria-label="Call Ayush Ayurveda"
        className="flex items-center justify-center w-11 h-11 sm:w-[50px] sm:h-[50px] rounded-full bg-[#0b351a] text-[#ffd700] border-2 border-[#c59d5f] shadow-[0_4px_16px_rgba(0,0,0,0.25)] hover:scale-110 transition-all duration-300"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
      >
        <Phone size={18} className="sm:w-[22px] sm:h-[22px]" />
      </a>

      {/* Floating WhatsApp Speed Dial */}
      <a
        href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Ayush%20Ayurveda%20Kompally%2C%20I%20would%20like%20to%20book%20a%20consultation%20%2F%20treatment.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center justify-center w-12 h-12 sm:w-[56px] sm:h-[56px] rounded-full bg-[#25D366] text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:scale-110 transition-all duration-300 animate-[pulse_2.5s_infinite]"
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
      >
        <MessageSquare size={24} className="sm:w-[28px] sm:h-[28px]" />
      </a>

    </div>
  );
}
