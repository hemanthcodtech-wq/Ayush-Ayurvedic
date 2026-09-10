import React from 'react';
import ClayTherapiesSection from '../components/ClayTherapiesSection';
import { clinicInfo, clayTherapies } from '../data/ayurvedaData';
import { Sparkles, Shield, HeartPulse, Droplets, CheckCircle, Phone, MessageSquare, ArrowRight } from 'lucide-react';

export default function ClaysPage({ onOpenBooking, setActivePage }) {
  return (
    <div className="pt-24 pb-16">
      
      {/* Hero Banner */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 overflow-hidden border-b border-stone-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider uppercase mb-5">
            <Sparkles size={14} className="text-amber-400" />
            <span>Ayush Ayurveda Exclusive Earth Therapy</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-stone-100 leading-tight mb-6">
            Pure Moroccan & Natural <span className="text-gradient-gold">Clay Therapies</span>
          </h1>

          <p className="text-stone-300 text-base md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto">
            India's largest collection of 19 authentic mineral clays from Morocco, Brazil, France, Dead Sea, Siberia, and classical Ayurvedic tradition — each with unique therapeutic properties for skin, joints, and deep detoxification.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenBooking && onOpenBooking('moroccan-blue-clay')}
              className="btn-primary py-3.5 px-8 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-xl shadow-amber-500/20"
            >
              <span>Book a Clay Ritual</span>
              <ArrowRight size={16} />
            </button>

            <a
              href={`tel:${clinicInfo.phoneRaw}`}
              className="btn-outline py-3.5 px-6 rounded-xl text-sm font-semibold flex items-center gap-2 border-stone-700 text-stone-300 hover:text-white hover:border-amber-400"
            >
              <Phone size={16} className="text-primary-gold" />
              <span>Call: {clinicInfo.phones[0]}</span>
            </a>
          </div>

          {/* Quick stats pills */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-stone-800/80 max-w-3xl mx-auto text-left">
            <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
              <span className="text-2xl font-serif font-bold text-primary-gold block">19 Types</span>
              <span className="text-xs text-stone-400">Authentic Clays & Muds</span>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
              <span className="text-2xl font-serif font-bold text-primary-gold block">100% Pure</span>
              <span className="text-xs text-stone-400">Natural & Organic Sourced</span>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
              <span className="text-2xl font-serif font-bold text-primary-gold block">45 Mins</span>
              <span className="text-xs text-stone-400">Comprehensive Ritual</span>
            </div>
            <div className="bg-stone-900/60 p-4 rounded-xl border border-stone-800">
              <span className="text-2xl font-serif font-bold text-primary-gold block">Kompally</span>
              <span className="text-xs text-stone-400">Clinic Consultation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Clays Section with Dropdown & Visuals */}
      <div id="clay-showcase">
        <ClayTherapiesSection 
          onOpenBooking={onOpenBooking} 
          setActivePage={setActivePage} 
          isStandalone={true}
        />
      </div>

      {/* Why Mineral Clays Work - Scientific & Ayurvedic Insight */}
      <section className="py-16 bg-stone-950 border-t border-b border-stone-800">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-4xl font-serif font-bold text-stone-100 mb-3">
              The Science of <span className="text-gradient-gold">Transdermal Clay Therapy</span>
            </h2>
            <p className="text-stone-400 text-sm md:text-base">
              Why mineral clays provide deep lasting healing beyond ordinary cosmetic masks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-primary-gold flex items-center justify-center mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-200 mb-2">
                1. Ionic Cation-Exchange Detox
              </h3>
              <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                Volcanic muds like Moroccan Ghassoul carry a negative electrostatic charge that pulls positively charged dermal toxins, heavy metals, and oxidized sebum straight out of pores.
              </p>
            </div>

            <div className="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-primary-gold flex items-center justify-center mb-4">
                <Droplets size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-200 mb-2">
                2. Transdermal Mineral Nourishment
              </h3>
              <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                As toxins are drawn out, rich bio-available Silica (58%), Magnesium (25%), Iron, Calcium, and Zinc are deposited into the dermal layer to rebuild collagen integrity.
              </p>
            </div>

            <div className="bg-stone-900/80 border border-stone-800 p-6 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-primary-gold flex items-center justify-center mb-4">
                <HeartPulse size={24} />
              </div>
              <h3 className="text-lg font-serif font-bold text-stone-200 mb-2">
                3. Micro-Circulation & Dosha Harmony
              </h3>
              <p className="text-xs md:text-sm text-stone-400 leading-relaxed">
                Warming terracotta clays stimulate capillary blood flow to pacify cold Vata aches, while soothing Kaolin and Blue Nila pacify inflammatory Pitta redness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking Callout */}
      <section className="py-12 bg-gradient-to-r from-stone-900 via-stone-900/90 to-stone-900 border-b border-stone-800">
        <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl md:text-2xl font-serif font-bold text-stone-100">
              Ready to experience our Moroccan & Natural Clay Therapies?
            </h3>
            <p className="text-stone-400 text-sm mt-1">
              Visit us at Raichandani 5 Star Complex, Opp. Pista House, Kompally, Hyderabad.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenBooking && onOpenBooking('moroccan-blue-clay')}
              className="btn-primary py-3 px-6 rounded-xl text-sm font-semibold whitespace-nowrap"
            >
              Book Appointment Now
            </button>
            <a
              href={`https://wa.me/${clinicInfo.whatsappNumber}?text=${encodeURIComponent(
                'Namaste Ayush Ayurveda, I want to book a Clay Therapy session at your Kompally clinic.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 hover:bg-emerald-600/30 transition-colors"
            >
              <MessageSquare size={20} />
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
