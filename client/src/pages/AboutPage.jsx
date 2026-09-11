import React from 'react';
import { 
  ShieldCheck, 
  Sparkles, 
  HeartHandshake, 
  Clock, 
  MapPin, 
  Award, 
  CheckCircle2, 
  Droplets,
  Calendar,
  ArrowRight
} from 'lucide-react';
import { clinicInfo, panchakarmaPillars } from '../data/ayurvedaData';

export default function AboutPage({ setActivePage, onOpenBooking, onOpenDoshaQuiz }) {
  return (
    <div className="about-page animate-fade-in">
      
      {/* Page Header Banner */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0 50px', textAlign: 'center', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <span className="section-badge" style={{ color: '#ffd700', borderColor: 'var(--color-gold)' }}>Our Heritage &amp; Vision</span>
          <h1 style={{ color: '#ffffff', fontSize: '2.6rem', marginTop: '10px', marginBottom: '14px' }}>
            About Ayush Ayurveda Panchakaranam
          </h1>
          <p style={{ color: '#d1e6d7', fontSize: '1.1rem', maxWidth: '680px', margin: '0 auto' }}>
            Authentic Kerala healing tradition dedicated to root-cause eradication of pain, spine disc degeneration, and lifestyle stress in Kompally, Hyderabad.
          </p>
        </div>
      </section>

      {/* Origin & Philosophy */}
      <section className="py-12 md:py-20 bg-[#fbf9f5]">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '50px', alignItems: 'center' }}>
            
            <div>
              <span className="section-badge">Authentic Lineage</span>
              <h2 style={{ fontSize: '2.2rem', marginBottom: '16px', color: 'var(--color-primary-dark)' }}>
                Rooted in 5,000 Years of Classical Kerala Ayurveda
              </h2>
              
              <p style={{ fontSize: '0.98rem', color: '#444', lineHeight: '1.7', marginBottom: '16px' }}>
                At <strong>Ayush Ayurveda Panchakaranam</strong>, we uphold the sacred Ayurvedic medical philosophy that true health (Swastha) is achieved when the three bio-energies (Vata, Pitta, Kapha), the seven fundamental tissues (Sapta Dhatus), metabolic fire (Agni), and mental calmness (Prasanna Atma Indriya Mana) function in complete unison.
              </p>

              <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: '1.65', marginBottom: '24px' }}>
                Located at <strong>Raichandani 5 Star Complex, Opp. Pista House, Pet Basheerabad, Kompally</strong>, our state-of-the-art facility brings authentic Kerala therapy tables (Droni), traditional bronze brassware, pure herbal medicated decoctions, and certified Kerala therapists directly to North Hyderabad.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-primary-dark)', fontWeight: '600' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Nadi Pariksha (Pulse Exam)</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-primary-dark)', fontWeight: '600' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Classical Thailams &amp; Kashayams</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-primary-dark)', fontWeight: '600' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Non-Surgical Pain Care</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'var(--color-primary-dark)', fontWeight: '600' }}>
                  <CheckCircle2 size={18} color="var(--color-primary)" />
                  <span>Hygienic Private Suites</span>
                </div>
              </div>

              <button onClick={onOpenBooking} className="btn-primary">
                <Calendar size={16} />
                <span>Book a Consultation with Our Vaidya</span>
              </button>

            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', border: '4px solid #ffffff' }}>
                <img 
                  src="/images/kizhi.jpg" 
                  alt="Ayurvedic Treatment Room" 
                  style={{ width: '100%', height: '420px', objectFit: 'cover' }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* The 5 Panchakarma Pillars Detailed */}
      <section className="py-12 md:py-20 bg-white border-y border-[#e8dec8]">
        <div className="container">
          
          <div className="section-title-wrap">
            <span className="section-badge">Core Specialization</span>
            <h2 className="section-title">The Classical 5 Panchakarma Purification Disciplines</h2>
            <div className="divider-ornament"><span className="divider-ornament-icon">🌿</span></div>
            <p className="section-subtitle">
              Panchakarma is not merely relaxation; it is a bio-cleansing medical protocol that purges deep accumulated Ama (metabolic toxins) from cellular matrices.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {panchakarmaPillars.map((p, idx) => (
              <div 
                key={p.id}
                style={{
                  backgroundColor: 'var(--color-sand)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--color-primary)' }}>0{idx + 1}.</span>
                  <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-gold-dark)', textTransform: 'uppercase' }}>{p.sanskrit}</span>
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                  {p.title}
                </h3>
                <div style={{ fontSize: '0.82rem', color: '#666', fontStyle: 'italic', marginBottom: '12px' }}>
                  {p.subtitle}
                </div>

                <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.6', marginBottom: '16px', flex: 1 }}>
                  {p.description}
                </p>

                <div style={{ backgroundColor: '#ffffff', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--color-border)' }}>
                  <div style={{ fontSize: '0.78rem', fontWeight: '700', color: 'var(--color-primary)', marginBottom: '4px' }}>
                    Clinical Indications:
                  </div>
                  <div style={{ fontSize: '0.8rem', color: '#666' }}>
                    {p.indications.join(', ')}
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Why Choose Us & Standards */}
      <section className="py-12 md:py-20 bg-[#fbf9f5]">
        <div className="container">
          
          <div className="section-title-wrap">
            <span className="section-badge">The Ayush Difference</span>
            <h2 className="section-title">Why Patients Choose Our Kompally Center</h2>
            <div className="divider-ornament"><span className="divider-ornament-icon">⭐</span></div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            
            <div style={{ backgroundColor: '#ffffff', padding: '28px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Award size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
                Authentic Kerala Vaidya Diagnosis
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#666', lineHeight: '1.55' }}>
                Every treatment plan is preceded by a personalized pulse and physical examination to ensure maximum safety and therapeutic efficacy.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '28px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'rgba(197, 157, 95, 0.15)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Droplets size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
                Medicated Oil Quality
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#666', lineHeight: '1.55' }}>
                We use strictly certified Kerala classical thailams prepared following ancient formulations (Sahasrayogam &amp; Ashtanga Hridaya).
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '28px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <ShieldCheck size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
                Hospital-Grade Hygiene
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#666', lineHeight: '1.55' }}>
                Single-use linen, sterilized herbal pouches, sanitized wooden steam chambers, and private therapy rooms.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '28px 20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', textAlign: 'center' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: 'rgba(197, 157, 95, 0.15)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <HeartHandshake size={26} />
              </div>
              <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', marginBottom: '10px' }}>
                Transparent &amp; Fair Pricing
              </h3>
              <p style={{ fontSize: '0.86rem', color: '#666', lineHeight: '1.55' }}>
                Clear fixed session pricing matching classical Kerala rates with zero hidden charges.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#0b351a] text-white py-12 md:py-16 text-center">
        <div className="container">
          <h2 style={{ color: '#ffffff', fontSize: '2.2rem', marginBottom: '14px' }}>
            Begin Your Natural Healing Journey Today
          </h2>
          <p style={{ color: '#c2d1c6', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 28px' }}>
            Visit Raichandani 5 Star Complex, Opp. Pista House, Kompally, Hyderabad or schedule your appointment online.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={onOpenBooking} className="btn-gold animate-pulse-gold">
              <Calendar size={18} />
              <span>Book Doctor Consultation</span>
            </button>
            <button onClick={onOpenDoshaQuiz} className="btn-outline-white">
              <Sparkles size={18} />
              <span>Take Prakriti Quiz</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
