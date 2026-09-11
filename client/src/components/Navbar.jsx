import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { 
  Phone, 
  Clock, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Calendar, 
  Sparkles,
  Activity,
  Droplets,
  ShieldCheck,
  Flame,
  Wind,
  Layers,
  Heart,
  BookOpen,
  MessageSquare,
  ArrowRight
} from 'lucide-react';
import { clinicInfo, therapyCategories, therapies, clayTherapies } from '../data/ayurvedaData';

export default function Navbar({ onOpenBooking, onOpenDoshaQuiz }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [therapiesDropdownOpen, setTherapiesDropdownOpen] = useState(false);
  const [moreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [mobileTherapiesOpen, setMobileTherapiesOpen] = useState(false);
  const [mobileClaysOpen, setMobileClaysOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();
  const therapiesRef = useRef(null);
  const moreRef = useRef(null);

  // Detect scroll for sticky styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setTherapiesDropdownOpen(false);
    setMoreDropdownOpen(false);
  }, [location.pathname]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (therapiesRef.current && !therapiesRef.current.contains(e.target)) {
        setTherapiesDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(e.target)) {
        setMoreDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const categorizedTherapies = {
    massages: therapies.filter(t => t.category === 'massages').slice(0, 4),
    kizhi: therapies.filter(t => t.category === 'kizhi').slice(0, 4),
    dhara: therapies.filter(t => t.category === 'dhara').slice(0, 4),
    vasti: therapies.filter(t => t.category === 'vasti').slice(0, 4),
  };

  const navLinkClass = ({ isActive }) => 
    `relative py-2 text-[14px] font-medium transition-all duration-300 flex items-center gap-1.5 whitespace-nowrap ${
      isActive 
        ? 'text-[#0b351a] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#c59d5f] after:rounded-full' 
        : 'text-[#2c332e] hover:text-[#0b351a]'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full font-sans transition-all duration-300">
      
      {/* 1. TOP INFORMATION & EMERGENCY HOTLINE BAR */}
      <div className="bg-[#0b351a] text-[#e8dec8] text-[12px] py-1.5 px-4 border-b border-[#c59d5f]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          
          {/* Left Info: Timings & Location */}
          <div className="flex items-center gap-4 text-xs font-normal">
            <span className="hidden sm:flex items-center gap-1.5">
              <Clock size={13} className="text-[#c59d5f]" />
              <span>{clinicInfo.timings}</span>
            </span>
            <span className="flex items-center gap-1.5 truncate max-w-[260px] md:max-w-none">
              <MapPin size={13} className="text-[#c59d5f] shrink-0" />
              <span className="truncate">Raichandani 5 Star Complex, Kompally, Hyderabad</span>
            </span>
          </div>

          {/* Right Info: Dosha Quiz & Direct Phone */}
          <div className="flex items-center gap-3 ml-auto text-xs mt-1 sm:mt-0">
            <button 
              onClick={onOpenDoshaQuiz}
              className="hidden sm:inline-flex items-center gap-1.5 bg-[#c59d5f]/20 hover:bg-[#c59d5f]/30 text-[#f7e7ce] px-3 py-1 rounded-full border border-[#c59d5f]/40 transition-colors font-medium text-[11px]"
            >
              <Sparkles size={12} className="text-[#ffd700]" />
              <span>Prakriti Quiz</span>
            </button>

            <a 
              href={`tel:${clinicInfo.phoneRaw}`} 
              className="inline-flex items-center gap-1.5 font-bold text-[#ffd700] hover:text-white transition-colors bg-[#082813] sm:bg-transparent px-2 sm:px-0 py-0.5 rounded sm:rounded-none"
            >
              <Phone size={13} className="animate-pulse text-[#ffd700]" />
              <span>{clinicInfo.phones[0]}</span>
            </a>
          </div>

        </div>
      </div>

      {/* 2. MAIN LUXURY NAVBAR */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#FFFDF9]/95 backdrop-blur-md shadow-md border-b border-[#e8dec8]' 
            : 'bg-[#FFFDF9] border-b border-[#e8dec8]/80 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-[72px]">
          
          {/* Brand Logo & Taglines */}
          <Link 
            to="/" 
            className="flex items-center gap-2 sm:gap-3 group shrink min-w-0 text-decoration-none"
          >
            <div className="relative shrink-0">
              <img 
                src="/images/logo.jpg" 
                alt="Ayush Ayurveda Logo" 
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#c59d5f] object-cover shadow-sm transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#0b351a] rounded-full border border-[#c59d5f] flex items-center justify-center text-[8px] text-[#ffd700]">
                ✦
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-serif font-bold text-sm sm:text-lg leading-tight text-[#0b351a] tracking-wide group-hover:text-[#062411] transition-colors truncate">
                AYUSH AYURVEDA
              </span>
              <span className="text-[8px] sm:text-[10px] font-bold text-[#a67c38] tracking-[1.5px] uppercase truncate">
                Panchakaranam • Kompally
              </span>
              <span className="text-[7px] sm:text-[9.5px] text-[#666] italic leading-none hidden xs:block truncate">
                Pain &amp; Lifestyle Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (>= 1100px) */}
          <div className="hidden xl:flex items-center gap-6">
            
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink to="/about" className={navLinkClass}>
              About Us
            </NavLink>

            {/* Therapies Mega-Menu Dropdown */}
            <div 
              ref={therapiesRef}
              className="relative"
              onMouseEnter={() => setTherapiesDropdownOpen(true)}
              onMouseLeave={() => setTherapiesDropdownOpen(false)}
            >
              <NavLink 
                to="/therapies" 
                className={({ isActive }) => 
                  `py-2 text-[14px] font-medium transition-all duration-300 flex items-center gap-1 ${
                    isActive 
                      ? 'text-[#0b351a] font-bold after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2.5px] after:bg-[#c59d5f] after:rounded-full' 
                      : 'text-[#2c332e] hover:text-[#0b351a]'
                  }`
                }
              >
                <span>Therapies</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${therapiesDropdownOpen ? 'rotate-180 text-[#c59d5f]' : 'text-stone-400'}`} />
              </NavLink>

              {/* Mega Menu Flyout */}
              {therapiesDropdownOpen && (
                <div className="absolute top-full -left-48 w-[780px] bg-white rounded-2xl border border-[#e8dec8] shadow-2xl p-6 grid grid-cols-4 gap-5 z-50 animate-fadeIn">
                  
                  {/* Col 1: Massages */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0b351a] pb-2 mb-2 border-b border-stone-100">
                      <Activity size={14} className="text-[#c59d5f]" />
                      <span>Body Massages</span>
                    </div>
                    <ul className="space-y-1.5">
                      {categorizedTherapies.massages.map(t => (
                        <li key={t.id}>
                          <Link 
                            to="/therapies" 
                            className="text-[12.5px] text-stone-600 hover:text-[#0b351a] hover:font-medium block py-0.5 transition-colors line-clamp-1"
                          >
                            {t.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 2: Kizhi */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0b351a] pb-2 mb-2 border-b border-stone-100">
                      <Flame size={14} className="text-[#c59d5f]" />
                      <span>Kizhi (Potli)</span>
                    </div>
                    <ul className="space-y-1.5">
                      {categorizedTherapies.kizhi.map(t => (
                        <li key={t.id}>
                          <Link 
                            to="/therapies" 
                            className="text-[12.5px] text-stone-600 hover:text-[#0b351a] hover:font-medium block py-0.5 transition-colors line-clamp-1"
                          >
                            {t.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 3: Dhara & Vasti */}
                  <div>
                    <div className="flex items-center gap-1.5 text-xs font-bold text-[#0b351a] pb-2 mb-2 border-b border-stone-100">
                      <Droplets size={14} className="text-[#c59d5f]" />
                      <span>Dhara &amp; Vasti</span>
                    </div>
                    <ul className="space-y-1.5">
                      {categorizedTherapies.dhara.slice(0, 2).concat(categorizedTherapies.vasti.slice(0, 2)).map(t => (
                        <li key={t.id}>
                          <Link 
                            to="/therapies" 
                            className="text-[12.5px] text-stone-600 hover:text-[#0b351a] hover:font-medium block py-0.5 transition-colors line-clamp-1"
                          >
                            {t.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Col 4: Quick Action Panel */}
                  <div className="bg-[#fcfaf6] border border-[#e8dec8] rounded-xl p-4 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#a67c38] block mb-1">
                        Panchakarma Care
                      </span>
                      <h4 className="font-serif font-bold text-[#0b351a] text-sm leading-tight mb-2">
                        Pain &amp; Lifestyle Management
                      </h4>
                      <p className="text-[11.5px] text-stone-500 leading-snug mb-3">
                        Specializing in Sciatica, Spondylosis, Arthritis &amp; Complete Body Detoxing.
                      </p>
                    </div>

                    <Link 
                      to="/therapies"
                      className="inline-flex items-center justify-center gap-1.5 bg-[#0b351a] hover:bg-[#124b26] text-white text-[11.5px] font-medium py-2 px-3 rounded-lg transition-colors shadow-sm"
                    >
                      <span>Explore All 35+ Therapies</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>

                </div>
              )}
            </div>

            {/* Moroccan Clays Link with Badge */}
            <NavLink to="/clays" className={navLinkClass}>
              <span className="flex items-center gap-1">
                <Sparkles size={13} className="text-[#c59d5f]" />
                <span>Moroccan Clays</span>
              </span>
              <span className="px-1.5 py-0.5 rounded-full bg-amber-500/15 text-[#a67c38] text-[9px] font-bold border border-amber-500/30">
                19 Clays
              </span>
            </NavLink>

            <NavLink to="/pricing" className={navLinkClass}>
              Pricing
            </NavLink>

            <NavLink to="/gallery" className={navLinkClass}>
              Gallery
            </NavLink>

            {/* More Links Dropdown (Testimonials, Blog, Prakriti) */}
            <div 
              ref={moreRef}
              className="relative"
              onMouseEnter={() => setMoreDropdownOpen(true)}
              onMouseLeave={() => setMoreDropdownOpen(false)}
            >
              <button 
                className="py-2 text-[14px] font-medium text-[#2c332e] hover:text-[#0b351a] flex items-center gap-1 transition-colors"
              >
                <span>More</span>
                <ChevronDown size={14} className={`transition-transform duration-200 ${moreDropdownOpen ? 'rotate-180 text-[#c59d5f]' : 'text-stone-400'}`} />
              </button>

              {moreDropdownOpen && (
                <div className="absolute top-full right-0 w-52 bg-white rounded-xl border border-[#e8dec8] shadow-xl py-2 z-50 animate-fadeIn">
                  <NavLink 
                    to="/testimonials" 
                    className="block px-4 py-2 text-xs text-stone-700 hover:bg-[#faf7f2] hover:text-[#0b351a] font-medium transition-colors"
                  >
                    ★ Patient Testimonials
                  </NavLink>
                  <NavLink 
                    to="/blog" 
                    className="block px-4 py-2 text-xs text-stone-700 hover:bg-[#faf7f2] hover:text-[#0b351a] font-medium transition-colors"
                  >
                    ✦ Ayurveda Wellness Blog
                  </NavLink>
                  <div className="border-t border-stone-100 my-1" />
                  <button 
                    onClick={() => {
                      setMoreDropdownOpen(false);
                      onOpenDoshaQuiz();
                    }}
                    className="w-full text-left px-4 py-2 text-xs text-[#a67c38] hover:bg-[#faf7f2] font-semibold flex items-center gap-1.5 transition-colors"
                  >
                    <Sparkles size={13} className="text-[#c59d5f]" />
                    <span>Know Your Dosha Quiz</span>
                  </button>
                </div>
              )}
            </div>

            <NavLink to="/contact" className={navLinkClass}>
              Contact
            </NavLink>

          </div>

          {/* Right Action: Book Appointment CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            
            <button 
              onClick={() => onOpenBooking ? onOpenBooking() : navigate('/book-appointment')}
              className="btn-primary !px-3 !py-1.5 sm:!py-2.5 sm:!px-5 rounded-full text-[11px] sm:text-[13px] font-semibold flex items-center gap-1 sm:gap-2 shadow-md hover:shadow-lg transition-all duration-300 shrink-0"
            >
              <Calendar size={13} className="sm:w-[15px] sm:h-[15px] shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">Book Appointment</span>
              <span className="sm:hidden whitespace-nowrap">Book Now</span>
            </button>

            {/* Mobile / Tablet Drawer Toggle Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-xl border border-[#e8dec8] text-[#0b351a] hover:bg-[#faf7f2] transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>

        </div>
      </nav>

      {/* 3. MOBILE & TABLET SLIDE-OUT LUXURY DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[90px] sm:top-[100px] bottom-0 bg-stone-950/60 backdrop-blur-sm z-40 animate-fadeIn overflow-y-auto">
          <div className="bg-[#FFFDF9] border-b border-[#e8dec8] p-5 shadow-2xl max-h-screen overflow-y-auto pb-20">
            
            <div className="flex flex-col space-y-1">
              
              <NavLink 
                to="/" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-[#0b351a]/10 text-[#0b351a]' : 'text-stone-700 hover:bg-stone-100'}`}
              >
                Home
              </NavLink>

              <NavLink 
                to="/about" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-[#0b351a]/10 text-[#0b351a]' : 'text-stone-700 hover:bg-stone-100'}`}
              >
                About Us
              </NavLink>

              {/* Mobile Therapies Collapsible */}
              <div>
                <button 
                  onClick={() => setMobileTherapiesOpen(!mobileTherapiesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-stone-700 hover:bg-stone-100"
                >
                  <span className="flex items-center gap-2">
                    <Activity size={16} className="text-[#c59d5f]" />
                    <span>Therapies Directory</span>
                  </span>
                  <ChevronDown size={16} className={`transition-transform ${mobileTherapiesOpen ? 'rotate-180' : ''}`} />
                </button>

                {mobileTherapiesOpen && (
                  <div className="pl-6 pr-2 py-2 space-y-1 bg-[#fbf9f5] rounded-xl my-1 border border-[#e8dec8]/60">
                    <Link 
                      to="/therapies" 
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-bold text-[#0b351a]"
                    >
                      ➔ View All 35+ Therapies &amp; Packages
                    </Link>
                    {therapies.slice(0, 6).map(t => (
                      <Link
                        key={t.id}
                        to="/therapies"
                        onClick={() => setMobileMenuOpen(false)}
                        className="block py-1 text-xs text-stone-600 hover:text-[#0b351a]"
                      >
                        • {t.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Moroccan Clays Link */}
              <NavLink 
                to="/clays" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-amber-500/15 text-[#0b351a]' : 'text-stone-700 hover:bg-stone-100'}`}
              >
                <span className="flex items-center gap-2">
                  <Sparkles size={16} className="text-[#c59d5f]" />
                  <span>Moroccan &amp; Natural Clays</span>
                </span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-[#a67c38] text-[10px] font-bold">
                  19 Clays
                </span>
              </NavLink>

              <NavLink 
                to="/pricing" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-[#0b351a]/10 text-[#0b351a]' : 'text-stone-700 hover:bg-stone-100'}`}
              >
                Pricing Chart
              </NavLink>

              <NavLink 
                to="/gallery" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-[#0b351a]/10 text-[#0b351a]' : 'text-stone-700 hover:bg-stone-100'}`}
              >
                Clinic &amp; Treatment Gallery
              </NavLink>

              <NavLink 
                to="/testimonials" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-[#0b351a]/10 text-[#0b351a]' : 'text-stone-700 hover:bg-stone-100'}`}
              >
                Patient Testimonials
              </NavLink>

              <NavLink 
                to="/blog" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-[#0b351a]/10 text-[#0b351a]' : 'text-stone-700 hover:bg-stone-100'}`}
              >
                Ayurveda Health Blog
              </NavLink>

              <NavLink 
                to="/contact" 
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) => `block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${isActive ? 'bg-[#0b351a]/10 text-[#0b351a]' : 'text-stone-700 hover:bg-stone-100'}`}
              >
                Contact &amp; Location (Kompally)
              </NavLink>

            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-4 mt-3 border-t border-[#e8dec8] space-y-2.5">
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDoshaQuiz();
                }}
                className="w-full py-2.5 px-4 rounded-xl bg-[#c59d5f]/15 border border-[#c59d5f]/40 text-[#a67c38] font-bold text-xs flex items-center justify-center gap-2"
              >
                <Sparkles size={14} className="text-[#c59d5f]" />
                <span>Take Prakriti Dosha Quiz</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a 
                  href={`tel:${clinicInfo.phoneRaw}`}
                  className="py-2.5 px-3 rounded-xl bg-[#0b351a] text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <Phone size={13} />
                  <span>Call Us</span>
                </a>

                <a 
                  href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent('Namaste Ayush Ayurveda, I want to book an appointment at your Kompally clinic.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-1.5"
                >
                  <MessageSquare size={13} />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
}
