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
    <div style={{ position: 'fixed', bottom: '24px', right: '20px', zIndex: 850, display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-end' }}>
      
      {/* Scroll To Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: 'var(--color-primary)',
            color: '#ffffff',
            border: '2px solid var(--color-gold)',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)'; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.backgroundColor = 'var(--color-primary)'; }}
        >
          <ChevronUp size={22} />
        </button>
      )}

      {/* Floating Call Button */}
      <a
        href={`tel:${clinicInfo.phoneRaw}`}
        aria-label="Call Ayush Ayurveda"
        style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: '#0b351a',
          color: '#ffd700',
          border: '2px solid #c59d5f',
          boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
      >
        <Phone size={22} />
      </a>

      {/* Floating WhatsApp Speed Dial */}
      <a
        href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Ayush%20Ayurveda%20Kompally%2C%20I%20would%20like%20to%20book%20a%20consultation%20%2F%20treatment.`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          backgroundColor: '#25D366',
          color: '#ffffff',
          boxShadow: '0 6px 20px rgba(37, 211, 102, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.3s ease',
          animation: 'pulseGlow 2.5s infinite'
        }}
        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseOut={(e) => e.currentTarget.style.transform = 'none'}
      >
        <MessageSquare size={28} />
      </a>

    </div>
  );
}
