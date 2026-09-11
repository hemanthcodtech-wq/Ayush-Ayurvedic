import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BookOpen, Clock, User, ArrowRight, X, Calendar, Share2, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/ayurvedaData';

export default function BlogPage({ onOpenBooking }) {
  const navigate = useNavigate();

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    onClick={() => navigate(`/blog/${post.id}`)}
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

    </div>
  );
}
