import { Link } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-slate-50 pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden relative">
      <div className="hidden md:block absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white to-transparent z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <div className="w-full max-w-2xl text-center lg:text-left mx-auto lg:mx-0 order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="hidden md:inline-flex animate-ping absolute h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              Ignivance Automation Platform 2.0 is live
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
              Ignivance – <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">AI Development</span> & Automation Company
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              We build AI automation and full-stack solutions that help businesses eliminate manual work and scale faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
              <Link 
                to="/contact" 
                className="w-full sm:w-auto flex justify-center items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-slate-800 transition-all shadow-md hover:shadow-xl hover:-translate-y-0.5 focus:ring-2 focus:ring-slate-900 focus:ring-offset-2"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </Link>
              <button 
                className="w-full sm:w-auto flex justify-center items-center gap-2 bg-white text-slate-900 border border-gray-200 px-8 py-4 rounded-xl font-semibold text-base hover:bg-gray-50 hover:border-gray-300 transition-all focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 shadow-sm"
              >
                <PlayCircle className="w-5 h-5 text-slate-400" /> Book Demo
              </button>
            </div>
          </div>
          
          {/* Right Content - Dashboard Preview Mockup */}
          <div className="hidden md:block w-full relative mx-auto max-w-lg lg:max-w-none lg:w-[120%] lg:-mr-12 perspective-1000 order-2 mt-8 lg:mt-0">
            {/* Soft Glow */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 rounded-[2rem] blur-3xl transform -translate-y-4 translate-x-4"></div>
            
            {/* Interface Mockup */}
            <div className="relative bg-white border border-gray-200/60 rounded-[1.5rem] shadow-xl overflow-hidden backdrop-blur-sm lg:-rotate-y-12 lg:rotate-x-12 lg:scale-105 transition-transform duration-700 hover:rotate-0 hover:scale-100">
               {/* Browser Bar */}
               <div className="bg-slate-50 border-b border-gray-100 px-4 py-3 flex items-center gap-2">
                 <div className="w-3 h-3 rounded-full bg-red-400"></div>
                 <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                 <div className="w-3 h-3 rounded-full bg-green-400"></div>
               </div>
               {/* Dashboard Content */}
               <div className="p-4 sm:p-6">
                 <div className="flex items-center justify-between mb-6 sm:mb-8">
                    <div>
                      <div className="h-4 w-24 sm:w-32 bg-slate-200 rounded-md mb-2"></div>
                      <div className="h-3 w-32 sm:w-48 bg-slate-100 rounded-md"></div>
                    </div>
                    <div className="hidden sm:block h-8 w-8 bg-blue-100 rounded-full"></div>
                 </div>
                 
                 <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                    <div className="p-3 sm:p-4 border border-gray-100 rounded-xl bg-slate-50">
                      <div className="h-3 w-12 sm:w-16 bg-slate-200 rounded-md mb-3"></div>
                      <div className="h-6 sm:h-8 w-16 sm:w-24 bg-slate-300 rounded-md mb-2"></div>
                      <div className="h-2 w-10 sm:w-12 bg-green-200 rounded-md"></div>
                    </div>
                    <div className="p-3 sm:p-4 border border-gray-100 rounded-xl bg-slate-50">
                      <div className="h-3 w-12 sm:w-16 bg-slate-200 rounded-md mb-3"></div>
                      <div className="h-6 sm:h-8 w-16 sm:w-24 bg-slate-300 rounded-md mb-2"></div>
                      <div className="h-2 w-10 sm:w-12 bg-blue-200 rounded-md"></div>
                    </div>
                 </div>
                 
                 <div className="border border-gray-100 rounded-xl p-3 sm:p-4">
                    <div className="h-4 w-20 sm:w-24 bg-slate-200 rounded-md mb-5 sm:mb-6"></div>
                    <div className="space-y-3 sm:space-y-4">
                       {[...Array(4)].map((_, i) => (
                         <div key={i} className="flex items-center gap-3 sm:gap-4">
                           <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-md bg-slate-100 flex-shrink-0"></div>
                           <div className="flex-1">
                             <div className="h-3 w-1/3 bg-slate-200 rounded-md mb-2"></div>
                             <div className="h-2 w-full bg-slate-100 rounded-md"></div>
                           </div>
                         </div>
                       ))}
                    </div>
                 </div>
               </div>
            </div>
            
            {/* Floating Element - Visible only on tablets and desktop via 'hidden md:flex' */}
            <div className="hidden md:flex absolute -bottom-6 -left-6 bg-white border border-gray-100 p-4 rounded-xl shadow-xl items-center gap-4 animate-bounce shrink-0 z-20" style={{ animationDuration: '3s' }}>
              <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <div>
                <div className="text-sm font-bold text-slate-800">Workflow Deployed</div>
                <div className="text-xs text-slate-500">Just now</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
