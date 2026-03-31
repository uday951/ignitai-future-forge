const CTA = () => {
  return (
    <section id="contact" className="bg-white py-24 md:py-32 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-8 tracking-tight leading-tight">
          Ready to supercharge your <br className="hidden md:block"/> product development?
        </h2>
        <p className="text-slate-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of modern startups and scaleups building their infrastructure on our platform. Set up your account in seconds.
        </p>
        <a 
          href="/contact"
          className="inline-flex justify-center items-center w-full sm:w-auto bg-slate-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-xl shadow-slate-900/10 hover:-translate-y-0.5 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
        >
          Start Building for Free
        </a>
      </div>
    </section>
  );
};

export default CTA;
