import React from 'react';
import SEO from '@/components/SEO';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Trust from '@/components/Trust';
import WhatWeDo from '@/components/WhatWeDo';
import WorkMarquee from '@/components/WorkMarquee';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import InsightsSection from '@/components/InsightsSection';
import EducationSection from '@/components/EducationSection';
import SocialProof from '@/components/SocialProof';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Ignivance',
    alternateName: 'Ignivance Technology',
    url: 'https://ignivance.in',
    logo: 'https://ignivance.in/ignivance.png',
    description:
      'Ignivance is a digital product studio crafting web apps, mobile apps, and AI systems for startups and businesses.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-7989442841',
      contactType: 'customer service',
      email: 'ignivance@zohoemail.in',
    },
    sameAs: [
      'https://www.linkedin.com/in/udaykiran-koshika-a51142283/',
      'https://github.com/uday951',
      'https://www.instagram.com/udaytechx/',
    ],
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#111111] selection:bg-[#FF4D1C] selection:text-white font-sans">
      <SEO
        title="Ignivance — Digital Product Studio"
        description="Ignivance is a digital product studio crafting web apps, mobile apps, and AI systems for startups and businesses."
        keywords="Ignivance, Digital product studio, web apps, mobile apps, AI systems, product design, Hyderabad"
        canonical="https://ignivance.in/"
        schema={schema}
      />

      {/* Sticky Glass Navbar */}
      <Navbar />

      <main>
        {/* 1. HERO */}
        <Hero />

        {/* 2. TRUST STRIP */}
        <Trust />

        {/* 3. CAPABILITIES */}
        <WhatWeDo />

        {/* 4. BRAND MARQUEE (Selected Work) */}
        <WorkMarquee />

        {/* 5. PROCESS */}
        <ProcessSection />

        {/* 6. ABOUT */}
        <AboutSection />

        {/* 7. INSIGHTS */}
        <InsightsSection />

        {/* 8. EDUCATION (Dark Section) */}
        <EducationSection />

        {/* 9. TESTIMONIALS */}
        <SocialProof />

        {/* 10 & 11. CTA BANNER + CONTACT FORM */}
        <FinalCTA />
      </main>

      {/* 12. FOOTER (Dark Section) */}
      <Footer />
    </div>
  );
};

export default Index;
