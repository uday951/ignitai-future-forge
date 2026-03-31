const Trust = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <p className="text-center text-sm font-semibold text-slate-400 tracking-widest uppercase mb-8">
          Trusted by innovators worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 md:gap-x-24 opacity-70 grayscale">
          {/* Logo placeholders or metrics */}
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-800">500+</span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Active Users</span>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-800">50+</span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Projects Delivered</span>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden md:block"></div>
          <div className="flex flex-col items-center justify-center">
            <span className="text-3xl md:text-4xl font-extrabold text-slate-800">95%</span>
            <span className="text-sm font-medium text-slate-500 uppercase tracking-widest mt-1">Satisfaction Rate</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
