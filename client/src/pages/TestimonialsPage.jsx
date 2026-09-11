import React, { useState } from 'react';
import { Star, MessageSquare, CheckCircle, Plus, Calendar, ShieldCheck } from 'lucide-react';
import { testimonials } from '../data/ayurvedaData';

export default function TestimonialsPage({ onOpenBooking }) {
  const [reviewList, setReviewList] = useState(testimonials);
  const [showAddReview, setShowAddReview] = useState(false);
  const [newName, setNewName] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newTherapy, setNewTherapy] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newReview, setNewReview] = useState('');
  const [successMsg, setSuccessMsg] = useState(false);

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (!newName || !newReview) return;
    const newEntry = {
      id: 'custom-' + Date.now(),
      name: newName,
      location: newLocation || 'Hyderabad',
      rating: Number(newRating),
      therapy: newTherapy || 'Ayurvedic Consultation',
      review: newReview,
      date: 'Just now',
      verified: true
    };
    setReviewList([newEntry, ...reviewList]);
    setSuccessMsg(true);
    setTimeout(() => {
      setSuccessMsg(false);
      setShowAddReview(false);
      setNewName('');
      setNewLocation('');
      setNewTherapy('');
      setNewReview('');
    }, 2500);
  };

  return (
    <div className="testimonials-page animate-fade-in">
      
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0 50px', textAlign: 'center', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <span className="section-badge" style={{ color: '#ffd700', borderColor: 'var(--color-gold)' }}>Patient Experiences</span>
          <h1 style={{ color: '#ffffff', fontSize: '2.6rem', marginTop: '10px', marginBottom: '14px' }}>
            Client Reviews &amp; Testimonials
          </h1>
          <p style={{ color: '#d1e6d7', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Read real recovery stories from patients who experienced our classical Panchakarma and pain management therapies in Kompally.
          </p>
        </div>
      </section>

      {/* Ratings Overview Strip */}
      <section style={{ backgroundColor: '#ffffff', padding: '30px 0', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ fontSize: '2.8rem', fontWeight: '700', color: 'var(--color-primary)', lineHeight: 1 }}>
                4.9
              </div>
              <div>
                <div style={{ display: 'flex', gap: '2px', marginBottom: '4px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={20} fill="#ffd700" color="#ffd700" />
                  ))}
                </div>
                <div style={{ fontSize: '0.85rem', color: '#666' }}>
                  Based on 276+ verified client consultations &amp; treatments
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px' }}>
              <button
                onClick={() => setShowAddReview(!showAddReview)}
                className="btn-outline"
                style={{ padding: '10px 20px', fontSize: '0.9rem' }}
              >
                <Plus size={16} />
                <span>Write a Review</span>
              </button>
              <button
                onClick={onOpenBooking}
                className="btn-primary"
                style={{ padding: '10px 22px', fontSize: '0.9rem' }}
              >
                <Calendar size={16} />
                <span>Book Appointment</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Add Review Form Dropdown */}
      {showAddReview && (
        <section style={{ backgroundColor: 'var(--color-cream)', padding: '40px 0', borderBottom: '1px solid var(--color-border)' }}>
          <div className="container-narrow">
            <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', padding: '28px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '1.3rem', color: 'var(--color-primary-dark)', marginBottom: '16px' }}>
                Share Your Healing Experience
              </h3>

              {successMsg ? (
                <div style={{ backgroundColor: 'var(--color-primary-subtle)', color: 'var(--color-primary-dark)', padding: '16px', borderRadius: 'var(--radius-sm)', fontWeight: '600', textAlign: 'center' }}>
                  ✓ Thank you! Your review has been successfully submitted and added.
                </div>
              ) : (
                <form onSubmit={handleSubmitReview}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g. Anand Kumar" 
                        value={newName} 
                        onChange={(e) => setNewName(e.target.value)} 
                        required 
                      />
                    </div>
                    <div>
                      <label className="form-label">Location / Area</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g. Kompally, Secunderabad" 
                        value={newLocation} 
                        onChange={(e) => setNewLocation(e.target.value)} 
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="form-label">Therapy Taken</label>
                      <input 
                        type="text" 
                        className="form-input" 
                        placeholder="e.g. Kadi Vasthi, Shirodhara, Abhyangam" 
                        value={newTherapy} 
                        onChange={(e) => setNewTherapy(e.target.value)} 
                      />
                    </div>
                    <div>
                      <label className="form-label">Rating</label>
                      <select 
                        className="form-select"
                        value={newRating}
                        onChange={(e) => setNewRating(e.target.value)}
                      >
                        <option value="5">★★★★★ (5/5) - Excellent Healing</option>
                        <option value="4">★★★★☆ (4/5) - Very Good</option>
                        <option value="3">★★★☆☆ (3/5) - Good</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Feedback / Review *</label>
                    <textarea 
                      className="form-textarea" 
                      rows="3"
                      placeholder="Describe your treatment results, pain relief, and therapist care..."
                      value={newReview}
                      onChange={(e) => setNewReview(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button type="submit" className="btn-primary">
                      <span>Submit Review</span>
                    </button>
                    <button type="button" onClick={() => setShowAddReview(false)} className="btn-outline">
                      Cancel
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials List */}
      <section style={{ padding: '60px 0 80px', backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '26px' }}>
            {reviewList.map(item => (
              <div 
                key={item.id}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  padding: '28px',
                  boxShadow: 'var(--shadow-sm)',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                {/* Stars & Verified Badge */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#ffd700" color="#ffd700" />
                    ))}
                  </div>
                  {item.verified && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <CheckCircle size={13} />
                      <span>Verified Client</span>
                    </span>
                  )}
                </div>

                {/* Review Content */}
                <p style={{ fontSize: '0.92rem', color: '#444', lineHeight: '1.65', fontStyle: 'italic', marginBottom: '20px', flex: 1 }}>
                  "{item.review}"
                </p>

                {/* Reviewer Details */}
                <div style={{ borderTop: '1px solid var(--color-warm-gray)', paddingTop: '14px' }}>
                  <h4 style={{ fontSize: '1.05rem', color: 'var(--color-primary-dark)', margin: 0 }}>
                    {item.name}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: '#777', marginTop: '2px' }}>
                    {item.location} • Therapy: <strong style={{ color: 'var(--color-primary)' }}>{item.therapy}</strong>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
