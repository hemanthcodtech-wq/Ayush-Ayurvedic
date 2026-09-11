import React, { useState } from 'react';
import { 
  Search, 
  Clock, 
  Tag, 
  Filter, 
  Calendar, 
  ArrowRight, 
  Sparkles,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { therapyCategories, therapies } from '../data/ayurvedaData';

export default function TherapiesPage({ onOpenBooking, onSelectTherapy }) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredTherapies = therapies.filter(therapy => {
    const matchesCategory = selectedCategory === 'all' || therapy.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch = !q || 
      therapy.name.toLowerCase().includes(q) ||
      therapy.shortDesc.toLowerCase().includes(q) ||
      therapy.description.toLowerCase().includes(q) ||
      (therapy.indications && therapy.indications.some(ind => ind.toLowerCase().includes(q))) ||
      (therapy.benefits && therapy.benefits.some(b => b.toLowerCase().includes(q)));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="therapies-page animate-fade-in">
      
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0 50px', textAlign: 'center', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <span className="section-badge" style={{ color: '#ffd700', borderColor: 'var(--color-gold)' }}>Classical Kerala Therapies</span>
          <h1 style={{ color: '#ffffff', fontSize: '2.6rem', marginTop: '10px', marginBottom: '14px' }}>
            Ayurvedic Therapies &amp; Treatments
          </h1>
          <p style={{ color: '#d1e6d7', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Comprehensive directory of authentic classical Kerala therapies for pain relief, spinal disc health, stress detoxification, and deep physical rejuvenation.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--color-border)', padding: '20px 0', position: 'sticky', top: '70px', zIndex: 100, boxShadow: 'var(--shadow-sm)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Search Input */}
            <div style={{ position: 'relative', maxWidth: '600px', width: '100%', margin: '0 auto' }}>
              <Search size={18} color="#888" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input 
                type="text"
                placeholder="Search by therapy name or condition (e.g. Back Pain, Sciatica, Migraine, Weight Loss)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 46px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-sand)',
                  fontSize: '0.92rem',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.backgroundColor = '#fff'; }}
                onBlur={(e) => { e.currentTarget.style.borderColor = 'var(--color-border)'; e.currentTarget.style.backgroundColor = 'var(--color-sand)'; }}
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: '#999', cursor: 'pointer', fontSize: '0.85rem' }}
                >
                  Clear
                </button>
              )}
            </div>

            {/* Category Filter Tabs */}
            <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 justify-start sm:justify-center px-4 sm:px-0 -mx-4 sm:mx-0 hide-scrollbar flex-nowrap sm:flex-wrap">
              {therapyCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 'var(--radius-full)',
                    border: selectedCategory === cat.id ? '1px solid var(--color-primary)' : '1px solid var(--color-border)',
                    backgroundColor: selectedCategory === cat.id ? 'var(--color-primary)' : '#ffffff',
                    color: selectedCategory === cat.id ? '#ffffff' : 'var(--color-charcoal)',
                    fontWeight: selectedCategory === cat.id ? '600' : '500',
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0
                  }}
                >
                  {cat.name}
                </button>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* Therapy Cards Grid */}
      <section style={{ padding: '60px 0 80px', backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div style={{ fontSize: '0.95rem', color: '#666' }}>
              Showing <strong>{filteredTherapies.length}</strong> therapies
              {selectedCategory !== 'all' && <span> in <strong>{therapyCategories.find(c => c.id === selectedCategory)?.name}</strong></span>}
              {searchQuery && <span> matching "<strong>{searchQuery}</strong>"</span>}
            </div>
            {(selectedCategory !== 'all' || searchQuery) && (
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                style={{ background: 'none', border: 'none', color: 'var(--color-primary)', fontWeight: '600', fontSize: '0.88rem', cursor: 'pointer' }}
              >
                Reset Filters
              </button>
            )}
          </div>

          {filteredTherapies.length === 0 ? (
            <div style={{ backgroundColor: '#ffffff', borderRadius: 'var(--radius-md)', padding: '60px 20px', textAlign: 'center', border: '1px solid var(--color-border)' }}>
              <AlertCircle size={44} color="var(--color-gold-dark)" style={{ margin: '0 auto 12px' }} />
              <h3 style={{ color: 'var(--color-primary-dark)', fontSize: '1.3rem', marginBottom: '8px' }}>
                No Therapies Found
              </h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '18px' }}>
                We could not find any therapy matching your search "{searchQuery}".
              </p>
              <button 
                onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
                className="btn-primary"
              >
                View All Therapies
              </button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '26px' }}>
              {filteredTherapies.map(therapy => (
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
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'none';
                    e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                  }}
                >
                  {/* Image */}
                  <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                    <img 
                      src={therapy.image} 
                      alt={therapy.name} 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      backgroundColor: 'rgba(11, 53, 26, 0.85)',
                      color: '#ffd700',
                      fontSize: '0.75rem',
                      fontWeight: '700',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      backdropFilter: 'blur(4px)'
                    }}>
                      {therapy.categoryName}
                    </div>
                    <div style={{
                      position: 'absolute',
                      bottom: '10px',
                      right: '10px',
                      backgroundColor: '#ffffff',
                      color: 'var(--color-primary)',
                      fontWeight: '700',
                      fontSize: '0.9rem',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.15)'
                    }}>
                      {therapy.priceFormatted}
                    </div>
                  </div>

                  {/* Body */}
                  <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#777', marginBottom: '6px' }}>
                      <Clock size={13} color="var(--color-gold-dark)" />
                      <span>{therapy.duration}</span>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
                      {therapy.name}
                    </h3>

                    <p style={{ fontSize: '0.86rem', color: '#555', lineHeight: '1.55', marginBottom: '14px', flex: 1 }}>
                      {therapy.shortDesc}
                    </p>

                    {/* Indications tags */}
                    {therapy.indications && (
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '16px' }}>
                        {therapy.indications.slice(0, 3).map((ind, i) => (
                          <span 
                            key={i} 
                            style={{ 
                              fontSize: '0.72rem', 
                              backgroundColor: 'var(--color-sand)', 
                              color: 'var(--color-primary-dark)', 
                              padding: '2px 8px', 
                              borderRadius: '4px',
                              border: '1px solid var(--color-border)' 
                            }}
                          >
                            {ind}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <button 
                        onClick={() => onSelectTherapy(therapy)}
                        className="btn-outline flex-1 py-2 text-[0.82rem]"
                      >
                        Details
                      </button>
                      <button 
                        onClick={() => onOpenBooking(therapy.id)}
                        className="btn-primary flex-1 py-2 text-[0.82rem] !px-0"
                      >
                        Book
                      </button>
                    </div>

                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

    </div>
  );
}
