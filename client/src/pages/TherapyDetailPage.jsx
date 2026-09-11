import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { therapies } from '../data/ayurvedaData';
import { Clock, Check, Sparkles, AlertCircle, Calendar, ArrowLeft } from 'lucide-react';

export default function TherapyDetailPage({ onOpenBooking }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [therapy, setTherapy] = useState(null);

  useEffect(() => {
    const foundTherapy = therapies.find(t => t.id === id);
    if (!foundTherapy) {
      navigate('/therapies', { replace: true });
    } else {
      setTherapy(foundTherapy);
      // SEO tags
      document.title = `${foundTherapy.name} | Ayush Ayurveda Kompally`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        const descContent = foundTherapy.shortDesc || (foundTherapy.description ? foundTherapy.description.substring(0, 150) : 'Classical Ayurvedic Therapy at Ayush Ayurveda');
        metaDescription.setAttribute('content', descContent);
      }
    }
  }, [id, navigate]);

  if (!therapy) return null;

  return (
    <div className="bg-[#FFFDF9] min-h-screen pb-16 animate-fade-in">
      {/* 1. Hero Banner */}
      <div className="relative pt-24 pb-32 px-4 flex flex-col justify-center items-center overflow-hidden min-h-[450px]">
        {/* Background Image & Overlays */}
        {therapy.image ? (
          <div className="absolute inset-0 z-0">
            <img src={therapy.image} alt={therapy.name} className="w-full h-full object-cover scale-105 animate-[kenburns_20s_ease-out_forwards]" />
            <div className="absolute inset-0 bg-[#0b351a]/70 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b351a] via-[#0b351a]/50 to-transparent"></div>
          </div>
        ) : (
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#124b26] to-[#0b351a]"></div>
        )}
        
        {/* Hero Content */}
        <div className="max-w-4xl mx-auto relative z-10 text-center flex flex-col items-center mt-8">
          <Link to="/therapies" className="group inline-flex items-center gap-2 text-[#e8dec8] hover:text-[#ffd700] mb-8 transition-colors text-sm font-semibold tracking-wide uppercase">
            <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
            <span>Back to Therapies</span>
          </Link>
          
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-[#c59d5f]/20 text-[#ffd700] text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.2em] border border-[#c59d5f]/40 backdrop-blur-md shadow-lg">
              <Sparkles size={12} className="text-[#ffd700]" />
              {therapy.categoryName}
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white drop-shadow-md leading-tight" style={{ color: '#ffffff' }}>
            {therapy.name}
          </h1>
          
          {therapy.tagline && (
            <p className="text-xl md:text-2xl text-[#e8dec8] italic max-w-2xl mx-auto font-medium drop-shadow-sm" style={{ color: '#e8dec8' }}>
              "{therapy.tagline}"
            </p>
          )}
        </div>
      </div>

      {/* 2. Main Content Overlapping Banner */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-20 relative z-20">
        <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-[#e8dec8]/50 p-6 md:p-12 backdrop-blur-xl">
          
          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#fbf9f5] to-white p-5 rounded-2xl border border-[#e8dec8]/80 shadow-sm mb-12">
            <div className="flex items-center gap-4 text-[#0b351a]">
              <div className="w-12 h-12 rounded-full bg-[#0b351a]/5 flex items-center justify-center border border-[#c59d5f]/20">
                <Clock size={22} className="text-[#c59d5f]" />
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-stone-500 font-bold mb-0.5">Duration</span>
                <span className="text-lg font-bold">{therapy.duration}</span>
              </div>
            </div>
            
            <button 
              onClick={() => onOpenBooking(therapy.id)}
              className="w-full sm:w-auto bg-[#0b351a] hover:bg-[#124b26] text-[#ffd700] py-3.5 px-8 rounded-xl text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <Calendar size={18} />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-12">
              
              <section>
                <div className="flex items-center gap-3 mb-6">
                  <span className="w-8 h-[2px] bg-[#c59d5f]"></span>
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#0b351a]">The Experience</h2>
                </div>
                <div className="prose prose-lg prose-stone max-w-none text-stone-600 leading-relaxed">
                  <p className="text-lg md:text-xl font-medium text-stone-700 leading-relaxed mb-6">
                    {therapy.shortDesc || 'A classical Kerala therapy designed for deep healing and rejuvenation.'}
                  </p>
                  <p className="text-[15px] md:text-base leading-loose">
                    {therapy.description || 'Detailed information about this specific therapy is being updated by our Vaidyas. Please consult with our doctors during your visit to learn more about how this therapy can benefit your specific health condition.'}
                  </p>
                </div>
              </section>

              {therapy.indications && therapy.indications.length > 0 && (
                <section>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="w-8 h-[2px] bg-[#c59d5f]"></span>
                    <h2 className="text-2xl font-serif font-bold text-[#0b351a]">Recommended For</h2>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {therapy.indications.map((ind, index) => (
                      <span 
                        key={index}
                        className="group flex items-center gap-2 bg-white border-2 border-[#e8dec8]/60 hover:border-[#c59d5f] text-[#0b351a] px-5 py-2.5 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-300 cursor-default"
                      >
                        <AlertCircle size={14} className="text-[#c59d5f] group-hover:scale-110 transition-transform" />
                        {ind}
                      </span>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              {therapy.benefits && therapy.benefits.length > 0 && (
                <div className="bg-gradient-to-b from-[#0b351a] to-[#082612] rounded-3xl p-8 sticky top-28 shadow-2xl relative overflow-hidden group">
                  {/* Decorative background element */}
                  <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#c59d5f]/10 rounded-full blur-2xl group-hover:bg-[#c59d5f]/20 transition-colors duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-center gap-2 mb-8">
                      <Sparkles size={18} className="text-[#ffd700]" />
                      <h3 className="text-xl font-serif font-bold text-white tracking-wide">
                        Key Benefits
                      </h3>
                    </div>
                    
                    <ul className="space-y-5">
                      {therapy.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start gap-3.5 group/item">
                          <div className="mt-1 w-5 h-5 rounded-full bg-[#ffd700]/20 flex items-center justify-center shrink-0 border border-[#ffd700]/30 group-hover/item:bg-[#ffd700] transition-colors duration-300">
                            <Check size={12} className="text-[#ffd700] group-hover/item:text-[#0b351a]" />
                          </div>
                          <span className="text-[14.5px] text-[#e8dec8] leading-tight font-medium pt-0.5 group-hover/item:text-white transition-colors">
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="mt-10 pt-8 border-t border-[#c59d5f]/20">
                      <p className="text-center text-xs text-[#c59d5f] uppercase tracking-widest font-bold mb-4">
                        Ready to heal?
                      </p>
                      <button 
                        onClick={() => onOpenBooking(therapy.id)}
                        className="w-full bg-[#ffd700] hover:bg-[#e6c200] text-[#0b351a] py-3.5 rounded-xl text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 shadow-lg hover:-translate-y-1 transition-all duration-300"
                      >
                        <Calendar size={18} />
                        <span>Book Session</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
}
