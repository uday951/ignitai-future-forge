import { CheckCircle } from 'lucide-react';

const WhyUs = () => {
  const reasons = [
    'Clean, modern code that scales',
    'Performance-first approach',
    'On-time delivery guaranteed',
    'Ongoing support and maintenance',
    'Transparent communication',
    'Fixed pricing, no surprises'
  ];

  return (
    <section id="about" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Why Choose Ignivance
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We're a web development agency focused on delivering 
              premium websites that perform. No fluff, just results.
            </p>
            <div className="space-y-4">
              {reasons.map((reason, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0" />
                  <span className="text-gray-600 text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">20+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">100%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">4+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">Fast</div>
                <div className="text-gray-600">Turnaround Time</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
