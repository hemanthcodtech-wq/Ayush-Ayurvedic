import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  CheckCircle, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare,
  MapPin
} from 'lucide-react';
import { clinicInfo, therapies } from '../data/ayurvedaData';
import SEO from '../components/SEO';

export default function BookAppointmentPage() {
  const [selectedTherapy, setSelectedTherapy] = useState('doctor-consultation');
  const [selectedDate, setSelectedDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [selectedTime, setSelectedTime] = useState('11:00 AM');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [bookingId, setBookingId] = useState('');

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', 
    '02:30 PM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM', '07:00 PM'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please fill out your name and phone number.');
      return;
    }
    
    setIsLoading(true);
    const id = 'AYUSH-' + Math.floor(100000 + Math.random() * 900000);
    
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/book-appointment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          bookingId: id,
          fullName,
          phone,
          email,
          selectedTherapyName: getTherapyName(),
          selectedDate,
          selectedTime,
          notes
        })
      });

      if (response.ok) {
        setBookingId(id);
        setIsSubmitted(true);
        window.scrollTo({ top: 200, behavior: 'smooth' });
      } else {
        alert('Failed to submit appointment. Please try again or contact us via WhatsApp.');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      alert('Error connecting to server. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  const getTherapyName = () => {
    if (selectedTherapy === 'doctor-consultation') return 'Ayurvedic Vaidya Pulse Examination & Diagnosis (Nadi Pariksha)';
    const found = therapies.find(t => t.id === selectedTherapy || t.name === selectedTherapy);
    return found ? `${found.name} (${found.duration})` : selectedTherapy;
  };

  const handleWhatsAppSend = () => {
    const text = `*New Appointment Request - ${bookingId}*%0A` +
      `*Patient Name:* ${fullName}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Therapy / Service:* ${getTherapyName()}%0A` +
      `*Date:* ${selectedDate}%0A` +
      `*Time Slot:* ${selectedTime}%0A` +
      `*Notes / Health Issues:* ${notes || 'General consultation / Pain care'}%0A` +
      `*Center:* Raichandani 5 Star Complex, Kompally, Hyderabad`;
    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="book-appointment-page animate-fade-in">
      <SEO 
        title="Book Appointment" 
        description="Book your authentic Kerala Ayurvedic session at Ayush Ayurveda Panchakaranam in Kompally, Hyderabad. Schedule your consultation online." 
      />
      
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0 50px', textAlign: 'center', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <span className="section-badge" style={{ color: '#ffd700', borderColor: 'var(--color-gold)' }}>Online Scheduling</span>
          <h1 style={{ color: '#ffffff', fontSize: '2.6rem', marginTop: '10px', marginBottom: '14px' }}>
            Book Your Ayurvedic Session
          </h1>
          <p style={{ color: '#d1e6d7', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Reserve your appointment with certified Kerala Ayurvedic Vaidyas and therapists at Raichandani 5 Star Complex, Kompally, Hyderabad.
          </p>
        </div>
      </section>

      {/* Main Booking Form Section */}
      <section style={{ padding: '70px 0 90px', backgroundColor: 'var(--color-sand)' }}>
        <div className="container-narrow">
          
          <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-border)', padding: '40px 36px', boxShadow: 'var(--shadow-md)' }}>
            
            {isSubmitted ? (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <div style={{ width: '70px', height: '70px', borderRadius: '50%', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                  <CheckCircle size={42} />
                </div>

                <h2 style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
                  Appointment Successfully Scheduled!
                </h2>
                
                <div style={{ display: 'inline-block', backgroundColor: 'var(--color-sand)', border: '1px dashed var(--color-gold)', padding: '8px 20px', borderRadius: 'var(--radius-sm)', fontWeight: '700', color: 'var(--color-gold-dark)', fontSize: '1.1rem', marginBottom: '20px' }}>
                  Booking Reference ID: {bookingId}
                </div>

                <div style={{ backgroundColor: 'var(--color-cream)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '20px', textAlign: 'left', marginBottom: '24px', fontSize: '0.95rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: '#666' }}>Patient Name:</span>
                    <strong>{fullName}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: '#666' }}>Service / Therapy:</span>
                    <strong>{getTherapyName()}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: '#666' }}>Appointment Slot:</span>
                    <strong>{selectedDate} at {selectedTime}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                    <span style={{ color: '#666' }}>Contact Number:</span>
                    <strong>{phone}</strong>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: '#666' }}>Center Location:</span>
                    <strong>Raichandani 5 Star Complex, Kompally, Hyd</strong>
                  </div>
                </div>

                <p style={{ fontSize: '0.92rem', color: '#555', marginBottom: '24px', lineHeight: '1.6' }}>
                  We have logged your request in our clinic scheduling system. For instant verification and priority queue confirmation, please tap below to sync via WhatsApp.
                </p>

                <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button
                    onClick={handleWhatsAppSend}
                    style={{
                      backgroundColor: '#25D366',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: 'var(--radius-full)',
                      padding: '12px 26px',
                      fontWeight: '600',
                      fontSize: '0.95rem',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      boxShadow: '0 4px 14px rgba(37,211,102,0.35)'
                    }}
                  >
                    <MessageSquare size={18} />
                    <span>Sync to WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline"
                    style={{ padding: '12px 24px' }}
                  >
                    Book Another Slot
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                
                <div style={{ marginBottom: '28px', borderBottom: '1px solid var(--color-border)', paddingBottom: '16px' }}>
                  <h2 style={{ fontSize: '1.5rem', color: 'var(--color-primary-dark)', marginBottom: '4px' }}>
                    Patient Details &amp; Preferred Time
                  </h2>
                  <p style={{ fontSize: '0.88rem', color: '#666' }}>
                    Please select your therapy and preferred time slot. Walk-ins are also welcome.
                  </p>
                </div>

                {/* Service / Therapy */}
                <div className="form-group">
                  <label className="form-label">1. Select Therapy or Doctor Consultation *</label>
                  <select 
                    className="form-select"
                    value={selectedTherapy}
                    onChange={(e) => setSelectedTherapy(e.target.value)}
                    required
                  >
                    <option value="doctor-consultation">🌿 Ayurvedic Vaidya Consultation &amp; Nadi Pariksha (Pulse Examination)</option>
                    <optgroup label="Relax">
                      {therapies.filter(t => t.category === 'relax').map(t => (
                        <option key={t.id} value={t.id}>{t.name} ({t.duration})</option>
                      ))}
                    </optgroup>
                    <optgroup label="Rejuvenate">
                      {therapies.filter(t => t.category === 'rejuvenate').map(t => (
                        <option key={t.id} value={t.id}>{t.name} ({t.duration})</option>
                      ))}
                    </optgroup>
                    <optgroup label="Treatments">
                      {therapies.filter(t => t.category === 'treatments').map(t => (
                        <option key={t.id} value={t.id}>{t.name} ({t.duration})</option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Date & Time */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">2. Select Preferred Date *</label>
                    <input 
                      type="date" 
                      className="form-input" 
                      value={selectedDate}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">3. Select Time Slot (10 AM - 8 PM) *</label>
                    <select 
                      className="form-select"
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      required
                    >
                      {timeSlots.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Patient Info */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px', marginBottom: '16px' }}>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">4. Patient Full Name *</label>
                    <input 
                      type="text" 
                      className="form-input" 
                      placeholder="e.g. Suresh Varma" 
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required 
                    />
                  </div>
                  <div className="form-group" style={{ margin: 0 }}>
                    <label className="form-label">5. Contact Phone Number *</label>
                    <input 
                      type="tel" 
                      className="form-input" 
                      placeholder="e.g. 9885162477" 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required 
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">6. Email Address (Optional)</label>
                  <input 
                    type="email" 
                    className="form-input" 
                    placeholder="patient@example.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">7. Health Concerns or Previous Medical History (Optional)</label>
                  <textarea 
                    className="form-textarea" 
                    rows="3"
                    placeholder="Please mention any back pain, disc issues, knee pain, migraine, high blood pressure, or specific treatment goals..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isLoading}
                  className="btn-primary" 
                  style={{ width: '100%', padding: '16px', fontSize: '1.05rem', marginTop: '10px' }}
                >
                  <Calendar size={18} />
                  <span>{isLoading ? 'Processing Request...' : 'Confirm and Schedule My Appointment'}</span>
                </button>

                <div style={{ textAlign: 'center', marginTop: '14px', fontSize: '0.82rem', color: '#777' }}>
                  📍 Raichandani 5 Star Complex, Opp. Pista House, Pet Basheerabad, Kompally, Hyderabad - 500067
                </div>

              </form>
            )}

          </div>

        </div>
      </section>

    </div>
  );
}
