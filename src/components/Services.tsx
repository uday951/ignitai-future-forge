import { Cpu, ShieldCheck, Zap, Layers, RefreshCw, BarChart3 } from 'lucide-react';

const Services = () => {
  const features = [
    {
      icon: Cpu,
      title: 'AI-Powered Infrastructure',
      description: 'Leverage cutting-edge machine learning models to automate complex decision-making processes instantly.'
    },
    {
      icon: Zap,
      title: 'Real-time Processing',
      description: 'Execute workflows with sub-millisecond latency. Built for speed and massive concurrency.'
    },
    {
      icon: ShieldCheck,
      title: 'Enterprise Security',
      description: 'Bank-grade encryption, role-based access control, and comprehensive audit logs built-in.'
    },
    {
      icon: Layers,
      title: 'Seamless Integrations',
      description: 'Connect with your favorite tools via our native plugins or robust GraphQL & REST APIs.'
    },
    {
      icon: RefreshCw,
      title: 'Automated CI/CD',
      description: 'Push code and let our infrastructure handle the testing, building, and deployment workflows.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Gain powerful insights into usage patterns, performance metrics, and system health in real-time.'
    }
  ];

  return (
    <section id="features" className="bg-white py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center md:text-left mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Features</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Everything you need to <br className="hidden md:block" /> build at lightspeed.
            </h3>
          </div>
          <p className="text-lg text-slate-500 max-w-md">
            Our platform provides structural primitives to help you scale operations without increasing headcount.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <div 
              key={i}
              className="bg-slate-50 border border-gray-100 rounded-2xl p-8 hover:bg-white hover:border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-default"
            >
              <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-slate-900 group-hover:border-slate-900 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                {feature.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-base">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
