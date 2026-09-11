import React from 'react';
import { Helmet } from 'react-helmet-async';
import { clinicInfo } from '../data/ayurvedaData';

export default function SEO({ title, description, keywords, ogImage, ogType = "website" }) {
  const siteTitle = clinicInfo.name;
  const fullTitle = title ? `${title} | ${siteTitle}` : `${siteTitle} | Best Ayurvedic Clinic Kompally`;
  const metaDescription = description || "Authentic Kerala Ayurveda & Classical Panchakarma center specializing in Back Pain, Sciatica, Arthritis, Spondylosis, Migraine, and Full Body Rejuvenation. Home to 35+ therapies and India's largest mineral clay therapy collection.";
  const metaKeywords = keywords || "Kerala Ayurveda Hyderabad, Ayurvedic Massage Kompally, Panchakarma Kompally, Panchakarma Hyderabad, Sciatica Treatment Hyderabad, Ayurvedic Pain Relief";
  const image = ogImage || "https://ayushayurvedapanchakaranam.com/images/logo.jpg";
  const currentUrl = typeof window !== 'undefined' ? window.location.href : "https://ayushayurvedapanchakaranam.com/";

  return (
    <Helmet>
      {/* Standard SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph / Social Media */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
