import { Award, Target, Users, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: Target,
      title: 'Quality First',
      description: 'We never compromise on code quality or design standards.'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Every website we build is optimized for speed and efficiency.'
    },
    {
      icon: Users,
      title: 'Client Partnership',
      description: 'We work with you, not for you. Your success is our success.'
    },
    {
      icon: Award,
      title: 'Transparent Process',
      description: 'Clear communication, honest timelines, no hidden surprises.'
    }
  ];

  const stats = [
    { number: '20+', label: 'Projects Delivered' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '4+', label: 'Years Experience' },
    { number: 'MSME', label: 'Registered' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-24">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Building Premium Websites for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're a web development agency focused on creating fast, clean, and effective websites that help businesses grow.
            </p>
          </div>

          {/* Story */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Ignivance started with a simple belief: websites should be fast, clean, and effective. Too many businesses struggle with slow, complicated websites that don't deliver results.
                </p>
                <p>
                  We set out to change that. Our approach combines modern technology with timeless design principles to create websites that perform exceptionally well and look great doing it.
                </p>
                <p>
                  Today, we work with startups and established businesses to build web solutions that drive real growth. Every project is an opportunity to deliver something we're proud of.
                </p>
              </div>
            </div>
            <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
              <div className="text-6xl">🚀</div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              What Drives Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6">
                  <value.icon className="w-10 h-10 text-blue-500 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gray-50 rounded-2xl p-12 mb-24">
            <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-white border border-gray-200 rounded-2xl p-12 mb-24">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Award className="w-12 h-12 text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold text-slate-900">MSME Registered</h3>
                <p className="text-gray-600">Government of India Certified</p>
              </div>
            </div>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              We're officially registered with the Ministry of Micro, Small and Medium Enterprises, ensuring professional standards and accountability.
            </p>
          </div>

          {/* CTA */}
          <div className="bg-blue-500 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Let's Work Together
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Ready to build something great? Get in touch and let's discuss your project.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
            >
              Start a Project
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
