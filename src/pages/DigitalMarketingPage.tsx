import React from 'react';
import { ArrowUpRight, CheckCircle2, TrendingUp, BarChart3, Search, Target, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const DigitalMarketingPage: React.FC = () => {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://ignivance.in/services/digital-marketing-growth#service',
    name: 'Digital Marketing & Growth Agency in Hyderabad',
    serviceType: 'Digital Marketing & Growth',
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
      'Data-driven digital marketing agency in Hyderabad. Technical SEO, Google Local 3-Pack dominance, high-intent performance advertising, and qualified inbound pipeline engineering.',
    offers: {
      '@type': 'Offer',
      priceCurrency: 'INR',
      description: 'Performance-driven growth retainers and high-intent acquisition campaigns.',
    },
  };

  const deliverables = [
    {
      title: 'Technical SEO & Search Dominance',
      description:
        'Semantic HTML hierarchy, JSON-LD knowledge graph integration, Core Web Vitals optimization, and high-intent keyword clustering that captures ready-to-buy customers.',
    },
    {
      title: 'Google Local 3-Pack Map Optimization',
      description:
        'Dominating regional map results across Hyderabad business corridors with strict NAP consistency, geo-tagged signals, and client review acquisition funnels.',
    },
    {
      title: 'High-Converting Performance Ads (Google & Meta)',
      description:
        'Hyper-targeted search intent campaigns, custom landing page funnels, server-side Conversion API (CAPI), and negative keyword suppression to maximize return on ad spend (ROAS).',
    },
    {
      title: 'Conversion Rate Optimization (CRO) & Telemetry',
      description:
        'Detailed tracking of call buttons, WhatsApp inquiries, and form completions with real revenue attribution rather than empty vanity impression reports.',
    },
  ];

  const faqs = [
    {
      question: 'How do you measure digital marketing success?',
      answer:
        'We reject empty vanity impression reports. We measure outcomes in real pipeline revenue: qualified inbound inquiries, direct phone calls, WhatsApp project briefs, and closed client deals.',
    },
    {
      question: 'How quickly can our website rank on Google?',
      answer:
        'Technical SEO fixes, schema markup, and Google Local 3-Pack improvements typically produce visible rank movements within 2 to 4 weeks. Competitive national commercial keywords require 60 to 90 days of consistent topical cluster publishing and authority citations.',
    },
    {
      question: 'Do you manage both SEO and paid advertising campaigns?',
      answer:
        'Yes. We operate an integrated search engine model where high-intent Google Ads capture immediate buyer demand while technical SEO compounds organic authority over time.',
    },
  ];

  return (
    <>
      <SEO
        title="Digital Marketing Agency in Hyderabad | Growth & SEO | Ignivance"
        description="Ignivance is a premier digital marketing agency in Hyderabad. Technical SEO, Google Local 3-Pack dominance, high-intent performance ads, and revenue-driven client acquisition."
        keywords="digital marketing agency hyderabad, technical seo services india, best digital marketing company hyderabad, performance marketing hyderabad, b2b seo agency"
        canonical="https://ignivance.in/services/digital-marketing-growth"
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
              <span className="text-[#0D0E11] font-semibold">DIGITAL MARKETING</span>
            </div>

            {/* Header */}
            <div className="mb-16 pb-12 border-b border-black/[0.08]">
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-ignis-500"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                  02 / ACQUISITION & SEARCH DOMINANCE
                </span>
              </div>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl text-[#0D0E11] tracking-tight uppercase leading-[0.94]">
                DIGITAL MARKETING AGENCY<br />
                <span className="text-ignis-500">IN HYDERABAD.</span>
              </h1>
              <p className="mt-6 text-xl sm:text-2xl font-serif italic text-[#55565A] max-w-3xl">
                "Technical SEO, Google 3-Pack local dominance, and performance pipelines that deliver verified business revenue."
              </p>

              {/* Direct-Answer GEO Box */}
              <div className="mt-8 p-6 rounded-2xl bg-black/[0.03] border border-black/[0.08]">
                <div className="flex items-center gap-2 mb-2 font-mono text-xs font-bold uppercase tracking-wider text-ignis-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-ignis-600"></span>
                  EXECUTIVE AGENCY BRIEF
                </div>
                <p className="text-base text-[#17181C] leading-relaxed">
                  <strong>Ignivance Technology</strong> is a technical digital marketing and search engine growth agency based in Hitech City, Hyderabad. Rejecting vanity impressions and bloated agency markups, we specialize in high-intent organic ranking, Google Local 3-Pack capture, and full-funnel paid media campaigns engineered to generate qualified inbound customer contracts.
                </p>
              </div>
            </div>

            {/* Deliverables Grid */}
            <div className="mb-20">
              <h2 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight mb-8">
                GROWTH DISCIPLINES & DELIVERABLES
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
                  SCALE YOUR REVENUE
                </span>
                <h3 className="font-display font-extrabold text-2xl sm:text-4xl uppercase tracking-tight">
                  WANT TO DOMINATE YOUR MARKET CORRIDOR?
                </h3>
                <p className="mt-2 text-sm text-[#A0A1A5] max-w-xl">
                  Contact our growth engineers in Hyderabad. We audit your search positioning and deliver a custom roadmap.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider px-6 py-4 rounded-xl bg-white text-[#0D0E11] font-bold hover:bg-ignis-500 hover:text-white transition-colors"
              >
                <span>REQUEST REVENUE AUDIT</span>
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

export default DigitalMarketingPage;
