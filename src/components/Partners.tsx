
import { useEffect, useRef, useState } from 'react';

const Partners = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = [
    {
      name: "IBM SkillsBuild",
      description: "Trackable learning paths and certification programs",
      logo: "🔵", // Placeholder for IBM logo
      features: ["Skills Tracking", "Digital Badges", "Career Pathways"]
    },
    {
      name: "Google Cloud",
      description: "Hosted solutions and cloud training programs",
      logo: "🟡", // Placeholder for Google logo
      features: ["Cloud Hosting", "ML Training", "GCP Credits"]
    },
    {
      name: "Microsoft Azure",
      description: "GitHub Copilot access and startup tools",
      logo: "🟦", // Placeholder for Microsoft logo
      features: ["GitHub Copilot", "Azure Credits", "Startup Program"]
    }
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Our <span className="flame-gradient bg-clip-text text-transparent">Collaborations</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Partnering with industry leaders to provide world-class training and resources
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-orange-500/50 transition-all duration-300 hover-glow group ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{partner.name}</h3>
                <p className="text-gray-300 mb-6">{partner.description}</p>
                
                <div className="space-y-2">
                  {partner.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm text-gray-400">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className={`mt-16 text-center ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-slate-800/30 p-8 rounded-2xl border border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-white">Partnership Benefits</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">100%</div>
                <div className="text-gray-400">Verified Credentials</div>
              </div>
              <div>
                <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">$1000+</div>
                <div className="text-gray-400">Cloud Credits</div>
              </div>
              <div>
                <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-400">Enterprise Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">Global</div>
                <div className="text-gray-400">Recognition</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
