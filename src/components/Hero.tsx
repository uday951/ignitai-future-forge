const Hero = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
            We Build Fast, Modern Websites
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Premium web development for startups and businesses. 
            Clean design, smooth performance, delivered on time.
          </p>
          <div className="flex gap-4">
            <a 
              href="#contact" 
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600"
            >
              Start Your Project
            </a>
            <a 
              href="#work" 
              className="bg-gray-100 text-slate-900 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-200"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
