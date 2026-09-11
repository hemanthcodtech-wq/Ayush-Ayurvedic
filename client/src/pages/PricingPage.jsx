import React, { useState } from 'react';
import { 
  Tag, 
  Clock, 
  Calendar, 
  Sparkles, 
  Check, 
  ShieldCheck, 
  ArrowRight,
  Send,
  MessageSquare
} from 'lucide-react';
import { pricingTableData, packages, clinicInfo } from '../data/ayurvedaData';

export default function PricingPage({ onOpenBooking }) {
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    setInquirySent(true);
    
    const text = `*New Ritucharya & Seasonal Offers Signup*%0A*Name:* ${inquiryName}%0A*Email:* ${inquiryEmail}`;
    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${text}`, '_blank');

    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
      setInquiryEmail('');
    }, 4000);
  };

  return (
    <div className="pricing-page animate-fade-in">
      
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0 50px', textAlign: 'center', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <span className="section-badge" style={{ color: '#ffd700', borderColor: 'var(--color-gold)' }}>Transparent &amp; Fair Rates</span>
          <h1 style={{ color: '#ffffff', fontSize: '2.6rem', marginTop: '10px', marginBottom: '14px' }}>
            Ayurveda Therapies &amp; Prices
          </h1>
          <p style={{ color: '#d1e6d7', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Invest in your long-term health with authentic Kerala therapies. Fixed, transparent session rates with zero hidden fees at Raichandani 5 Star Complex, Kompally.
          </p>
        </div>
      </section>

      {/* Main Pricing Tables */}
      <section className="py-12 md:py-20 bg-[#fbf9f5]">
        <div className="container-narrow">
          
          <div className="section-title-wrap">
            <span className="section-badge">Comprehensive Menu</span>
            <h2 className="section-title">Official Therapy Price List</h2>
            <div className="divider-ornament"><span className="divider-ornament-icon">📜</span></div>
          </div>

          {pricingTableData.map((categorySection, idx) => (
            <div key={idx} className="ayurveda-table-card">
              <table className="ayurveda-table">
                <thead>
                  <tr style={{ backgroundColor: 'var(--color-primary)', color: '#ffffff' }}>
                    <th style={{ width: '55%', textTransform: 'uppercase', letterSpacing: '1px' }}>
                      {categorySection.category}
                    </th>
                    <th style={{ width: '25%' }}>Duration</th>
                    <th style={{ width: '20%', textAlign: 'right' }}>Price</th>
                  </tr>
                </thead>
                <tbody>
                  {categorySection.items.map((item, itemIdx) => (
                    <tr key={itemIdx}>
                      <td className="therapy-name-cell">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <span>{item.name}</span>
                          <button
                            onClick={() => onOpenBooking(item.id)}
                            style={{
                              background: 'none',
                              border: '1px solid var(--color-gold)',
                              color: 'var(--color-gold-dark)',
                              fontSize: '0.75rem',
                              padding: '2px 8px',
                              borderRadius: 'var(--radius-full)',
                              cursor: 'pointer',
                              fontWeight: '600'
                            }}
                          >
                            Book
                          </button>
                        </div>
                      </td>
                      <td style={{ color: '#555' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Clock size={13} color="var(--color-gold-dark)" />
                          <span>{item.duration}</span>
                        </div>
                      </td>
                      <td style={{ textAlign: 'right' }}>
                        <span className="price-badge">{item.price}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}

        </div>
      </section>

      {/* Wellness Packages Section */}
      <section className="py-12 md:py-20 bg-white border-y border-[#e8dec8]">
        <div className="container">
          
          <div className="section-title-wrap">
            <span className="section-badge">Intensive Healing</span>
            <h2 className="section-title">Multi-Day Wellness &amp; Pain Packages</h2>
            <div className="divider-ornament"><span className="divider-ornament-icon">✨</span></div>
            <p className="section-subtitle">
              Structured treatment packages for deep neurological rejuvenation, chronic sciatica recovery, and complete Panchakarma reset.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {packages.map(pkg => (
              <div
                key={pkg.id}
                style={{
                  backgroundColor: 'var(--color-cream)',
                  borderRadius: 'var(--radius-lg)',
                  border: '2px solid var(--color-gold)',
                  padding: '32px 24px',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative'
                }}
              >
                <span style={{
                  position: 'absolute',
                  top: '-12px',
                  left: '24px',
                  backgroundColor: 'var(--color-primary)',
                  color: '#ffd700',
                  fontSize: '0.78rem',
                  fontWeight: '700',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                }}>
                  {pkg.badge}
                </span>

                <h3 style={{ fontSize: '1.35rem', color: 'var(--color-primary-dark)', marginTop: '8px', marginBottom: '6px' }}>
                  {pkg.title}
                </h3>
                
                <div style={{ fontSize: '0.86rem', color: '#666', marginBottom: '16px' }}>
                  Duration: <strong>{pkg.duration}</strong>
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '18px' }}>
                  <span style={{ fontSize: '2rem', fontWeight: '700', color: 'var(--color-primary)' }}>
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: '1rem', color: '#999', textDecoration: 'line-through' }}>
                    {pkg.originalPrice}
                  </span>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
                  {pkg.description}
                </p>

                <div style={{ marginBottom: '24px', flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--color-primary-dark)', marginBottom: '8px', textTransform: 'uppercase' }}>
                    Package Inclusions:
                  </div>
                  {pkg.inclusions.map((inc, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#444', marginBottom: '6px' }}>
                      <Check size={14} color="var(--color-primary)" />
                      <span>{inc}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={onOpenBooking}
                  className="btn-gold"
                  style={{ width: '100%', padding: '12px' }}
                >
                  <Calendar size={16} />
                  <span>Enroll in Package</span>
                </button>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Inquiry / Updates Form */}
      <section className="py-12 md:py-16 bg-[#fbf9f5]">
        <div className="container-narrow">
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '36px', boxShadow: 'var(--shadow-sm)' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '6px' }}>
                Contact for Exclusive Health Updates &amp; Seasonal Offers
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#666' }}>
                Receive customized Ayurvedic seasonal health tips (Ritucharya) and consultation updates.
              </p>
            </div>

            {inquirySent ? (
              <div style={{ textAlign: 'center', padding: '20px', backgroundColor: 'var(--color-primary-subtle)', borderRadius: 'var(--radius-md)', color: 'var(--color-primary-dark)', fontWeight: '600' }}>
                ✓ Thank you! We have received your details. Our care team will contact you shortly.
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_auto] gap-4 items-center">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="form-input" 
                  value={inquiryName}
                  onChange={(e) => setInquiryName(e.target.value)}
                  required 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="form-input" 
                  value={inquiryEmail}
                  onChange={(e) => setInquiryEmail(e.target.value)}
                  required 
                />
                <button type="submit" className="btn-primary" style={{ padding: '12px 24px', whiteSpace: 'nowrap' }}>
                  <Send size={15} />
                  <span>Send</span>
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
