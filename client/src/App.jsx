import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import BookingModal from './components/BookingModal';
import TherapyDetailModal from './components/TherapyDetailModal';
import DoshaQuizModal from './components/DoshaQuizModal';
import ScrollToTop from './components/ScrollToTop';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TherapiesPage from './pages/TherapiesPage';
import PricingPage from './pages/PricingPage';
import GalleryPage from './pages/GalleryPage';
import TestimonialsPage from './pages/TestimonialsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import ContactPage from './pages/ContactPage';
import BookAppointmentPage from './pages/BookAppointmentPage';
import ClaysPage from './pages/ClaysPage';
import TherapyDetailPage from './pages/TherapyDetailPage';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedTherapy, setPreselectedTherapy] = useState(null);
  const [selectedTherapyDetail, setSelectedTherapyDetail] = useState(null);
  const [isDoshaQuizOpen, setIsDoshaQuizOpen] = useState(false);

  const navigate = useNavigate();

  // Handle opening global booking modal
  const handleOpenBooking = (therapyId) => {
    if (typeof therapyId === 'string') {
      setPreselectedTherapy(therapyId);
    } else {
      setPreselectedTherapy(null);
    }
    setIsBookingOpen(true);
  };

  const handleSelectTherapy = (therapy) => {
    setSelectedTherapyDetail(therapy);
  };

  // Helper for components that might still pass page string
  const handleNavigate = (page) => {
    if (page === 'home') navigate('/');
    else navigate(`/${page}`);
  };

  return (
    <HelmetProvider>
      <div className="ayurveda-app min-h-screen flex flex-col bg-[#FFFDF9]">
      
      {/* Auto scroll-to-top on route change */}
      <ScrollToTop />

      {/* Global Header & Navigation */}
      <Navbar 
        onOpenBooking={() => handleOpenBooking()}
        onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
      />

      {/* Main Dynamic View with True URL Routing */}
      <main className="flex-1">
        <Routes>
          <Route 
            path="/" 
            element={
              <HomePage 
                setActivePage={handleNavigate} 
                onOpenBooking={handleOpenBooking} 
                onSelectTherapy={handleSelectTherapy}
                onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
              />
            } 
          />
          <Route 
            path="/about" 
            element={
              <AboutPage 
                setActivePage={handleNavigate} 
                onOpenBooking={handleOpenBooking}
                onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
              />
            } 
          />
          <Route 
            path="/therapies" 
            element={
              <TherapiesPage 
                onOpenBooking={handleOpenBooking} 
                onSelectTherapy={handleSelectTherapy} 
              />
            } 
          />
          <Route 
            path="/therapies/:id" 
            element={
              <TherapyDetailPage 
                onOpenBooking={handleOpenBooking} 
              />
            } 
          />
          <Route 
            path="/clays" 
            element={
              <ClaysPage 
                setActivePage={handleNavigate}
                onOpenBooking={handleOpenBooking}
              />
            } 
          />
          <Route 
            path="/pricing" 
            element={
              <PricingPage 
                onOpenBooking={handleOpenBooking} 
              />
            } 
          />
          <Route 
            path="/gallery" 
            element={
              <GalleryPage 
                onOpenBooking={handleOpenBooking} 
              />
            } 
          />
          <Route 
            path="/testimonials" 
            element={
              <TestimonialsPage 
                onOpenBooking={handleOpenBooking} 
              />
            } 
          />
          <Route 
            path="/blog" 
            element={
              <BlogPage 
                onOpenBooking={handleOpenBooking} 
              />
            } 
          />
          <Route 
            path="/blog/:id" 
            element={
              <BlogDetailPage 
                onOpenBooking={handleOpenBooking} 
              />
            } 
          />
          <Route 
            path="/contact" 
            element={
              <ContactPage 
                onOpenBooking={handleOpenBooking} 
              />
            } 
          />
          <Route 
            path="/book-appointment" 
            element={
              <BookAppointmentPage />
            } 
          />
          {/* Fallback to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Footer */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()}
        onOpenDoshaQuiz={() => setIsDoshaQuizOpen(true)}
      />

      {/* Floating Speed Dial & WhatsApp Actions */}
      <FloatingActions />

      {/* Global Booking Modal */}
      <BookingModal 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)} 
        preselectedTherapy={preselectedTherapy}
      />

      {/* Therapy Details Modal */}
      <TherapyDetailModal 
        therapy={selectedTherapyDetail} 
        isOpen={!!selectedTherapyDetail} 
        onClose={() => setSelectedTherapyDetail(null)}
        onBookTherapy={(therapyId) => handleOpenBooking(therapyId)}
      />

      {/* Dosha Quiz Modal */}
      <DoshaQuizModal 
        isOpen={isDoshaQuizOpen}
        onClose={() => setIsDoshaQuizOpen(false)}
        onOpenBooking={() => handleOpenBooking()}
      />

      </div>
    </HelmetProvider>
  );
}
