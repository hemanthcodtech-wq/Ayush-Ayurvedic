import React, { useState } from 'react';
import { Sparkles, X, ZoomIn, Calendar } from 'lucide-react';
import { galleryPhotos } from '../data/ayurvedaData';

export default function GalleryPage({ onOpenBooking }) {
  const [activeFilter, setActiveFilter] = useState('All');

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
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-sm)',
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

    </div>
  );
}
