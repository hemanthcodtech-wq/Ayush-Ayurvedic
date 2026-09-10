import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, RotateCcw, ArrowRight, Calendar } from 'lucide-react';
import { doshaQuizQuestions } from '../data/ayurvedaData';

export default function DoshaQuizModal({ isOpen, onClose, onOpenBooking }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [quizResult, setQuizResult] = useState(null);

  if (!isOpen) return null;

  const handleSelectOption = (dosha) => {
    const newAnswers = [...answers, dosha];
    setAnswers(newAnswers);

    if (currentStep + 1 < doshaQuizQuestions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate dominant dosha
      const counts = { Vata: 0, Pitta: 0, Kapha: 0 };
      newAnswers.forEach(d => {
        if (counts[d] !== undefined) counts[d]++;
      });

      let dominant = 'Vata';
      if (counts.Pitta > counts.Vata && counts.Pitta >= counts.Kapha) dominant = 'Pitta';
      if (counts.Kapha > counts.Vata && counts.Kapha > counts.Pitta) dominant = 'Kapha';

      const recommendations = {
        Vata: {
          title: "Vata Predominant (Air & Ether)",
          traits: "Creative, quick, energetic, but prone to dry skin, anxiety, joint pains, back stiffness, and insomnia.",
          recommendedTherapies: ["Abhyangam (Warm Medicated Oil Massage)", "Kadi Vasthi (Spine Disc Care)", "Shirodhara (Nervous Calming)", "Ela Kizhi (Hot Herbal Poultice)"],
          lifestyleTip: "Favor warm, cooked, nourishing foods, regular sleep routines, and daily warm herbal oil self-massage."
        },
        Pitta: {
          title: "Pitta Predominant (Fire & Water)",
          traits: "Sharp intellect, ambitious, strong digestion, but prone to body heat, hyperacidity, skin redness, migraines, and anger.",
          recommendedTherapies: ["Thakradhara (Medicated Buttermilk Stream)", "Shirodhara (Cooling Flow)", "Mukha Lepam (Sandalwood Face Pack)", "Nethra Dhara (Eye Care)"],
          lifestyleTip: "Favor cooling foods, sweet fruits, coconut water, moderate exercise, and avoid overly spicy/sour meals."
        },
        Kapha: {
          title: "Kapha Predominant (Earth & Water)",
          traits: "Calm, compassionate, strong immunity, but prone to weight gain, sluggish metabolism, water retention, and lethargy.",
          recommendedTherapies: ["Udhwarthanam (Herbal Powder Slimming Massage)", "Podi Kizhi (Dry Herbal Poultice)", "Herbal Steam Bath (Bashpa Swedana)", "Nasyam (Sinus Drainage)"],
          lifestyleTip: "Engage in daily vigorous exercise, favor warm spicy foods, light meals, and avoid heavy dairy or daytime sleep."
        }
      };

      setQuizResult({
        dominant,
        counts,
        ...recommendations[dominant]
      });
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setAnswers([]);
    setQuizResult(null);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '620px' }}>
        
        {/* Header */}
        <div style={{
          backgroundColor: 'var(--color-primary-dark)',
          color: '#ffffff',
          padding: '20px 24px',
          borderTopLeftRadius: 'var(--radius-lg)',
          borderTopRightRadius: 'var(--radius-lg)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Sparkles size={22} color="var(--color-gold)" />
            <div>
              <h3 style={{ color: '#ffffff', fontSize: '1.2rem', margin: 0 }}>
                Ayurvedic Prakriti (Dosha) Discovery
              </h3>
              <div style={{ fontSize: '0.78rem', color: '#c2d1c6' }}>
                Discover your constitutional balance &amp; recommended therapies
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#ffffff', cursor: 'pointer', padding: '4px' }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div style={{ padding: '24px' }}>
          {quizResult ? (
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', backgroundColor: 'rgba(197, 157, 95, 0.2)', color: 'var(--color-gold-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Sparkles size={32} />
              </div>

              <span className="section-badge">Your Ayurvedic Constitution</span>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--color-primary-dark)', marginBottom: '8px' }}>
                {quizResult.title}
              </h4>

              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '18px', lineHeight: '1.6' }}>
                {quizResult.traits}
              </p>

              {/* Recommended Therapies */}
              <div style={{ backgroundColor: 'var(--color-primary-subtle)', borderRadius: 'var(--radius-md)', padding: '16px', textAlign: 'left', marginBottom: '16px' }}>
                <div style={{ fontWeight: '700', color: 'var(--color-primary-dark)', fontSize: '0.92rem', marginBottom: '8px' }}>
                  🌿 Recommended Therapies for You:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {quizResult.recommendedTherapies.map((t, i) => (
                    <li key={i} style={{ fontSize: '0.86rem', color: '#333', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <CheckCircle2 size={14} color="var(--color-primary)" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div style={{ backgroundColor: 'var(--color-warm-gray)', borderRadius: 'var(--radius-md)', padding: '14px', textAlign: 'left', marginBottom: '22px', fontSize: '0.85rem', color: '#444' }}>
                <strong>Vaidya Advice:</strong> {quizResult.lifestyleTip}
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <button
                  onClick={handleRestart}
                  className="btn-outline"
                  style={{ padding: '10px 18px', fontSize: '0.88rem' }}
                >
                  <RotateCcw size={15} />
                  <span>Retake Quiz</span>
                </button>
                <button
                  onClick={() => {
                    onClose();
                    onOpenBooking();
                  }}
                  className="btn-primary"
                  style={{ padding: '10px 22px', fontSize: '0.88rem' }}
                >
                  <Calendar size={15} />
                  <span>Book Recommended Therapy</span>
                </button>
              </div>
            </div>
          ) : (
            <div>
              
              {/* Progress */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', fontSize: '0.85rem', color: 'var(--color-primary)' }}>
                <strong>Question {currentStep + 1} of {doshaQuizQuestions.length}</strong>
                <span>{Math.round(((currentStep + 1) / doshaQuizQuestions.length) * 100)}% Complete</span>
              </div>

              <div style={{ width: '100%', height: '6px', backgroundColor: 'var(--color-warm-gray)', borderRadius: '9999px', overflow: 'hidden', marginBottom: '20px' }}>
                <div style={{ width: `${((currentStep + 1) / doshaQuizQuestions.length) * 100}%`, height: '100%', backgroundColor: 'var(--color-gold)', transition: 'width 0.3s ease' }}></div>
              </div>

              {/* Question Text */}
              <h4 style={{ fontSize: '1.15rem', color: 'var(--color-primary-dark)', marginBottom: '18px' }}>
                {doshaQuizQuestions[currentStep].question}
              </h4>

              {/* Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {doshaQuizQuestions[currentStep].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.dosha)}
                    style={{
                      textAlign: 'left',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-md)',
                      backgroundColor: '#ffffff',
                      border: '1px solid var(--color-border)',
                      cursor: 'pointer',
                      fontSize: '0.92rem',
                      color: 'var(--color-charcoal)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-subtle)';
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = '#ffffff';
                      e.currentTarget.style.borderColor = 'var(--color-border)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    <span>{opt.text}</span>
                    <ArrowRight size={16} color="var(--color-gold-dark)" />
                  </button>
                ))}
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
}
