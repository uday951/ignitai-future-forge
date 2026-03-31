import { CheckCircle2 } from 'lucide-react';

const WhyUs = () => {
  const differentiators = [
    { title: 'Zero Configuration', desc: 'Plug and play architecture that works out of the box.' },
    { title: 'Edge Performance', desc: 'Sub-millisecond latency deployed to 300+ edge locations globally.' },
    { title: 'Enterprise SLA', desc: '99.99% Guaranteed Uptime and 24/7 prioritized engineering support.' },
    { title: 'Predictable Pricing', desc: 'Transparent volumetric pricing without surprise overage fees.' }
  ];

  return (
    <section id="about" className="bg-white py-16 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <div className="relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -left-4 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
            
            <div className="relative bg-slate-900 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden text-left border border-slate-800">
               <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
               <div className="text-white">
                 <h4 className="text-3xl font-extrabold mb-8 tracking-tight">Performance is <br/><span className="text-blue-400">our baseline.</span></h4>
                 <div className="space-y-6">
                   <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                     <span className="text-slate-400 font-medium">Average Latency</span>
                     <span className="font-mono text-green-400 font-bold tracking-tight">12ms</span>
                   </div>
                   <div className="flex justify-between items-center border-b border-slate-800 pb-4">
                     <span className="text-slate-400 font-medium">API Availability</span>
                     <span className="font-mono text-white font-bold tracking-tight">99.99%</span>
                   </div>
                   <div className="flex justify-between items-center pb-2">
                     <span className="text-slate-400 font-medium">Auto-scaling</span>
                     <span className="font-mono text-indigo-400 font-bold tracking-tight">Infinite</span>
                   </div>
                 </div>
               </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">Why choose us</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
              Engineered for the demands of the modern web.
            </h3>
            
            <div className="space-y-8 mt-10">
              {differentiators.map((diff, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 flex-shrink-0">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h5 className="text-xl font-bold text-slate-900 mb-1">{diff.title}</h5>
                    <p className="text-slate-600 text-base leading-relaxed">{diff.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
