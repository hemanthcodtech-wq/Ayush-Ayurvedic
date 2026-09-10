import React, { useState } from 'react';
import { Sparkles, X, ZoomIn, Calendar } from 'lucide-react';
import { galleryPhotos } from '../data/ayurvedaData';

export default function GalleryPage({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Therapies', 'Massages', 'Panchakarma', 'Facials', 'Center'];

  const filteredPhotos = galleryPhotos.filter(photo => {
    if (activeFilter === 'All') return true;
    return photo.category === activeFilter;
  });

  return (
    <div className="gallery-page animate-fade-in">
      
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0 50px', textAlign: 'center', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <span className="section-badge" style={{ color: '#ffd700', borderColor: 'var(--color-gold)' }}>Visual Glimpses</span>
          <h1 style={{ color: '#ffffff', fontSize: '2.6rem', marginTop: '10px', marginBottom: '14px' }}>
            Ayurvedic Care Gallery
          </h1>
          <p style={{ color: '#d1e6d7', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Experience the serene healing environment, authentic classical herbs, and therapeutic rituals at Ayush Ayurveda Panchakaranam, Kompally.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)', padding: '18px 0' }}>
        <div className="container">
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: activeFilter === cat ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: activeFilter === cat ? 'var(--color-primary)' : '#ffffff',
                  color: activeFilter === cat ? '#ffffff' : 'var(--color-charcoal)',
                  fontWeight: activeFilter === cat ? '600' : '500',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section style={{ padding: '60px 0 80px', backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {filteredPhotos.map(photo => (
              <div
                key={photo.id}
                onClick={() => setSelectedImage(photo)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
                  cursor: 'pointer',
                  transition: 'var(--transition)',
                  position: 'relative'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img 
                    src={photo.image} 
                    alt={photo.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: '#ffffff',
                    padding: '6px',
                    borderRadius: '50%'
                  }}>
                    <ZoomIn size={16} />
                  </div>
                </div>

                <div style={{ padding: '16px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--color-gold-dark)', textTransform: 'uppercase' }}>
                    {photo.category}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', margin: '4px 0 6px' }}>
                    {photo.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#666' }}>
                    {photo.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="modal-overlay" onClick={() => setSelectedImage(null)}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{ maxWidth: '800px', backgroundColor: '#000000', color: '#ffffff', border: 'none' }}
          >
            <div style={{ position: 'relative' }}>
              <button 
                onClick={() => setSelectedImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: 'rgba(0,0,0,0.6)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '50%',
                  padding: '8px',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <X size={24} />
              </button>
              
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', display: 'block' }}
              />

              <div style={{ padding: '20px 24px', backgroundColor: '#1a1a1a', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ color: '#ffffff', fontSize: '1.3rem', margin: 0 }}>
                    {selectedImage.title}
                  </h3>
                  <p style={{ color: '#aaa', fontSize: '0.88rem', margin: '4px 0 0' }}>
                    {selectedImage.description}
                  </p>
                </div>
                <button 
                  onClick={() => {
                    setSelectedImage(null);
                    onOpenBooking();
                  }}
                  className="btn-gold"
                  style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                >
                  <Calendar size={14} />
                  <span>Book Appointment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
