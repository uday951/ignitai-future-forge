const Process = () => {
  const steps = [
    {
      number: '1',
      title: 'Sign Up & Connect',
      description: 'Create your account in seconds and connect your data sources via our secure API gateways.'
    },
    {
      number: '2',
      title: 'Build & Automate',
      description: 'Use our visual builder or write code to create intelligent workflows that run autonomously.'
    },
    {
      number: '3',
      title: 'Scale Globally',
      description: 'Deploy instantly to our edge network. Let our infrastructure handle the scaling automatically.'
    }
  ];

  return (
    <section id="process" className="bg-slate-50 py-16 md:py-32 border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-sm font-bold text-blue-600 tracking-widest uppercase mb-3">How it works</h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            From concept to scale <br className="hidden md:block"/> in three simple steps.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative lg:px-12">
          {/* Timeline Connector Graphic (Desktop Only) */}
          <div className="hidden auto-cols-auto md:block absolute top-[28px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-blue-100 via-blue-600 to-blue-100 opacity-50 z-0"></div>

          {steps.map((step, i) => (
            <div key={i} className="relative z-10 flex flex-col items-center text-center">
              <div className="w-14 h-14 bg-white border border-gray-200 rounded-full flex items-center justify-center font-extrabold text-xl text-slate-800 shadow-[0_0_20px_rgba(37,99,235,0.1)] mb-8 shrink-0 relative">
                <div className="absolute inset-0 bg-blue-600 rounded-full blur-[2px] opacity-10"></div>
                {step.number}
              </div>
              <h4 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                {step.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-base max-w-sm">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
