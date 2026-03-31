import { ArrowRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: 'Grand Diva International',
      category: 'Beauty Pageant Platform',
      description: 'Elegant beauty pageant website featuring Miss Universe and Miss India style competitions with stunning galleries and event management.',
      link: 'https://granddivainternational.com/',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Sri Sai Deekshitha Ambulance',
      category: 'Emergency Medical Transport',
      description: 'A fast, responsive ambulance service website designed for quick access to emergency medical transport.',
      link: 'https://srisaideekshithaambulance.in/',
      image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Best Ambulance',
      category: 'Emergency Ambulance Service',
      description: 'A modern ambulance service website focused on fast contact, clear services, and emergency accessibility.',
      link: 'https://bestambulance.in/',
      image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'School Education Portal',
      category: 'Education Platform',
      description: 'Modern educational platform showcasing facilities, academic programs, and student resources seamlessly.',
      link: 'https://snt-ignite-web.onrender.com/',
      image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'CozyStay Booking',
      category: 'Booking System',
      description: 'Streamlined PG and hostel booking system featuring real-time availability and secure reservations.',
      link: 'https://cozy-stay-showcase.onrender.com/',
      image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Ignite Fitness',
      category: 'Health & Fitness',
      description: 'High-performance gym website with membership management and dynamic class scheduling interfaces.',
      link: 'https://gym-application-3dok.vercel.app/',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800'
    },
    {
      title: 'Cafe Management Dashboard',
      category: 'QR Ordering System',
      description: 'Complete QR-based ordering system for cafes and restaurants with real-time order management and digital menu.',
      link: 'https://cafemanage.ignivance.in/',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="work" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Our Work
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            We design fast, modern websites for businesses.
          </p>
        </div>

        {/* Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col bg-white border border-gray-100 rounded-[2rem] overflow-hidden hover:border-blue-200 transition-all duration-500 hover:scale-[1.02]"
            >
              {/* Project Thumbnail with subtle Safari-like Mockup */}
              <div className="relative w-full aspect-[4/3] bg-slate-50 overflow-hidden border-b border-gray-100 p-6 flex flex-col justify-end">
                <div className="absolute inset-0 w-full h-full p-6 pt-10">
                   <div className="w-full h-full rounded-t-xl overflow-hidden border border-gray-200 shadow-sm relative bg-white">
                      {/* Browser Header Bar */}
                      <div className="absolute top-0 left-0 w-full h-7 bg-gray-50 border-b border-gray-200 flex items-center px-3 gap-1.5 z-10">
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-red-400 transition-colors"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-amber-400 transition-colors"></div>
                        <div className="w-2 h-2 rounded-full bg-gray-300 group-hover:bg-green-400 transition-colors"></div>
                      </div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover pt-7 opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                        loading="lazy"
                      />
                   </div>
                </div>
              </div>
              
              {/* Content Block */}
              <div className="p-8 flex flex-col flex-1">
                <div className="text-sm font-semibold text-slate-500 tracking-wide mb-3">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-8 flex-1">
                  {project.description}
                </p>
                
                {/* CTA */}
                <div className="inline-flex items-center gap-2 font-semibold text-slate-900 group-hover:text-blue-600 transition-colors mt-auto w-fit">
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Visit website</span> 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
