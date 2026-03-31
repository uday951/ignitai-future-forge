import { ArrowRight, CheckCircle, Target, Zap, Rocket } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Link } from 'react-router-dom';

const AboutIgnivance = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SEO 
        title="About Ignivance | AI Development & Automation Solutions"
        description="Learn about Ignivance, a premier AI development and automation company dedicated to delivering scalable full stack solutions for modern businesses and startups."
        keywords="About Ignivance, AI development company, automation solutions, full stack development, tech startup agency"
        canonical="https://ignivance.in/about-ignivance"
      />
      <Navbar />
      
      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* Header Section */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Empowering the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Ignivance</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are an elite AI development and robust automation company committed to transforming ambitious visions into scalable digital realities.
            </p>
          </div>

          {/* Brand Story */}
          <section className="mb-20 md:mb-28">
            <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-[2.5rem] p-8 md:p-14 lg:p-20 relative overflow-hidden">
               {/* Decorative background element */}
               <div className="hidden lg:block absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-bl-full -z-10 opacity-70"></div>
               
               <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Our Story</h2>
               <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
                 <p>
                   <strong>Ignivance</strong> was born out of a critical observation: as technology rapidly advances, many businesses and scaling startups find themselves bottlenecked by manual workflows, outdated software architectures, and isolated data systems. We recognized that the path to true growth isn't just about writing code; it's about engineering intelligent ecosystems that operate seamlessly.
                 </p>
                 <p>
                   What started as a highly specialized development initiative quickly evolved into a dedicated AI development and automation company. Our purpose became clear—to bridge the gap between complex artificial intelligence capabilities and practical, everyday business operations. We set out on a mission to bring high-end, enterprise-grade development services previously reserved for massive tech giants directly into the hands of ambitious startups and established businesses globally.
                 </p>
                 <p>
                   Today, Ignivance stands as a trusted digital partner. We are architects of scale, focusing deeply on full stack development and intelligent automation. Whether it is a disruptive web application requiring a robust microservices architecture, or a bespoke AI workflow designed to drastically cut operational costs, our team approaches every challenge with engineering excellence and a relentless pursuit of quality.
                 </p>
               </div>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-20 md:mb-28">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 md:p-14 rounded-[2rem] shadow-2xl relative overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
              <Target className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl md:text-3xl font-extrabold mb-4 tracking-tight">Our Mission</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                To engineer intelligent, scalable, and high-performance automation solutions that eliminate manual inefficiencies, empowering businesses to focus strictly on radical growth and innovation. First-class development should not be an afterthought; it is the core engine of modern success.
              </p>
            </div>

            <div className="bg-white border-2 border-slate-100 p-10 md:p-14 rounded-[2rem] shadow-xl shadow-slate-200/50 transform transition-transform duration-500 hover:scale-[1.02]">
              <Rocket className="w-12 h-12 text-blue-600 mb-6" />
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Our Vision</h3>
              <p className="text-slate-600 text-lg leading-relaxed">
                To be the world’s most trusted technical partner for startups and enterprises, recognized for pioneering AI-driven software architecture and setting the global standard for seamless web automation.
              </p>
            </div>
          </section>

          {/* Services Overview */}
          <section className="mb-20 md:mb-28">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Core Competencies</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                How Ignivance drives continuous technological advancement for our clients.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  icon: Zap,
                  title: 'AI Automation',
                  desc: 'We integrate cutting-edge artificial intelligence into your workflows to automate repetitive tasks, turning thousands of manual hours into instantaneous programmed precision.',
                },
                {
                  icon: Rocket,
                  title: 'Full Stack Development',
                  desc: 'From high-converting frontends to incredibly secure, massive-scale backend databases, we engineer complete modern web applications tailored for speed and reliability.',
                },
                {
                  icon: CheckCircle,
                  title: 'Startup Scaling',
                  desc: 'Specialized digital infrastructure designed specifically for high-growth startups requiring rapid deployment, reliable traffic handling, and clean codebase architecture.',
                }
              ].map((item, i) => (
                 <div key={i} className="bg-white border border-gray-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                   <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                     <item.icon className="w-7 h-7" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{item.title}</h3>
                   <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                 </div>
              ))}
            </div>

            <div className="mt-12 text-center">
               <Link to="/services" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors">
                 Explore all our services <ArrowRight className="w-4 h-4" />
               </Link>
            </div>
          </section>

          {/* Leadership / Founder */}
          <section className="bg-slate-900 rounded-[2.5rem] p-10 md:p-16 lg:p-24 text-white overflow-hidden relative shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-40"></div>
            
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 tracking-tight text-white">Engineering Leadership</h2>
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
                <p>
                  Ignivance was founded by engineering leaders who cut their teeth building highly resilient software systems spanning multiple verticals. Having navigated the brutal complexities of modern software scaling directly from the frontlines, our leadership established Ignivance not as just another agency, but as an elite SWAT team of developers.
                </p>
                <p>
                  We don't settle for "good enough". Our founder-led mentality guarantees that every line of code deployed and every AI model integrated undergoes rigorous architectural scrutiny. We treat your product exactly as if it were our own, ensuring that the technology foundation we build today will comfortably support your growth exponentially into the next decade.
                </p>
              </div>
            </div>
          </section>

          {/* Final Call to Action */}
          <div className="mt-20 md:mt-28 text-center bg-blue-50 border border-blue-100 rounded-[2.5rem] p-12 md:p-20 shadow-sm">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Ready to transform your operations?
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Join the startups and enterprises relying on Ignivance for top-tier full stack development and intelligent AI automation. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               <Link
                to="/contact"
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-700 focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all shadow-md hover:shadow-lg"
               >
                Contact Us Today
               </Link>
               <Link
                to="/"
                className="w-full sm:w-auto bg-white text-slate-900 border border-gray-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 focus:ring-2 focus:ring-gray-200 focus:ring-offset-2 transition-all shadow-sm"
               >
                Back to Homepage
               </Link>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutIgnivance;
