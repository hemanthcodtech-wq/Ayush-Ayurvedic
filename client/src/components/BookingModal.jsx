import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle, FileText, Sparkles, MessageSquare } from 'lucide-react';
import { clinicInfo, therapies } from '../data/ayurvedaData';

export default function BookingModal({ isOpen, onClose, preselectedTherapy }) {
  const [selectedTherapy, setSelectedTherapy] = useState(preselectedTherapy || 'doctor-consultation');
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
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (preselectedTherapy) {
      setSelectedTherapy(preselectedTherapy);
    }
  }, [preselectedTherapy]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM', '11:00 AM', '12:00 PM', '01:00 PM', 
    '02:30 PM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM', '07:00 PM'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !phone) {
      alert('Please provide your name and phone number');
      return;
    }
    const randomId = 'AYUSH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingId(randomId);
    setIsSubmitted(true);
  };

  const getTherapyName = () => {
    if (selectedTherapy === 'doctor-consultation') return 'Ayurvedic Vaidya Pulse Consultation (Nadi Pariksha)';
    const found = therapies.find(t => t.id === selectedTherapy || t.name === selectedTherapy);
    return found ? found.name : selectedTherapy;
  };

  const handleWhatsAppSend = () => {
    const text = `*New Appointment Request - ${bookingId}*%0A` +
      `*Patient Name:* ${fullName}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Therapy:* ${getTherapyName()}%0A` +
      `*Date:* ${selectedDate}%0A` +
      `*Time Slot:* ${selectedTime}%0A` +
      `*Health Concern:* ${notes || 'General wellness / pain consult'}%0A` +
      `*Location:* Raichandani 5 Star Complex, Kompally`;
    window.open(`https://wa.me/${clinicInfo.whatsappNumber}?text=${text}`, '_blank');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '580px' }}>
        
        {/* Header */}
        <div style={{
          backgroundColor: 'var(--color-primary-dark)',
          color: '#ffffff',
          padding: '20px 24px',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Calendar size={22} color="var(--color-gold)" />
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', margin: 0 }}>
                {isSubmitted ? 'Appointment Confirmed' : 'Book Your Appointment'}
              </h3>
              <div style={{ fontSize: '0.78rem', color: '#c2d1c6' }}>
                Ayush Ayurveda Panchakaranam • Kompally Center
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '24px' }}>
          {isSubmitted ? (
            <div style={{ textAlign: 'center', padding: '10px 0' }}>
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <CheckCircle size={36} />
              </div>

              <h4 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
                Thank You, {fullName}!
              </h4>
              <div style={{ display: 'inline-block', backgroundColor: 'var(--color-sand)', border: '1px dashed var(--color-gold)', padding: '6px 16px', borderRadius: 'var(--radius-sm)', fontWeight: '700', color: 'var(--color-gold-dark)', marginBottom: '16px' }}>
                Booking ID: {bookingId}
              </div>

              <div style={{ backgroundColor: '#ffffff', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '16px', textAlign: 'left', marginBottom: '20px', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#666' }}>Therapy / Service:</span>
                  <strong>{getTherapyName()}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#666' }}>Date &amp; Time:</span>
                  <strong>{selectedDate} at {selectedTime}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span style={{ color: '#666' }}>Contact Phone:</span>
                  <strong>{phone}</strong>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: '#666' }}>Center Location:</span>
                  <strong>Raichandani 5 Star Complex, Kompally</strong>
                </div>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#666', marginBottom: '20px' }}>
                Our Vaidya / care coordinator will call you shortly to confirm your consultation. You can also send this appointment directly to our WhatsApp for instant priority slot confirmation.
              </p>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  onClick={handleWhatsAppSend}
                  style={{
                    backgroundColor: '#25D366',
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: 'var(--radius-full)',
                    padding: '10px 20px',
                    fontWeight: '600',
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <MessageSquare size={16} />
                  <span>Send to WhatsApp</span>
                </button>
                <button
                  onClick={handleReset}
                  className="btn-outline"
                  style={{ padding: '10px 20px', fontSize: '0.9rem' }}
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              
              {/* Therapy Select */}
              <div className="form-group">
                <label className="form-label">Select Therapy / Consultation *</label>
                <select 
                  className="form-select"
                  value={selectedTherapy}
                  onChange={(e) => setSelectedTherapy(e.target.value)}
                  required
                >
                  <option value="doctor-consultation">🌿 Ayurvedic Vaidya Consultation &amp; Nadi Pariksha (Pulse Exam)</option>
                  <optgroup label="Body Massages & Rejuvenation">
                    {therapies.filter(t => t.category === 'massages').map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.duration} - {t.priceFormatted})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Kizhi (Potli) Therapies">
                    {therapies.filter(t => t.category === 'kizhi').map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.duration} - {t.priceFormatted})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Dhara & Oil Baths">
                    {therapies.filter(t => t.category === 'dhara').map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.duration} - {t.priceFormatted})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Vasti Therapies (Spine & Joint Care)">
                    {therapies.filter(t => t.category === 'vasti').map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.duration} - {t.priceFormatted})</option>
                    ))}
                  </optgroup>
                  <optgroup label="Ayur Care & Specialized Treatments">
                    {therapies.filter(t => t.category === 'ayur-care' || t.category === 'facials').map(t => (
                      <option key={t.id} value={t.id}>{t.name} ({t.duration} - {t.priceFormatted})</option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Date & Time Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Preferred Date *</label>
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
                  <label className="form-label">Preferred Time Slot *</label>
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

              {/* Patient Details */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
                <div className="form-group" style={{ margin: 0 }}>
                  <label className="form-label">Full Name *</label>
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="e.g. Rahul Sharma" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required 
                  />
                </div>
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
              </div>

              <div className="form-group">
                <label className="form-label">Email Address (Optional)</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="name@example.com" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Health Concern / Pain Symptoms (Optional)</label>
                <textarea 
                  className="form-textarea" 
                  rows="2"
                  placeholder="e.g. Lower back pain, Sciatica, Migraine, Stress, Weight loss inquiry..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="submit" 
                className="btn-primary" 
                style={{ width: '100%', padding: '14px', fontSize: '1rem', marginTop: '10px' }}
              >
                <span>Confirm Appointment Booking</span>
              </button>

              <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.78rem', color: '#888' }}>
                🔒 Your health data is strictly confidential. Timings: 10:00 AM – 8:00 PM (Mon-Sun).
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
