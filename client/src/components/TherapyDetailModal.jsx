import React from 'react';
import { X, Clock, Tag, Check, Sparkles, AlertCircle, Calendar } from 'lucide-react';

export default function TherapyDetailModal({ therapy, isOpen, onClose, onBookTherapy }) {
  if (!isOpen || !therapy) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        
        {/* Header with Background Accent */}
        <div style={{
          backgroundColor: 'var(--color-primary-dark)',
          color: '#ffffff',
          padding: '24px',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)',
          position: 'relative'
        }}>
          <button 
            onClick={onClose}
            style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
          >
            <X size={24} />
          </button>

          <span style={{ 
            display: 'inline-block', 
            backgroundColor: 'rgba(197, 157, 95, 0.25)', 
            color: 'var(--color-gold)', 
            fontSize: '0.78rem', 
            fontWeight: '700', 
            padding: '3px 10px', 
            borderRadius: '9999px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '8px'
          }}>
            {therapy.categoryName}
          </span>

          <h3 style={{ color: '#ffffff', fontSize: '1.5rem', marginBottom: '4px' }}>
            {therapy.name}
          </h3>
          <div style={{ color: '#ffd700', fontSize: '0.9rem', fontStyle: 'italic' }}>
            {therapy.tagline}
          </div>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '24px' }}>
          
          {/* Duration & Price Bar */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'var(--color-primary-subtle)',
            padding: '12px 18px',
            borderRadius: 'var(--radius-md)',
            marginBottom: '20px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary-dark)', fontWeight: '600', fontSize: '0.95rem' }}>
              <Clock size={18} color="var(--color-primary)" />
              <span>Duration: {therapy.duration}</span>
            </div>

          </div>

          {/* Description */}
          <div style={{ marginBottom: '20px' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
              About This Classical Therapy
            </h4>
            <p style={{ fontSize: '0.92rem', color: '#444', lineHeight: '1.65' }}>
              {therapy.description}
            </p>
          </div>

          {/* Key Benefits */}
          {therapy.benefits && therapy.benefits.length > 0 && (
            <div style={{ marginBottom: '20px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Sparkles size={16} color="var(--color-gold)" />
                <span>Therapeutic Benefits</span>
              </h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '8px' }}>
                {therapy.benefits.map((benefit, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#444' }}>
                    <Check size={16} color="var(--color-primary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Clinical Indications / Conditions Treated */}
          {therapy.indications && therapy.indications.length > 0 && (
            <div style={{ marginBottom: '24px' }}>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--color-primary-dark)', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <AlertCircle size={16} color="var(--color-primary)" />
                <span>Recommended For</span>
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {therapy.indications.map((ind, index) => (
                  <span 
                    key={index}
                    style={{
                      backgroundColor: 'var(--color-warm-gray)',
                      color: 'var(--color-primary-dark)',
                      padding: '4px 12px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.82rem',
                      fontWeight: '600'
                    }}
                  >
                    • {ind}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Footer Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end', borderTop: '1px solid var(--color-border)', paddingTop: '18px' }}>
            <button 
              onClick={onClose}
              className="btn-outline"
              style={{ padding: '10px 20px', fontSize: '0.9rem' }}
            >
              Close
            </button>
            <button 
              onClick={() => {
                onClose();
                onBookTherapy(therapy.id);
              }}
              className="btn-primary"
              style={{ padding: '10px 24px', fontSize: '0.9rem' }}
            >
              <Calendar size={16} />
              <span>Book This Therapy</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
