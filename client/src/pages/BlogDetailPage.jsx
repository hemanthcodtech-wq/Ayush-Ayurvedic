import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/ayurvedaData';

export default function BlogDetailPage({ onOpenBooking }) {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Find the post
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-stone-50">
        <h2 className="text-3xl font-serif font-bold text-stone-800 mb-4">Article Not Found</h2>
        <p className="text-stone-500 mb-8">We couldn't find the article you were looking for.</p>
        <button onClick={() => navigate('/blog')} className="btn-primary">
          Back to Blog
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail-page bg-stone-50 min-h-screen pb-20">
      {/* Hero Header */}
      <section className="relative w-full h-[50vh] min-h-[400px] max-h-[600px] bg-stone-900">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-transparent flex flex-col justify-end pb-12 sm:pb-16">
          <div className="container max-w-4xl mx-auto px-4 sm:px-6">
            <Link 
              to="/blog"
              className="inline-flex items-center gap-2 text-stone-300 hover:text-white transition-colors mb-6 sm:mb-8 font-medium text-sm group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Blog</span>
            </Link>
            
            <span className="inline-block px-3 py-1 bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest rounded-full mb-4 w-max">
              {post.category}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white leading-tight mb-6 drop-shadow-lg">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-stone-300 text-sm font-medium">
              <span className="flex items-center gap-2"><User size={16} className="text-amber-400" /> {post.author}</span>
              <span className="flex items-center gap-2"><Calendar size={16} className="text-amber-400" /> {post.date}</span>
              <span className="flex items-center gap-2"><Clock size={16} className="text-amber-400" /> {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 sm:py-16">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-xl shadow-stone-200/50 -mt-24 relative z-10 border border-stone-100 text-stone-700 text-lg sm:text-xl leading-relaxed">
            
            <div className="whitespace-pre-line font-medium">
              {post.content}
            </div>

            {/* Call to Action Box */}
            <div className="mt-16 bg-gradient-to-r from-stone-50 to-amber-50/40 border border-amber-200/60 rounded-2xl p-8 sm:p-10 flex flex-col md:flex-row justify-between items-center gap-8 shadow-sm">
              <div className="text-center md:text-left">
                <h4 className="text-2xl font-serif font-bold text-stone-900 mb-3">
                  Experience this therapy in Kompally
                </h4>
                <p className="text-base text-stone-500 max-w-md">
                  Consult with our expert Ayurvedic specialists for tailored dosages and therapeutic oils.
                </p>
              </div>
              <button
                onClick={onOpenBooking}
                className="btn-primary shrink-0 py-4 px-8 shadow-xl shadow-[var(--color-primary)]/20 hover:-translate-y-1 hover:shadow-[var(--color-primary)]/30 transition-all duration-300 text-base"
              >
                <Calendar size={20} className="mr-2" />
                <span>Book Consultation</span>
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
