import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Professional Web Development Agency in Hyderabad
          </h1>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            MSME-registered web development agency building fast, scalable websites with React, TypeScript & modern technologies. 20+ successful projects delivered.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/contact" 
              className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-600"
            >
              Get Free Quote
            </Link>
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
