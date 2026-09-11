import React, { useState } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  MessageSquare, 
  ChevronDown, 
  Droplets, 
  ShieldCheck, 
  Info,
  Layers,
  Flame,
  Wind
} from 'lucide-react';
import { clayTherapies, clinicInfo } from '../data/ayurvedaData';

export default function ClayTherapiesSection({ onOpenBooking, setActivePage, isStandalone = false }) {
  const [selectedClayId, setSelectedClayId] = useState(clayTherapies[0].id);
  const [showAllClays, setShowAllClays] = useState(false);

  const currentClay = clayTherapies.find(c => c.id === selectedClayId) || clayTherapies[0];

  const handleClaySelect = (e) => {
    setSelectedClayId(e.target.value);
  };

  const getDoshaIcon = (doshaEffect) => {
    if (doshaEffect.includes('Pitta')) return <Flame size={16} className="text-amber-500" />;
    if (doshaEffect.includes('Vata')) return <Wind size={16} className="text-sky-400" />;
    return <Droplets size={16} className="text-emerald-400" />;
  };

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${isStandalone ? 'bg-stone-900/60' : 'bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950'}`}>
      
      {/* Decorative Aura background elements */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-medium tracking-wide uppercase mb-4">
            <Sparkles size={14} className="text-amber-400 animate-pulse" />
            <span>Organic Earth Rituals & Mineral Healing</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-100 leading-tight mb-4">
            Authentic Moroccan & Natural <span className="text-gradient-gold">Clay Therapies</span>
          </h2>
          
          <p className="text-stone-300 text-base md:text-lg leading-relaxed">
            Harnessing the transdermal ionic power of ancient Atlas Mountain volcanic muds and pure mineral earths, blended with warm Kerala herbal infusions for deep cellular detoxification.
          </p>
        </div>

        {/* Interactive Dropdown & Pill Selector Bar */}
        <div className="bg-stone-900/90 border border-amber-500/20 rounded-2xl p-4 md:p-6 mb-12 shadow-2xl backdrop-blur-md max-w-4xl mx-auto">
          <div className="flex flex-col gap-4">
            
            {/* Dropdown Label & Control */}
            <div className="w-full flex items-center justify-between gap-4">
              <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center gap-3 flex-1">
                <span className="text-xs uppercase tracking-wider font-semibold text-gold whitespace-nowrap flex items-center gap-1.5">
                  <Layers size={15} />
                  Select Pure Clay:
                </span>
                <div className="relative w-full md:max-w-md">
                  <select
                    value={selectedClayId}
                    onChange={handleClaySelect}
                    className="w-full appearance-none bg-stone-800 border border-amber-500/30 text-stone-100 py-3 pl-4 pr-10 rounded-xl font-serif text-base focus:outline-none focus:border-amber-400 cursor-pointer shadow-inner transition-all hover:bg-stone-800/80"
                  >
                    {clayTherapies.map((clay) => (
                      <option key={clay.id} value={clay.id} className="bg-stone-900 text-stone-100 py-2">
                        {clay.number}) {clay.name} - {clay.badge}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-gold">
                    <ChevronDown size={18} />
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowAllClays(!showAllClays)}
                className="hidden lg:block px-5 py-2.5 rounded-xl text-sm font-bold text-amber-500 hover:text-amber-400 hover:bg-stone-800 bg-stone-900 border border-amber-500/20 transition-all whitespace-nowrap"
              >
                {showAllClays ? 'Hide All' : 'View All'}
              </button>
            </div>

            {/* Quick Pill Switchers (Desktop & Tablet) */}
            {showAllClays && (
              <div className="hidden lg:flex items-center gap-2 flex-wrap mt-3 pt-4 border-t border-stone-800">
                {clayTherapies.map((clay) => {
                  const isActive = clay.id === selectedClayId;
                  return (
                    <button
                      key={clay.id}
                      onClick={() => setSelectedClayId(clay.id)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 ${
                        isActive 
                          ? 'bg-amber-500/20 text-gold border border-amber-500/40 shadow-sm' 
                          : 'bg-stone-800/50 text-stone-400 border border-stone-800 hover:text-stone-200 hover:bg-stone-800'
                      }`}
                    >
                      {clay.number}. {clay.name}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Active Clay Showcase Card */}
        <div id="clay-showcase" className="scroll-mt-24 bg-gradient-to-br from-stone-900 via-stone-900/95 to-stone-950 border border-amber-500/25 rounded-3xl overflow-hidden shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left: High-Res Visual Display */}
            <div className="lg:col-span-5 relative group min-h-[360px] lg:min-h-full flex flex-col justify-between overflow-hidden bg-stone-950">
              <img 
                src={currentClay.image} 
                alt={currentClay.fullName} 
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              
              {/* Top Floating Badges */}
              <div className="relative z-10 p-6 flex items-start justify-between">
                <span className="px-3.5 py-1.5 rounded-full bg-stone-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-semibold tracking-wide shadow-lg">
                  Clay #{currentClay.number} • {currentClay.badge}
                </span>

              </div>

              {/* Bottom Visual Caption */}
              <div className="relative z-10 p-6 mt-auto">
                <p className="text-xs text-amber-300/90 font-medium uppercase tracking-widest mb-1">
                  Mined & Formulated In
                </p>
                <h4 className="text-lg font-serif font-bold text-white mb-2">
                  {currentClay.origin}
                </h4>
                <div className="flex items-center gap-3 text-xs text-stone-300">
                  <span className="flex items-center gap-1 bg-stone-900/80 px-2.5 py-1 rounded-md border border-stone-700/60">
                    <Clock size={13} className="text-amber-400" /> {currentClay.duration}
                  </span>
                  <span className="flex items-center gap-1 bg-stone-900/80 px-2.5 py-1 rounded-md border border-stone-700/60">
                    <ShieldCheck size={13} className="text-emerald-400" /> 100% Pure Organic
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Clay Medical & Ayurvedic Info */}
            <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
              
              <div>
                
                {/* Title & Tagline */}
                <div className="border-b border-stone-800 pb-6 mb-6">
                  <div className="flex items-center gap-2 text-gold text-xs font-semibold tracking-wider uppercase mb-1">
                    <span>Therapy #{currentClay.number} of 19</span>
                    <span>•</span>
                    <span>{currentClay.origin}</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-stone-100 mb-2">
                    {currentClay.fullName}
                  </h3>

                  <p className="text-amber-400/90 font-medium text-sm sm:text-base italic">
                    "{currentClay.tagline}"
                  </p>
                </div>

                {/* Dermal & Ayurvedic Synergy Properties Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  <div className="bg-stone-800/40 border border-stone-800 rounded-xl p-3.5">
                    <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-1">
                      <Droplets size={14} className="text-gold" />
                      <span className="font-semibold uppercase tracking-wider">Suitable Skin Type</span>
                    </div>
                    <p className="text-xs text-stone-200 font-medium">
                      {currentClay.skinType}
                    </p>
                  </div>

                  <div className="bg-stone-800/40 border border-stone-800 rounded-xl p-3.5">
                    <div className="flex items-center gap-1.5 text-xs text-stone-400 mb-1">
                      {getDoshaIcon(currentClay.doshaEffect)}
                      <span className="font-semibold uppercase tracking-wider">Ayurvedic Action</span>
                    </div>
                    <p className="text-xs text-stone-200 font-medium">
                      {currentClay.doshaEffect}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed mb-3">
                    {currentClay.description}
                  </p>
                  
                  {/* Mineral Composition Bar */}
                  <div className="bg-stone-950/60 border border-stone-800/80 rounded-xl p-3 text-xs text-stone-300">
                    <span className="text-gold font-semibold">Active Mineral Composition: </span>
                    {currentClay.composition}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-300/90 mb-3 flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-400" />
                    Key Clinical & Aesthetic Benefits
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {currentClay.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-stone-300">
                        <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Indications Tags */}
                <div className="mb-8">
                  <span className="text-xs text-stone-400 font-medium block mb-2">Recommended for:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentClay.indications.map((ind, idx) => (
                      <span 
                        key={idx} 
                        className="px-2.5 py-1 rounded-md bg-stone-800/80 border border-stone-700/60 text-stone-300 text-xs"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Booking & WhatsApp CTAs */}
              <div className="pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onOpenBooking && onOpenBooking(currentClay.id)}
                  className="w-full sm:w-auto flex-1 btn-primary py-3.5 px-6 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-amber-500/20"
                >
                  <Calendar size={17} />
                  Book {currentClay.name}
                </button>

                <a
                  href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                    `Namaste Ayush Ayurveda, I would like to inquire about booking the ${currentClay.fullName} at your Kompally clinic.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex-1 py-3.5 px-5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 bg-emerald-700/20 border border-emerald-500/40 text-emerald-300 hover:bg-emerald-600/30 transition-all duration-300"
                >
                  <MessageSquare size={17} className="text-emerald-400" />
                  WhatsApp Consult
                </a>
              </div>

            </div>

          </div>
        </div>

        {/* 5-Clay Visual Grid Cards */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-200">
              Explore Our Complete Range of 19 Pure Mineral Clays
            </h3>
            <p className="text-xs md:text-sm text-stone-400 mt-1">
              Click any clay card below to view details and select it in the interactive viewer above.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {clayTherapies.map((clay) => {
              const isSelected = clay.id === selectedClayId;
              return (
                <div
                  key={clay.id}
                  onClick={() => {
                    setSelectedClayId(clay.id);
                    // Smooth scroll back to showcase on mobile
                    const el = document.getElementById('clay-showcase');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group relative bg-stone-900 border rounded-2xl p-3.5 cursor-pointer transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                    isSelected 
                      ? 'border-amber-400 bg-stone-850 shadow-lg shadow-amber-500/10 ring-1 ring-amber-400/40' 
                      : 'border-stone-800 hover:border-stone-700 hover:bg-stone-850'
                  }`}
                >
                  <div>
                    {/* Thumbnail */}
                    <div className="relative aspect-square rounded-xl overflow-hidden mb-3 bg-stone-950">
                      <img 
                        src={clay.image} 
                        alt={clay.name} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <span className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-stone-950/80 backdrop-blur-md text-[10px] font-bold text-amber-300 border border-amber-500/30">
                        #{clay.number}
                      </span>

                    </div>

                    <h4 className="text-sm font-serif font-bold text-stone-100 group-hover:text-gold transition-colors line-clamp-1">
                      {clay.name}
                    </h4>

                    <p className="text-[11px] text-amber-400/80 font-medium mb-1 line-clamp-1">
                      {clay.badge}
                    </p>

                    <p className="text-[11px] text-stone-400 line-clamp-2 leading-snug">
                      {clay.shortDesc}
                    </p>
                  </div>

                  <div className="mt-3 pt-2 border-t border-stone-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-stone-400">{clay.duration}</span>
                    <span className={`font-semibold ${isSelected ? 'text-gold' : 'text-stone-500 group-hover:text-stone-300'}`}>
                      {isSelected ? '● Active' : 'Select →'}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Authentic Center Clay Therapy Menu & Guarantee Card */}
        <div className="bg-gradient-to-r from-amber-950/30 via-stone-900 to-amber-950/20 border border-amber-500/20 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center shrink-0 text-gold">
              <ShieldCheck size={32} />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-serif font-bold text-stone-100">
                100% Pure, Unrefined & Authentically Sourced Clays
              </h4>
              <p className="text-xs sm:text-sm text-stone-400 mt-0.5 max-w-xl">
                Every clay preparation is mixed fresh prior to therapy with medicated decoctions, organic rosewater, and botanical thailams for clinical potency.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a 
              href={`tel:${clinicInfo.phoneRaw}`}
              className="btn-outline text-xs sm:text-sm py-2.5 px-5 rounded-xl flex items-center gap-2 border-amber-500/40 text-amber-300"
            >
              Call: {clinicInfo.phones[0]}
            </a>
            <button
              onClick={() => onOpenBooking && onOpenBooking('moroccan-blue-clay')}
              className="btn-primary text-xs sm:text-sm py-2.5 px-5 rounded-xl flex items-center gap-1.5"
            >
              Book Clay Ritual
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
