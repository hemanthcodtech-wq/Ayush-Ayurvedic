import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  Award, 
  Users, 
  HeartHandshake, 
  Activity, 
  Star, 
  ChevronRight, 
  ChevronLeft,
  CheckCircle2,
  Droplets,
  Flame,
  Zap,
  PhoneCall,
  ShieldPlus,
  HeartPulse
} from 'lucide-react';
import { clinicInfo, panchakarmaPillars, therapies, testimonials, blogPosts, galleryPhotos } from '../data/ayurvedaData';
import ClayTherapiesSection from '../components/ClayTherapiesSection';
import SEO from '../components/SEO';

export default function HomePage({ setActivePage, onOpenBooking, onSelectTherapy, onOpenDoshaQuiz }) {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [animatedWordIndex, setAnimatedWordIndex] = useState(0);

  const heroSlides = [
    {
      title: "Revitalize Your Life With Authentic Kerala Ayurveda",
      subtitle: "Ancient healing wisdom from God's Own Country now at Raichandani 5 Star Complex, Kompally.",
      bgImage: "/images/kizhi.jpg",
      tag: "Classical Panchakarma & Pain Care"
    },
    {
      title: "Restore Balance With Time-Tested Healing Therapies",
      subtitle: "Personalized herbal decoctions, medicated oils, and Vaidya care for lasting wellness.",
      bgImage: "/images/pada_abhyanga.jpg",
      tag: "Specialized Spine & Sciatica Relief"
    },
    {
      title: "Experience Deep Inner Peace & Complete Mind Detoxing",
      subtitle: "Rejuvenate tired nerves with authentic Shirodhara, Nasyam, and herbal steam therapy.",
      bgImage: "/images/nasyam.png",
      tag: "Stress & Lifestyle Management"
    }
  ];

  const rotatingWords = ["beauty.", "care.", "soul.", "healing."];

  // Auto-slide hero
  useEffect(() => {
    const heroTimer = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(heroTimer);
  }, [heroSlides.length]);

  // Word rotator
  useEffect(() => {
    const wordTimer = setInterval(() => {
      setAnimatedWordIndex(prev => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(wordTimer);
  }, [rotatingWords.length]);

  const featuredTherapies = therapies.filter(t => t.featured).slice(0, 6);

  return (
    <div className="home-page overflow-hidden">
      <SEO 
        title="Home" 
        description="Ayush Ayurveda Panchakaranam offers authentic Kerala Ayurveda & 35+ holistic therapies in Kompally, Hyderabad. Relieve pain and rejuvenate naturally."
      />
      
      {/* 1. HERO SLIDER SECTION */}
      <section className="relative h-[85vh] min-h-[500px] md:h-[640px] overflow-hidden bg-[#0b351a]">
        {heroSlides.map((slide, idx) => (
          <div
            key={idx}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: currentSlide === idx ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              zIndex: currentSlide === idx ? 1 : 0
            }}
          >
            {/* Background Image with Overlay */}
            <div 
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `url(${slide.bgImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'brightness(0.35)',
                transform: currentSlide === idx ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 6s ease'
              }}
            />

            {/* Slide Content */}
            <div className="container" style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 2 }}>
              <div style={{ maxWidth: '720px' }}>
                
                <span 
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    backgroundColor: 'rgba(197, 157, 95, 0.25)',
                    border: '1px solid var(--color-gold)',
                    color: '#ffd700',
                    padding: '6px 18px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.85rem',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    textTransform: 'uppercase',
                    marginBottom: '18px',
                    backdropFilter: 'blur(4px)'
                  }}
                >
                  <Sparkles size={14} color="#ffd700" />
                  <span>{slide.tag}</span>
                </span>

                <h1 style={{ color: '#ffffff', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', lineHeight: '1.2', marginBottom: '18px', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                  {slide.title}
                </h1>

                <p style={{ color: '#e0ece3', fontSize: '1.15rem', marginBottom: '32px', lineHeight: '1.6', maxWidth: '620px' }}>
                  {slide.subtitle}
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <button 
                    onClick={onOpenBooking}
                    className="btn-gold animate-pulse-gold"
                    style={{ padding: '14px 32px', fontSize: '1rem' }}
                  >
                    <Calendar size={18} />
                    <span>Book Appointment</span>
                  </button>

                  <button 
                    onClick={() => {
                      setActivePage('therapies');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="btn-outline-white"
                    style={{ padding: '14px 28px', fontSize: '1rem' }}
                  >
                    <span>Explore Therapies</span>
                    <ArrowRight size={18} />
                  </button>
                </div>

              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div style={{ position: 'absolute', bottom: '24px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px', zIndex: 10 }}>
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: currentSlide === i ? '32px' : '10px',
                height: '10px',
                borderRadius: '9999px',
                backgroundColor: currentSlide === i ? '#ffd700' : 'rgba(255,255,255,0.4)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* 2. TOP TRUST BADGES STRIP */}
      <section className="bg-white border-b border-[#e8dec8] py-6 shadow-sm">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary-dark)', fontSize: '0.96rem' }}>Authentic Kerala Vaidyas</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Certified Panchakarma doctors</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(197, 157, 95, 0.15)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Droplets size={26} />
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary-dark)', fontSize: '0.96rem' }}>100% Herbal Thailams</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Pure medicated decoctions &amp; oils</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Users size={26} />
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary-dark)', fontSize: '0.96rem' }}>Kerala-Trained Therapists</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Authentic rhythmic marma strokes</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundColor: 'rgba(197, 157, 95, 0.15)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Activity size={26} />
              </div>
              <div>
                <div style={{ fontWeight: '700', color: 'var(--color-primary-dark)', fontSize: '0.96rem' }}>Pain &amp; Lifestyle Care</div>
                <div style={{ fontSize: '0.8rem', color: '#666' }}>Sciatica, spine, knee &amp; stress care</div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. WELCOME & ABOUT ESSENCE SECTION */}
      <section className="py-12 md:py-20 bg-[#fbf9f5]">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            
            {/* Visual Collage */}
            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid #ffffff' }}>
                <img 
                  src="/images/pada_abhyanga.jpg" 
                  alt="Authentic Kerala Ayurvedic Therapy" 
                  style={{ width: '100%', height: '380px', objectFit: 'cover', display: 'block' }}
                />
              </div>
              
              {/* Floating Badge Card */}
              <div 
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:transform-none sm:right-[-15px] bg-white rounded-xl p-3 sm:p-4 shadow-lg border-2 border-[#c59d5f] flex items-center gap-3 sm:gap-3 w-11/12 sm:w-auto max-w-[260px] z-10"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full overflow-hidden border border-[#c59d5f]/50 bg-white">
                  <img 
                    src="/images/logo.jpg" 
                    alt="Ayush Logo Badge" 
                    className="w-full h-full object-cover scale-[1.08] object-center"
                  />
                </div>
                <div>
                  <div className="font-bold text-[#0b351a] text-sm sm:text-[0.92rem]">Panchakarma Center</div>
                  <div className="text-xs sm:text-[0.78rem] text-[#666]">Kompally • Hyderabad</div>
                </div>
              </div>
            </div>

            {/* Text Description */}
            <div>
              <span className="section-badge">Welcome to Ayush Ayurveda</span>
              <h2 style={{ fontSize: '2.3rem', marginBottom: '16px', color: 'var(--color-primary-dark)' }}>
                Discover the Essence of Authentic Kerala Ayurveda in Kompally
              </h2>

              <p style={{ fontSize: '1.02rem', color: '#444', lineHeight: '1.7', marginBottom: '16px' }}>
                Welcome to <strong>Ayush Ayurveda Panchakaranam</strong>, your premier sanctuary of authentic Kerala Ayurveda and holistic healing at <strong>Raichandani 5 Star Complex, Pet Basheerabad, Kompally, Hyderabad</strong>.
              </p>

              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.65', marginBottom: '24px' }}>
                Rooted in the unbroken lineage of Kerala Ayurveda, we specialize in non-surgical recovery from chronic back pain, sciatica, slip discs, cervical spondylosis, arthritis, and lifestyle stress. Every therapy is customized following classical diagnostic protocols (Nadi Pariksha) to restore harmonious balance across your Vata, Pitta, and Kapha energies.
              </p>

              {/* Timings Highlight Card */}
              <div 
                style={{
                  backgroundColor: 'var(--color-sand)',
                  borderLeft: '4px solid var(--color-primary)',
                  padding: '16px 20px',
                  borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                  marginBottom: '28px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px'
                }}
              >
                <Clock size={28} color="var(--color-primary)" />
                <div>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-gold-dark)', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    Clinic Consultation &amp; Therapy Hours
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--color-primary-dark)' }}>
                    Mon – Sun: 10:00 AM – 8:00 PM
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
                <button 
                  onClick={() => {
                    setActivePage('about');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="btn-primary"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight size={16} />
                </button>
                <button 
                  onClick={onOpenDoshaQuiz}
                  className="btn-outline"
                >
                  <Sparkles size={16} color="var(--color-gold-dark)" />
                  <span>Take Dosha Quiz</span>
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 3.5 DOCTOR CONSULTATION HIGHLIGHT */}
      <section className="bg-[#0b2813] border-y-4 border-[#c59d5f] py-12 md:py-16">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 shadow-2xl">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#c59d5f]/20 border border-[#c59d5f]/50 rounded-full text-[#ffd700] text-xs font-bold uppercase tracking-wider mb-4">
                <Sparkles size={14} /> Expert Diagnosis
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4 leading-tight">
                Ayurvedic Vaidya Consultation & Nadi Pariksha
              </h2>
              <p className="text-[#c2d1c6] text-lg max-w-2xl leading-relaxed mb-0">
                True healing begins with accurate diagnosis. Our certified Kerala Vaidyas use classical Nadi Pariksha (Pulse Diagnosis) to uncover the root cause of your ailments and prescribe personalized treatments, diet, and lifestyle adjustments.
              </p>
            </div>
            <div className="shrink-0 w-full md:w-auto">
              <button 
                onClick={() => navigate('/book-appointment')}
                className="w-full md:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-[#ffd700] to-[#c59d5f] text-[#0b2813] px-8 py-4 rounded-xl font-bold text-[15px] shadow-[0_0_20px_rgba(197,157,95,0.4)] hover:scale-105 transition-transform"
              >
                <Calendar size={18} />
                <span>Book a Consultation</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLASSICAL 5 PANCHAKARMA PILLARS SECTION */}
      <section className="py-12 md:py-20 bg-white border-y border-[#e8dec8]">
        <div className="container">
          
          <div className="section-title-wrap">
            <span className="section-badge">Five Pillars of Purification</span>
            <h2 className="section-title">Classical Panchakarma Treatments</h2>
            <div className="divider-ornament">
              <span className="divider-ornament-icon">🌿</span>
            </div>
            <p className="section-subtitle">
              The sacred five-fold detoxification procedures described in classical Ayurvedic texts, designed to eliminate root metabolic toxins and reverse chronic ailments.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
            {panchakarmaPillars.map((pillar) => {
              const IconMap = {
                "droplets": Droplets,
                "flame": Flame,
                "shield-plus": ShieldPlus,
                "sparkles": Sparkles,
                "heart-pulse": HeartPulse
              };
              const IconComponent = IconMap[pillar.icon] || Sparkles;
              
              return (
              <div 
                key={pillar.id}
                style={{
                  backgroundColor: 'var(--color-sand)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  padding: '24px 20px',
                  textAlign: 'center',
                  transition: 'var(--transition)',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--color-gold)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--color-primary)', 
                  color: '#ffffff', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center', 
                  margin: '0 auto 14px',
                  border: '2px solid var(--color-gold)'
                }}>
                  <IconComponent size={24} color="#ffd700" />
                </div>

                <div style={{ fontSize: '0.8rem', color: 'var(--color-gold-dark)', fontWeight: '700' }}>
                  {pillar.sanskrit}
                </div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', margin: '4px 0 2px' }}>
                  {pillar.title}
                </h3>
                <div style={{ fontSize: '0.78rem', color: '#666', fontStyle: 'italic', marginBottom: '12px' }}>
                  {pillar.subtitle}
                </div>

                <p style={{ fontSize: '0.86rem', color: '#555', lineHeight: '1.5', marginBottom: '14px' }}>
                  {pillar.description}
                </p>

                <div style={{ borderTop: '1px dashed var(--color-border)', paddingTop: '10px', textAlign: 'left' }}>
                  <div style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '4px' }}>Key Indications:</div>
                  {pillar.indications.slice(0, 2).map((ind, i) => (
                    <div key={i} style={{ fontSize: '0.78rem', color: '#666', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle2 size={12} color="var(--color-gold-dark)" />
                      <span>{ind}</span>
                    </div>
                  ))}
                </div>

              </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. FEATURED THERAPIES SHOWCASE */}
      <section className="py-12 md:py-20 bg-[#fbf9f5]">
        <div className="container">
          
          <div className="section-title-wrap">
            <span className="section-badge">Proven Kerala Therapies</span>
            <h2 className="section-title">Ayurvedic Massage &amp; Pain Therapies</h2>
            <div className="divider-ornament">
              <span className="divider-ornament-icon">✨</span>
            </div>
            <p className="section-subtitle">
              Ground-breaking traditional techniques formulated to soothe nerve compression, lubricate arthritic joints, calm restless sleep, and restore youthfulness.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', marginBottom: '40px' }}>
            {featuredTherapies.map((therapy) => (
              <div 
                key={therapy.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'var(--transition)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.borderColor = 'var(--color-primary-light)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                  e.currentTarget.style.borderColor = 'var(--color-border)';
                }}
              >
                {/* Therapy Image */}
                <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                  <img 
                    src={therapy.image} 
                    alt={therapy.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    backgroundColor: 'rgba(11, 53, 26, 0.85)',
                    color: '#ffd700',
                    fontSize: '0.78rem',
                    fontWeight: '700',
                    padding: '4px 12px',
                    borderRadius: 'var(--radius-full)',
                    backdropFilter: 'blur(4px)'
                  }}>
                    {therapy.categoryName}
                  </div>

                </div>

                {/* Body Content */}
                <div style={{ padding: '22px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#777', marginBottom: '6px' }}>
                    <Clock size={14} color="var(--color-gold-dark)" />
                    <span>Duration: {therapy.duration}</span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
                    {therapy.name}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.55', marginBottom: '18px', flex: 1 }}>
                    {therapy.shortDesc}
                  </p>

                  <div style={{ display: 'flex', gap: '10px', marginTop: 'auto' }}>
                    <Link 
                      to={`/therapies/${therapy.id}`}
                      className="btn-outline text-center flex items-center justify-center"
                      style={{ padding: '8px 16px', fontSize: '0.85rem', flex: 1, textDecoration: 'none' }}
                    >
                      Read Details
                    </Link>
                    <button 
                      onClick={() => onOpenBooking(therapy.id)}
                      className="btn-primary"
                      style={{ padding: '8px 16px', fontSize: '0.85rem', flex: 1 }}
                    >
                      Book Now
                    </button>
                  </div>

                </div>

              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => {
                setActivePage('therapies');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-gold"
              style={{ padding: '14px 36px', fontSize: '1rem' }}
            >
              <span>View All 30+ Therapies</span>
              <ArrowRight size={18} />
            </button>
          </div>

        </div>
      </section>

      {/* 5.5 MOROCCAN & NATURAL CLAY THERAPIES WITH INTERACTIVE DROPDOWN */}
      <div id="home-clays-section">
        <ClayTherapiesSection 
          onOpenBooking={onOpenBooking} 
          setActivePage={setActivePage} 
          isStandalone={false}
        />
      </div>

      {/* 6. ANIMATED HEADLINE & ROTATING BANNER */}
      <section className="bg-[#0b351a] text-white py-12 md:py-20 text-center relative overflow-hidden">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            
            <div style={{ fontSize: '0.85rem', color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700', marginBottom: '12px' }}>
              Healing Spaces &amp; Therapies in Kompally
            </div>

            <h2 style={{ color: '#ffffff', fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', fontWeight: '500', lineHeight: '1.4' }}>
              Meditation, wellness and holistic experiences, gifted with devotion, love, patience and{' '}
              <span 
                style={{ 
                  color: '#ffd700', 
                  borderBottom: '3px solid var(--color-gold)', 
                  display: 'inline-block',
                  minWidth: '120px',
                  fontWeight: '700',
                  transition: 'all 0.3s ease'
                }}
              >
                {rotatingWords[animatedWordIndex]}
              </span>
            </h2>

            <p style={{ color: '#c2d1c6', fontSize: '1rem', marginTop: '18px', fontStyle: 'italic' }}>
              "Ayurveda teaches us that optimal health is the harmonious equilibrium of body, mind, senses, and soul."
            </p>

          </div>
        </div>
      </section>

      {/* 7. EXPERIENCE COUNTERS STRIP */}
      <section className="bg-white py-12 md:py-16 border-b border-[#e8dec8]">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
            
            {clinicInfo.stats.map((stat, i) => (
              <div key={i} style={{ padding: '10px' }}>
                <div style={{ 
                  fontFamily: 'var(--font-serif)', 
                  fontSize: '2.8rem', 
                  fontWeight: '700', 
                  color: 'var(--color-primary)', 
                  lineHeight: '1', 
                  marginBottom: '8px' 
                }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.95rem', color: '#444', fontWeight: '600' }}>
                  {stat.label}
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 8. GALLERY HIGHLIGHTS */}
      <section className="py-12 md:py-20 bg-[#fbf9f5]">
        <div className="container">
          
          <div className="section-title-wrap">
            <span className="section-badge">Healing Sanctuary</span>
            <h2 className="section-title">Authentic Therapies Gallery</h2>
            <div className="divider-ornament">
              <span className="divider-ornament-icon">📷</span>
            </div>
            <p className="section-subtitle">
              Visual glimpses of our traditional therapy rooms, authentic medicated herbal oils, and classical healing rituals.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {galleryPhotos.map((photo) => (
              <div 
                key={photo.id}
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  position: 'relative',
                  height: '240px',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setActivePage('gallery');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
              >
                <img 
                  src={photo.image} 
                  alt={photo.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }}
                  onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 60%)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end',
                  padding: '16px',
                  color: '#ffffff'
                }}>
                  <span style={{ fontSize: '0.75rem', color: '#ffd700', fontWeight: '700', textTransform: 'uppercase' }}>{photo.category}</span>
                  <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>{photo.title}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => {
                setActivePage('gallery');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-outline"
            >
              <span>Explore Complete Gallery</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* 9. TESTIMONIALS SLIDER */}
      <section className="py-12 md:py-20 bg-white border-t border-[#e8dec8]">
        <div className="container">
          
          <div className="section-title-wrap">
            <span className="section-badge">Client Stories</span>
            <h2 className="section-title">What Our Patients Say</h2>
            <div className="divider-ornament">
              <span className="divider-ornament-icon">💬</span>
            </div>
            <p className="section-subtitle">
              Read real transformation and pain relief experiences from patients who visited Ayush Ayurveda Panchakaranam in Kompally.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div 
              style={{
                backgroundColor: 'var(--color-cream)',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid var(--color-border)',
                padding: '36px',
                boxShadow: 'var(--shadow-md)',
                position: 'relative'
              }}
            >
              {/* Star Rating */}
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(testimonials[currentTestimonialIndex].rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#ffd700" color="#ffd700" />
                ))}
              </div>

              {/* Review Text */}
              <p style={{ fontSize: '1.08rem', color: '#333', lineHeight: '1.7', fontStyle: 'italic', marginBottom: '24px' }}>
                "{testimonials[currentTestimonialIndex].review}"
              </p>

              {/* Reviewer Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                    {testimonials[currentTestimonialIndex].name}
                  </h4>
                  <div style={{ fontSize: '0.82rem', color: '#777' }}>
                    {testimonials[currentTestimonialIndex].location} • Treatment: <strong style={{ color: 'var(--color-primary)' }}>{testimonials[currentTestimonialIndex].therapy}</strong>
                  </div>
                </div>

                {/* Nav Arrows */}
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button 
                    onClick={() => setCurrentTestimonialIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid var(--color-border)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={() => setCurrentTestimonialIndex(prev => (prev + 1) % testimonials.length)}
                    style={{ width: '38px', height: '38px', borderRadius: '50%', border: '1px solid var(--color-border)', backgroundColor: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 10. LATEST BLOG ARTICLES SECTION */}
      <section className="py-12 md:py-20 bg-[#fbf9f5]">
        <div className="container">
          
          <div className="section-title-wrap">
            <span className="section-badge">Ayurvedic Wisdom</span>
            <h2 className="section-title">Health, Herbs &amp; Lifestyle Insights</h2>
            <div className="divider-ornament">
              <span className="divider-ornament-icon">📖</span>
            </div>
            <p className="section-subtitle">
              Learn how ancient therapies and seasonal regimens help you maintain peak physical vitality and mental clarity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '26px', marginBottom: '36px' }}>
            {blogPosts.map((post) => (
              <div 
                key={post.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ height: '180px', overflow: 'hidden' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ fontSize: '0.78rem', color: 'var(--color-gold-dark)', fontWeight: '700', marginBottom: '6px' }}>
                    {post.date} • {post.category}
                  </div>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', marginBottom: '10px', lineHeight: '1.35' }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '0.86rem', color: '#555', lineHeight: '1.55', marginBottom: '16px', flex: 1 }}>
                    {post.summary}
                  </p>
                  <button 
                    onClick={() => {
                      setActivePage('blog');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: '700', fontSize: '0.88rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px', padding: 0 }}
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button 
              onClick={() => {
                setActivePage('blog');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="btn-outline"
            >
              <span>View All Blog Articles</span>
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* 11. LOCATION & BOOKING BANNER */}
      <section className="bg-[#0b351a] text-white py-12 md:py-16">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', alignItems: 'center' }}>
            
            <div>
              <span style={{ color: '#ffd700', fontSize: '0.85rem', fontWeight: '700', letterSpacing: '1px', textTransform: 'uppercase' }}>
                Visit Us in Kompally
              </span>
              <h2 style={{ color: '#ffffff', fontSize: '2.2rem', margin: '8px 0 14px' }}>
                Ready to Experience Pain Relief &amp; Rejuvenation?
              </h2>
              <p style={{ color: '#d1e6d7', fontSize: '1rem', lineHeight: '1.6', marginBottom: '20px' }}>
                Visit our authentic Kerala Ayurveda center located at <strong>Raichandani 5 Star Complex, Opp. Pista House, Pet Basheerabad, Kompally, Hyderabad</strong>. Open 7 days a week from 10:00 AM to 8:00 PM.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
                <a 
                  href={`tel:${clinicInfo.phoneRaw}`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ffd700', fontWeight: '700', fontSize: '1.1rem' }}
                >
                  <PhoneCall size={20} />
                  <span>{clinicInfo.phones[0]}</span>
                </a>
                <span>/</span>
                <span style={{ color: '#ffd700', fontWeight: '700', fontSize: '1.1rem' }}>
                  {clinicInfo.phones[1]}
                </span>
              </div>
            </div>

            <div className="text-left md:text-right mt-6 md:mt-0">
              <button 
                onClick={onOpenBooking}
                className="btn-gold animate-pulse-gold"
                style={{ padding: '16px 36px', fontSize: '1.05rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}
              >
                <Calendar size={20} />
                <span>Book Instant Appointment</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
