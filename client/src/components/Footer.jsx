import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  MessageSquare,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { clinicInfo, therapies, clayTherapies } from '../data/ayurvedaData';

export default function Footer({ onOpenBooking, onOpenDoshaQuiz }) {
  const col1Therapies = therapies.slice(0, 6);
  const col2Clays = clayTherapies;

  return (
    <footer className="bg-[#0b2813] text-[#e8dec8] pt-16 pb-8 border-t-4 border-[#c59d5f] font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Column 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/images/logo.jpg" 
                alt="Ayush Ayurveda Logo" 
                className="w-14 h-14 rounded-full border-2 border-[#c59d5f] object-cover"
              />
              <div>
                <h4 className="font-serif text-white text-xl font-bold tracking-wide m-0">
                  AYUSH AYURVEDA
                </h4>
                <div className="text-[#ffd700] text-xs font-bold tracking-wider uppercase">
                  PANCHAKARANAM • KOMPALLY
                </div>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-[#c2d1c6] leading-relaxed mb-4">
              Your sanctuary of authentic Kerala Ayurveda &amp; Classical Panchakarma healing in Kompally, Hyderabad. Dedicated to natural pain relief, spinal disc recovery, stress relief, and holistic lifestyle wellness.
            </p>

            <div className="flex items-center gap-2 text-[#ffd700] text-xs font-semibold mb-2">
              <Clock size={15} />
              <span>{clinicInfo.timings}</span>
            </div>

            <div className="flex items-center gap-2 text-[#c2d1c6] text-xs">
              <ShieldCheck size={15} className="text-emerald-400" />
              <span>Registered Classical Kerala Ayurvedic Center</span>
            </div>
          </div>

          {/* Column 2: Popular Therapies (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-base font-bold mb-4 pb-2 border-b border-[#c59d5f]/30">
              Popular Therapies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {col1Therapies.map(t => (
                <li key={t.id}>
                  <Link 
                    to="/therapies"
                    className="text-[#c2d1c6] hover:text-[#ffd700] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    • {t.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/therapies"
                  className="text-[#ffd700] font-semibold hover:underline inline-flex items-center gap-1 mt-1 text-xs"
                >
                  <span>View All 35+ Therapies</span>
                  <ArrowRight size={12} />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Moroccan Clays & Specialized Care (2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-white text-base font-bold mb-4 pb-2 border-b border-[#c59d5f]/30">
              Moroccan Clays
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {col2Clays.map(c => (
                <li key={c.id}>
                  <Link 
                    to="/clays"
                    className="text-[#c2d1c6] hover:text-[#ffd700] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    • {c.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link 
                  to="/pricing"
                  className="text-[#c2d1c6] hover:text-[#ffd700] block mt-2"
                >
                  • Complete Pricing Chart
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Say Hello & Address (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-white text-base font-bold mb-4 pb-2 border-b border-[#c59d5f]/30">
              Clinic Location &amp; Contact
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm text-[#c2d1c6] mb-5">
              <div className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#c59d5f] shrink-0 mt-0.5" />
                <div className="leading-snug">
                  <strong className="text-white">Raichandani 5 Star Complex</strong><br />
                  S.No 42, Flat No 303, Opp. Pista House,<br />
                  Pet Basheerabad, Kompally, Hyd - 500067
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone size={15} className="text-[#c59d5f] shrink-0" />
                <a href={`tel:${clinicInfo.phoneRaw}`} className="text-[#ffd700] font-bold hover:underline">
                  {clinicInfo.phones[0]}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail size={15} className="text-[#c59d5f] shrink-0" />
                <a href={`mailto:${clinicInfo.email}`} className="text-[#c2d1c6] hover:text-white truncate">
                  {clinicInfo.email}
                </a>
              </div>
            </div>

            {/* Quick CTAs */}
            <div className="flex items-center gap-2 flex-wrap">
              <a 
                href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent('Namaste Ayush Ayurveda, I would like to inquire about treatments at your Kompally clinic.')}`}
                target="_blank" 
                rel="noreferrer"
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3.5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
              >
                <MessageSquare size={14} />
                <span>WhatsApp Us</span>
              </a>

              <button 
                onClick={onOpenDoshaQuiz}
                className="bg-[#c59d5f]/20 hover:bg-[#c59d5f]/30 border border-[#c59d5f]/50 text-[#ffd700] px-3.5 py-2 rounded-full text-xs font-bold inline-flex items-center gap-1.5 transition-colors"
              >
                <Sparkles size={14} />
                <span>Dosha Test</span>
              </button>
            </div>

          </div>

        </div>

        {/* Bottom Copyright & Footer Links */}
        <div className="border-t border-[#e8dec8]/15 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9cb3a4]">
          <div className="text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-white">Ayush Ayurveda Panchakaranam</strong>. All Rights Reserved. Kompally, Hyderabad.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
            <Link to="/" className="hover:text-[#ffd700] transition-colors">Home</Link>
            <Link to="/about" className="hover:text-[#ffd700] transition-colors">About Us</Link>
            <Link to="/therapies" className="hover:text-[#ffd700] transition-colors">Therapies</Link>
            <Link to="/clays" className="hover:text-[#ffd700] transition-colors">Moroccan Clays</Link>
            <Link to="/pricing" className="hover:text-[#ffd700] transition-colors">Pricing</Link>
            <Link to="/gallery" className="hover:text-[#ffd700] transition-colors">Gallery</Link>
            <Link to="/testimonials" className="hover:text-[#ffd700] transition-colors">Testimonials</Link>
            <Link to="/blog" className="hover:text-[#ffd700] transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-[#ffd700] transition-colors">Contact</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
