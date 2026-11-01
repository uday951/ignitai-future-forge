import React from 'react';
import { ArrowUpRight, CheckCircle2, Code, ShieldCheck, Zap, Layers, Terminal, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const WebDevelopmentPage: React.FC = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://ignivance.in/services/web-development#service',
    name: 'Custom Web Development Services in Hyderabad',
    serviceType: 'Web Development',
    provider: {
      '@type': 'ProfessionalService',
      name: 'Ignivance Technology',
      url: 'https://ignivance.in',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Hitech City, Madhapur',
        addressLocality: 'Hyderabad',
        addressRegion: 'Telangana',
        postalCode: '500081',
        addressCountry: 'IN',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Hyderabad' },
      { '@type': 'Country', name: 'India' },
      { '@type': 'Country', name: 'United States' },
    ],
    description:
      'Premier custom Next.js and full-stack web application development in Hyderabad. Sub-second mobile speeds, high-converting architectures, and 100% intellectual property ownership.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      price: '85000',
      description: 'Bespoke milestone engineering contracts starting at ₹85,000 / $1,200',
    },
  };

  const deliverables = [
    {
      title: 'Custom Next.js (App Router) Applications',
      description:
        'Server-side rendered, statically pre-generated, edge-cached architectures designed for sub-second speeds and flawless Core Web Vitals.',
    },
    {
      title: 'Full-Stack SaaS Platforms & MERN / TypeScript Architectures',
      description:
        'Bespoke database schemas, robust REST/GraphQL APIs, secure authentication, and resilient state management.',
    },
    {
      title: 'High-Converting Headless E-Commerce',
      description:
        'Custom checkout pipelines, catalog indexing, and payment integrations (Razorpay, Stripe) with zero template lag.',
    },
    {
      title: 'Clean Headless CMS Integrations',
      description:
        'Sanity, Strapi, or Git-backed MDX setups that empower marketing teams to publish effortlessly without breaking layouts.',
    },
  ];

  const faqs = [
    {
      question: 'Why choose Next.js over WordPress or Webflow?',
      answer:
        'WordPress and drag-and-drop page builders load megabytes of unused CSS and JavaScript, slowing mobile performance. Next.js delivers pre-rendered static HTML with instant hydration, delivering superior SEO rankings and 0.8s mobile paints.',
    },
    {
      question: 'What is your typical web development turnaround time?',
      answer:
        'Most bespoke website and web application sprints take 3 to 6 weeks from technical brief to production DNS cutover, deployed in disciplined weekly milestones.',
    },
    {
      question: 'Do we own the source code?',
      answer:
        'Yes. You own 100% of the repository, Git commits, deployment keys, and design tokens from day one upon milestone completion.',
    },
  ];

  return (
    <>
      <SEO
        title="Custom Web Development Company in Hyderabad | Ignivance"
        description="Ignivance is a premier custom web development company in Hyderabad. Bespoke Next.js web applications, sub-second mobile speeds, and technical SEO architecture."
        keywords="custom web development company in hyderabad, nextjs development agency india, bespoke website development hyderabad, web design agency hitech city"
        canonical="https://ignivance.in/services/web-development"
        schema={serviceSchema}
      />

      <div className="min-h-screen bg-[#FDFDFC] text-[#0D0E11] font-sans antialiased selection:bg-[#0D0E11] selection:text-white">
        <Navbar />

        <main className="pt-28 md:pt-40 pb-24 md:pb-36 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#707175] mb-8">
              <Link to="/" className="hover:text-black">HOME</Link>
              <span>/</span>
              <Link to="/services" className="hover:text-black">SERVICES</Link>
              <span>/</span>
              <span className="text-[#0D0E11] font-semibold">WEB DEVELOPMENT</span>
            </div>

            {/* Header */}
            <div className="mb-16 pb-12 border-b border-black/[0.08]">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-ignis-500"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                  01 / ENGINEERING & ARCHITECTURE
                </span>
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#0D0E11] tracking-tight uppercase leading-[0.94]">
                CUSTOM WEB DEVELOPMENT<br />
                <span className="text-ignis-500">IN HYDERABAD.</span>
              </h1>
              <p className="mt-6 text-xl sm:text-2xl font-serif italic text-[#55565A] max-w-3xl">
                "Hand-crafted Next.js and full-stack web applications. Built from the DOM up with zero template bloat."
              </p>

              {/* Direct-Answer GEO Box */}
              <div className="mt-8 p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08]">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase tracking-wider text-ignis-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-ignis-600"></span>
                  EXECUTIVE AGENCY BRIEF
                </div>
                <p className="text-base text-[#17181C] leading-relaxed">
                  <strong>Ignivance Technology</strong> is an independent custom web development studio in Hitech City, Hyderabad. Unlike conventional agencies using bloated $29 WordPress templates or fragile AI code generators, we write production-grade Next.js, React, and TypeScript platforms with guaranteed 0.8s mobile paints, 95+ Google Lighthouse scores, and 100% intellectual property ownership.
                </p>
              </div>
            </div>

            {/* Deliverables Grid */}
            <div className="mb-20">
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight mb-8">
                WHAT WE DELIVER
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="p-8 rounded-2xl bg-white border border-black/[0.08] shadow-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-lg bg-black/[0.04] flex items-center justify-center font-mono text-xs font-bold text-ignis-600">
                        0{idx + 1}
                      </div>
                      <h3 className="font-display font-bold text-lg text-[#0D0E11] uppercase tracking-wide">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-sm sm:text-base text-[#55565A] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="mb-20">
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight mb-8">
                FREQUENTLY ASKED QUESTIONS
              </h2>
              <div className="space-y-4">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-white border border-black/[0.08]">
                    <h3 className="font-display font-bold text-base sm:text-lg text-[#0D0E11] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm sm:text-base text-[#55565A] leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="p-10 md:p-14 rounded-3xl bg-[#0D0E11] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-ignis-400 block mb-2">
                  START YOUR PROJECT
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight">
                  READY TO BUILD YOUR DIGITAL FLAGSHIP?
                </h3>
                <p className="mt-2 text-sm text-[#A0A1A5] max-w-xl">
                  Talk directly with our lead software engineers in Hitech City. We review your scope within 24 hours.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-xl bg-white text-[#0D0E11] font-bold hover:bg-ignis-500 hover:text-white transition-colors"
              >
                <span>REQUEST DETAILED PROPOSAL</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default WebDevelopmentPage;
