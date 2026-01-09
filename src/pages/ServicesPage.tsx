import { Code, Palette, Zap, Wrench } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
      <Navbar />
      
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-slate-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              End-to-end web development services for modern businesses
            </p>
          </div>

          {/* Services */}
          <div className="space-y-24">
            {services.map((service, i) => (
              <div
                key={i}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={i % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                    <h3 className="font-bold text-slate-900 mb-3">What You Get:</h3>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="text-gray-600 flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold text-slate-900">Process: </span>
                    {service.process}
                  </div>
                </div>
                <div className={i % 2 === 1 ? 'md:order-1' : ''}>
                  <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
                    <service.icon className="w-32 h-32 text-gray-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="mt-24 bg-gray-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Technologies We Use
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technologies.map((tech, i) => (
                <div
                  key={i}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center font-semibold text-slate-900"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-24 bg-blue-500 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-500 px-8 py-4 rounded-xl font-semibold hover:bg-gray-100"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
