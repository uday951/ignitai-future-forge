import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const Pricing = () => {
  const packages = [
    {
      name: 'Starter',
      price: '₹25,000',
      description: 'Perfect for small businesses and startups',
      features: [
        '5-page website',
        'Responsive design',
        'Basic SEO setup',
        '1 month support',
        '2 rounds of revisions'
      ]
    },
    {
      name: 'Professional',
      price: '₹50,000',
      description: 'Most popular for growing businesses',
      features: [
        '10-page website',
        'Custom design',
        'Advanced SEO',
        'Performance optimization',
        '3 months support',
        'Unlimited revisions',
        'CMS integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For complex projects and large organizations',
      features: [
        'Unlimited pages',
        'Custom functionality',
        'API integrations',
        'Advanced features',
        '6 months support',
        'Priority support',
        'Dedicated team'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title="Pricing | Web Development Agency & AI Solutions"
        description="Transparent and competitive pricing for full stack web development and AI automation solutions. Get affordable rates for top-tier agency work."
        keywords="web development pricing, scalable web development cost, startup automation solutions pricing, AI development company rates"
        canonical="https://ignivance.in/pricing"
      />
      <Navbar />
      
      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Simple, Transparent Pricing
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Choose the package that fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-24">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`bg-white rounded-3xl p-6 sm:p-8 flex flex-col h-full shadow-lg transition-all duration-300 ${
                  pkg.popular ? 'border-2 border-blue-600 shadow-blue-600/10 scale-100 lg:scale-105 relative z-10' : 'border border-gray-100 shadow-slate-200/50'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase shadow-md">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-2">{pkg.price}</div>
                  <p className="text-slate-600 text-sm md:text-base">{pkg.description}</p>
                </div>
                
                <div className="flex-1">
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href="/contact"
                  className={`block text-center py-4 rounded-xl font-bold transition-all ${
                    pkg.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-600 focus:ring-offset-2'
                      : 'bg-slate-100 text-slate-900 hover:bg-slate-200 focus:ring-2 focus:ring-slate-200 focus:ring-offset-2'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 md:p-12 lg:p-16">
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-8 md:mb-12 text-center tracking-tight">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {[
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept bank transfers, UPI, and online payments. 50% upfront, 50% on completion.'
                },
                {
                  q: 'How long does a project take?',
                  a: 'Starter: 2-3 weeks, Professional: 4-6 weeks, Enterprise: Custom timeline.'
                },
                {
                  q: 'Do you offer maintenance after launch?',
                  a: 'Yes, all packages include support. Extended maintenance plans available separately.'
                },
                {
                  q: 'Can I upgrade my package later?',
                  a: 'Absolutely. You can upgrade anytime during or after the project.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-slate-50 p-6 rounded-2xl">
                  <h4 className="text-lg font-bold text-slate-900 mb-3 leading-snug">{faq.q}</h4>
                  <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
