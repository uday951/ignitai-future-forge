import { Code, Palette, Zap, LineChart } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Web Design',
      description: 'Clean, modern interfaces that convert visitors into customers.'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Fast, scalable websites built with modern technologies.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimized for speed, SEO, and smooth user experience.'
    },
    {
      icon: LineChart,
      title: 'Growth Support',
      description: 'Ongoing maintenance and optimization for your success.'
    }
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end web development services for modern businesses
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, i) => (
            <div 
              key={i}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-500"
            >
              <service.icon className="w-10 h-10 text-blue-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
