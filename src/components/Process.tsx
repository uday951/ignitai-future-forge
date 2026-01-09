const Process = () => {
  const steps = [
    {
      number: '01',
      title: 'Discover',
      description: 'We understand your goals, audience, and requirements.'
    },
    {
      number: '02',
      title: 'Design',
      description: 'Clean mockups focused on user experience and conversion.'
    },
    {
      number: '03',
      title: 'Build',
      description: 'Fast, modern development with clean code and best practices.'
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Smooth deployment with testing, optimization, and support.'
    }
  ];

  return (
    <section id="process" className="bg-gray-50 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Simple, transparent workflow from start to finish
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="text-5xl font-bold text-blue-500 mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
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
