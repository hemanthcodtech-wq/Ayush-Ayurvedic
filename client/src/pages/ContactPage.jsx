import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  MessageSquare, 
  Sparkles, 
  CheckCircle,
  Navigation
} from 'lucide-react';
import { clinicInfo } from '../data/ayurvedaData';

export default function ContactPage({ onOpenBooking }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('Treatment Inquiry');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setPhone('');
      setEmail('');
      setMessage('');
    }, 4000);
  };

  const handleOpenGoogleMaps = () => {
    const query = encodeURIComponent("Raichandani 5 star complex Pet basheerabad Kompally Hyderabad 500067");
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  return (
    <div className="contact-page animate-fade-in">
      
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0 50px', textAlign: 'center', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <span className="section-badge" style={{ color: '#ffd700', borderColor: 'var(--color-gold)' }}>Kompally Hyderabad Center</span>
          <h1 style={{ color: '#ffffff', fontSize: '2.6rem', marginTop: '10px', marginBottom: '14px' }}>
            Contact Us &amp; Location
          </h1>
          <p style={{ color: '#d1e6d7', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            We look forward to welcoming you to our authentic Ayurvedic sanctuary at Raichandani 5 Star Complex, Kompally.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section style={{ padding: '70px 0 90px', backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* Contact Details & Center Info */}
            <div>
              <span className="section-badge">Get In Touch</span>
              <h2 style={{ fontSize: '2.1rem', color: 'var(--color-primary-dark)', marginBottom: '16px' }}>
                Visit or Reach Out to Our Vaidya Team
              </h2>

              <p style={{ fontSize: '0.95rem', color: '#555', lineHeight: '1.65', marginBottom: '28px' }}>
                Whether you have questions about specific Panchakarma therapies, need directions to our Kompally facility, or wish to schedule a consultation, our care coordinators are here for you.
              </p>

              {/* Info Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                
                {/* Address Card */}
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', gap: '16px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                      Center Address
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: '#444', lineHeight: '1.5' }}>
                      <strong>Raichandani 5 Star Complex</strong><br />
                      S.No 42, Flat No 303, Opp. Pista House,<br />
                      Pet Basheerabad, Kompally, Hyderabad - 500067
                    </div>
                    <button
                      onClick={handleOpenGoogleMaps}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--color-primary)',
                        fontWeight: '700',
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '6px 0 0'
                      }}
                    >
                      <Navigation size={13} />
                      <span>Get Driving Directions on Google Maps</span>
                    </button>
                  </div>
                </div>

                {/* Phone & Timings */}
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', gap: '16px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'rgba(197, 157, 95, 0.15)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                      Phone &amp; Direct Consultation
                    </h3>
                    <div style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--color-primary)' }}>
                      <a href={`tel:${clinicInfo.phones[0]}`} style={{ color: 'var(--color-primary)' }}>{clinicInfo.phones[0]}</a> / <a href={`tel:${clinicInfo.phones[1]}`} style={{ color: 'var(--color-primary)' }}>{clinicInfo.phones[1]}</a>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#666', marginTop: '4px' }}>
                      Operating Hours: <strong>{clinicInfo.timings}</strong> (Mon-Sun)
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div style={{ backgroundColor: '#ffffff', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', display: 'flex', gap: '16px', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '46px', height: '46px', borderRadius: '50%', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                      Email Inquiries
                    </h3>
                    <div style={{ fontSize: '0.9rem', color: '#444' }}>
                      <a href={`mailto:${clinicInfo.email}`}>{clinicInfo.email}</a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Quick WhatsApp Action */}
              <a 
                href={`https://wa.me/${clinicInfo.whatsappNumber}?text=Hello%20Ayush%20Ayurveda%20Kompally%2C%20I%20have%20an%20inquiry.`}
                target="_blank" 
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                  padding: '12px 24px',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: '600',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 14px rgba(37,211,102,0.35)'
                }}
              >
                <MessageSquare size={18} />
                <span>Chat Instantly on WhatsApp</span>
              </a>

            </div>

            {/* Interactive Contact Form */}
            <div style={{ backgroundColor: '#ffffff', padding: '36px 30px', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '6px' }}>
                Send Us a Message
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#666', marginBottom: '22px' }}>
                Fill out the form below and our Ayurvedic counselor will respond promptly.
              </p>

              {submitted ? (
                <div style={{ backgroundColor: 'var(--color-primary-subtle)', border: '1px solid var(--color-primary)', color: 'var(--color-primary-dark)', padding: '24px', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
                  <CheckCircle size={40} color="var(--color-primary)" style={{ margin: '0 auto 12px' }} />
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>Message Sent Successfully!</h4>
                  <p style={{ fontSize: '0.88rem' }}>
                    Thank you, {name}. Our team in Kompally will call or email you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Ramesh Chandra" 
                      value={name} 
                      onChange={(e) => setName(e.target.value)} 
                      required 
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        className="form-input" 
                        placeholder="e.g. 9876543210" 
                        value={phone} 
                        onChange={(e) => setPhone(e.target.value)} 
                        required 
                      />
                    </div>
                    <div className="form-group" style={{ margin: 0 }}>
                      <label className="form-label">Email (Optional)</label>
                      <input 
                        type="email" 
                        className="form-input" 
                        placeholder="name@mail.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Subject / Service Interest</label>
                    <select 
                      className="form-select"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    >
                      <option value="Pain Treatment (Sciatica / Spine / Knee)">Pain Treatment (Sciatica / Spine / Knee)</option>
                      <option value="Classical Panchakarma Detox">Classical Panchakarma Detox</option>
                      <option value="Shirodhara & Stress Care">Shirodhara &amp; Stress Care</option>
                      <option value="Doctor Pulse Consultation (Nadi Pariksha)">Doctor Pulse Consultation (Nadi Pariksha)</option>
                      <option value="General Inquiry / Pricing">General Inquiry / Pricing</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message or Health Concerns *</label>
                    <textarea 
                      className="form-textarea" 
                      rows="4" 
                      placeholder="Briefly describe your symptoms or what treatment you are looking for..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '0.98rem' }}>
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>

                </form>
              )}

            </div>

          </div>

        </div>
      </section>

      {/* Embedded Map Representation */}
      <section style={{ padding: '0 0 70px', backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
            
            <div style={{ padding: '20px 24px', backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: '700', textTransform: 'uppercase' }}>
                  Location Locator
                </div>
                <div style={{ fontSize: '1.15rem', fontWeight: '600' }}>
                  Raichandani 5 Star Complex, Opp. Pista House, Pet Basheerabad, Kompally
                </div>
              </div>
              <button 
                onClick={handleOpenGoogleMaps}
                className="btn-gold"
                style={{ padding: '8px 20px', fontSize: '0.85rem' }}
              >
                <Navigation size={15} />
                <span>Open in Google Maps</span>
              </button>
            </div>

            {/* Visual Route Info Mockup */}
            <div style={{ padding: '30px', backgroundColor: 'var(--color-cream)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px' }}>
              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '14px' }}>
                <strong style={{ color: 'var(--color-primary-dark)' }}>From Secunderabad:</strong>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>
                  Take Medchal Highway (NH 44) through Suchitra Junction. Turn right opposite Pista House in Pet Basheerabad into Raichandani Complex.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-primary)', paddingLeft: '14px' }}>
                <strong style={{ color: 'var(--color-primary-dark)' }}>From Medchal / ORR:</strong>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>
                  Drive towards Kompally center on NH 44, located prominently opposite Pista House in Pet Basheerabad.
                </p>
              </div>

              <div style={{ borderLeft: '3px solid var(--color-gold)', paddingLeft: '14px' }}>
                <strong style={{ color: 'var(--color-primary-dark)' }}>Parking &amp; Accessibility:</strong>
                <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>
                  Ample customer parking available at Raichandani 5 Star Complex with elevator access to Flat 303.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
