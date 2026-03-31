import { Code, Palette, Zap, Wrench } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ServicesPage = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'We create clean, modern interfaces that convert visitors into customers. Every design decision is backed by user experience principles and conversion optimization.',
      deliverables: [
        'Custom UI/UX design',
        'Mobile-responsive layouts',
        'Brand-aligned visuals',
        'Interactive prototypes',
        'Design system documentation'
      ],
      process: 'Discovery → Wireframes → Design → Feedback → Refinement'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fast, scalable websites built with modern technologies. We write clean code that\'s easy to maintain and performs exceptionally well across all devices.',
      deliverables: [
        'Custom website development',
        'CMS integration',
        'Database setup',
        'API development',
        'Quality assurance testing'
      ],
      process: 'Planning → Development → Testing → Deployment → Support'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed matters. We optimize every aspect of your website to ensure lightning-fast load times, smooth scrolling, and excellent Core Web Vitals scores.',
      deliverables: [
        'Speed optimization',
        'SEO improvements',
        'Code minification',
        'Image optimization',
        'Performance monitoring'
      ],
      process: 'Audit → Optimize → Test → Monitor → Report'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Your website needs ongoing care. We provide regular updates, security patches, content changes, and technical support to keep everything running smoothly.',
      deliverables: [
        'Regular updates',
        'Security monitoring',
        'Content updates',
        'Bug fixes',
        'Technical support'
      ],
      process: 'Monitor → Update → Test → Deploy → Report'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Node.js', 'Tailwind CSS',
    'MongoDB', 'PostgreSQL', 'Express', 'Vite'
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Web Development Services - Design, Development & Optimization | Ignivance"
        description="Full-stack web development services: Custom design, React development, performance optimization & ongoing support. Get a free quote today."
        keywords="web development services, custom web design, React development, performance optimization, web maintenance"
        canonical="https://ignivance.in/services"
      />
      <Navbar />
      
      <main className="py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              AI & Full Stack Development Services
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              End-to-end custom software, from high-performance web applications to intelligent automation solutions for startups.
            </p>
          </div>

          {/* Services */}
          <div className="space-y-16 md:space-y-32">
            {services.map((service, i) => (
              <div
                key={i}
                className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={`${i % 2 === 1 ? 'md:order-2' : ''} order-2 md:order-none`}>
                  <div className="w-16 h-16 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <service.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    {service.title}
                  </h2>
                  <p className="text-base md:text-lg text-slate-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-slate-50 border border-gray-100 rounded-2xl p-6 mb-6">
                    <h3 className="font-bold text-slate-900 mb-4 uppercase tracking-widest text-sm">What You Get:</h3>
                    <ul className="space-y-3">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="text-slate-700 font-medium flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm md:text-base text-slate-600 bg-white border border-gray-200 rounded-xl px-4 py-3 shadow-sm inline-block">
                    <span className="font-bold text-slate-900 uppercase tracking-wider text-xs mr-2">Process:</span>
                    <span className="font-medium">{service.process}</span>
                  </div>
                </div>
                <div className={`${i % 2 === 1 ? 'md:order-1' : ''} order-1 md:order-none`}>
                  <div className="w-full aspect-square bg-slate-50 border border-gray-100 rounded-3xl flex items-center justify-center shadow-inner">
                    <service.icon className="w-32 h-32 md:w-48 md:h-48 text-blue-100/50" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="mt-24 md:mt-32 bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 md:p-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mb-8 md:mb-12 text-center tracking-tight">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="bg-slate-50 border border-gray-100 rounded-xl p-4 md:p-6 text-center font-bold text-slate-700 text-sm md:text-base tracking-wide uppercase hover:bg-blue-600 hover:text-white transition-colors duration-300"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 md:mt-24 bg-blue-600 rounded-[2rem] p-8 md:p-16 text-center shadow-xl shadow-blue-600/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-blue-700 w-full h-full transform origin-top-right rotate-12 -translate-y-20 scale-150 rounded-full opacity-30 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight">
                Ready to Start Your Project?
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
                Let's discuss how we can help bring your vision to life.
              </p>
              <a
                href="/contact"
                className="inline-flex justify-center flex-shrink-0 w-full sm:w-auto bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 transition-all shadow-md"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
