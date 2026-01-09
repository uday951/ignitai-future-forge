import { Check } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the package that fits your needs. No hidden fees, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, i) => (
              <div
                key={i}
                className={`bg-white border-2 rounded-2xl p-8 ${
                  pkg.popular ? 'border-blue-500 relative' : 'border-gray-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <div className="text-4xl font-bold text-slate-900 mb-2">{pkg.price}</div>
                <p className="text-gray-600 mb-6">{pkg.description}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`block text-center py-3 rounded-xl font-semibold ${
                    pkg.popular
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-100 text-slate-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Frequently Asked Questions
            </h3>
            <div className="max-w-3xl mx-auto space-y-6">
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
                <div key={i}>
                  <h4 className="font-bold text-slate-900 mb-2">{faq.q}</h4>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
