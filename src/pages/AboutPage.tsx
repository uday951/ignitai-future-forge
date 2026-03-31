import { Award, Target, Users, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title="About Ignivance | Top AI Development Company & Tech Agency"
        description="Learn about Ignivance, an elite AI development company providing full stack development services and intelligent automation solutions for startups globally."
        keywords="About Ignivance, top AI development company, full stack development services, automation solutions for startups"
        canonical="https://ignivance.in/about"
      />
      <Navbar />
      
      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Building Premium Websites for Modern Businesses
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We're a web development agency focused on creating fast, clean, and effective websites that help businesses grow.
            </p>
          </div>

          {/* Story */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center mb-16 md:mb-32">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6 tracking-tight">Our Story</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg">
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
            <div className="order-1 md:order-2 w-full aspect-square bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-[2rem] flex items-center justify-center p-8">
              <div className="text-8xl md:text-9xl transform hover:scale-110 hover:-rotate-12 transition-all duration-500 drop-shadow-md cursor-default">🚀</div>
            </div>
          </div>

          {/* Values */}
          <div className="mb-16 md:mb-32">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-10 md:mb-16 text-center tracking-tight">
              What Drives Us
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, i) => (
                <div key={i} className="bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-600 transition-all duration-300 rounded-2xl p-6 md:p-8">
                  <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 md:p-16 mb-16 md:mb-32">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-10 md:mb-12 text-center tracking-tight">
              By the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 mb-3 group-hover:scale-110 transition-transform tracking-tight">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium uppercase tracking-widest text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Credentials */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2rem] p-8 md:p-16 mb-16 md:mb-32 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-150 transform translate-x-1/2 -translate-y-1/2 mix-blend-screen"></div>
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8 text-center md:text-left">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                  <Award className="w-10 h-10 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-4xl font-extrabold mb-2 tracking-tight">MSME Registered</h3>
                  <p className="text-blue-200 font-medium tracking-wide uppercase text-sm md:text-base">Government of India Certified</p>
                </div>
              </div>
              <p className="text-center md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
                We're officially registered with the Ministry of Micro, Small and Medium Enterprises, ensuring professional standards, quality assurance and business accountability for every single project we undertake.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-600 rounded-[2rem] p-8 md:p-16 text-center shadow-xl shadow-blue-600/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-700 w-full h-full transform origin-top-right rotate-12 -translate-y-20 scale-150 rounded-full opacity-30 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Let's Work Together
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Ready to build something great? Get in touch and let's discuss your project.
              </p>
              <a
                href="/contact"
                className="inline-flex justify-center flex-shrink-0 w-full sm:w-auto bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all shadow-md"
              >
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
