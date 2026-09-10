import React, { useState } from 'react';
import { BookOpen, Clock, User, ArrowRight, X, Calendar, Share2, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/ayurvedaData';

export default function BlogPage({ onOpenBooking }) {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="blog-page animate-fade-in">
      
      {/* Page Header */}
      <section style={{ backgroundColor: 'var(--color-primary-dark)', color: '#ffffff', padding: '60px 0 50px', textAlign: 'center', borderBottom: '3px solid var(--color-gold)' }}>
        <div className="container">
          <span className="section-badge" style={{ color: '#ffd700', borderColor: 'var(--color-gold)' }}>Vaidya Insights</span>
          <h1 style={{ color: '#ffffff', fontSize: '2.6rem', marginTop: '10px', marginBottom: '14px' }}>
            Ayurveda &amp; Holistic Health Blog
          </h1>
          <p style={{ color: '#d1e6d7', fontSize: '1.1rem', maxWidth: '720px', margin: '0 auto' }}>
            Explore scientific, authentic Ayurvedic perspectives on chronic pain management, Panchakarma detoxification, herbs, and daily wellness routines.
          </p>
        </div>
      </section>

      {/* Blog Articles Grid */}
      <section style={{ padding: '70px 0 90px', backgroundColor: 'var(--color-sand)' }}>
        <div className="container">
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
            {blogPosts.map(post => (
              <article 
                key={post.id}
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
                  e.currentTarget.style.transform = 'translateY(-6px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                }}
              >
                {/* Image */}
                <div style={{ height: '220px', overflow: 'hidden' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.78rem', color: '#777', marginBottom: '10px' }}>
                    <span style={{ color: 'var(--color-gold-dark)', fontWeight: '700', textTransform: 'uppercase' }}>{post.category}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>

                  <h2 style={{ fontSize: '1.28rem', color: 'var(--color-primary-dark)', marginBottom: '12px', lineHeight: '1.4' }}>
                    {post.title}
                  </h2>

                  <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: '1.6', marginBottom: '20px', flex: 1 }}>
                    {post.summary}
                  </p>

                  <button
                    onClick={() => setSelectedArticle(post)}
                    className="btn-primary"
                    style={{ width: '100%', padding: '10px 18px', fontSize: '0.88rem' }}
                  >
                    <span>Read Full Article</span>
                    <ArrowRight size={15} />
                  </button>

                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* Full Article Reader Modal */}
      {selectedArticle && (
        <div className="modal-overlay" onClick={() => setSelectedArticle(null)}>
          <div 
            className="modal-content" 
            onClick={(e) => e.stopPropagation()} 
            style={{ maxWidth: '780px', maxHeight: '90vh' }}
          >
            {/* Header */}
            <div style={{
              backgroundColor: 'var(--color-primary-dark)',
              color: '#ffffff',
              padding: '24px 30px',
              position: 'relative'
            }}>
              <button 
                onClick={() => setSelectedArticle(null)}
                style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>

              <span style={{ color: '#ffd700', fontSize: '0.8rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {selectedArticle.category}
              </span>
              <h2 style={{ color: '#ffffff', fontSize: '1.6rem', marginTop: '6px', marginBottom: '8px', lineHeight: '1.3' }}>
                {selectedArticle.title}
              </h2>
              <div style={{ fontSize: '0.82rem', color: '#c2d1c6' }}>
                Published by {selectedArticle.author} • {selectedArticle.date} • {selectedArticle.readTime}
              </div>
            </div>

            {/* Content Body */}
            <div style={{ padding: '30px', fontSize: '0.95rem', color: '#333', lineHeight: '1.8' }}>
              
              <div style={{ borderRadius: 'var(--radius-md)', overflow: 'hidden', marginBottom: '24px', maxHeight: '300px' }}>
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Render article content paragraphs */}
              <div style={{ whiteSpace: 'pre-line' }}>
                {selectedArticle.content}
              </div>

              {/* Action Box */}
              <div style={{ backgroundColor: 'var(--color-primary-subtle)', borderRadius: 'var(--radius-md)', padding: '20px', marginTop: '30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '14px' }}>
                <div>
                  <h4 style={{ color: 'var(--color-primary-dark)', fontSize: '1.1rem', margin: 0 }}>
                    Experience this therapy in Kompally
                  </h4>
                  <div style={{ fontSize: '0.85rem', color: '#555' }}>
                    Consult with our Ayurvedic specialists for tailored dosage and oils.
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    onOpenBooking();
                  }}
                  className="btn-primary"
                  style={{ padding: '10px 22px' }}
                >
                  <Calendar size={15} />
                  <span>Book Consultation</span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
