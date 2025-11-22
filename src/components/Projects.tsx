
import { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const [inView, setInView] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Cafe Management Web App",
      description: "A comprehensive web application for managing cafe operations including orders, inventory, staff, and analytics. Features real-time order tracking, menu management, and sales reporting.",
      category: "Web",
      image: "☕",
      tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
      live: "https://cafe.udayonline.in/",
      code: "https://github.com/uday951/cafe-table-order-flow.git"
    }
  ];

  // Remove filters and filtering logic
  return (
    <section ref={ref} className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>Live <span className="flame-gradient bg-clip-text text-transparent">Project</span></h2>
          <p className={`text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>A real-world project built by our interns for actual clients</p>
        </div>
        {/* Mobile: App-like Project Card */}
        <div className="md:hidden px-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl shadow-xl overflow-hidden ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="bg-gradient-to-r from-orange-500 to-red-500 p-6 text-white">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
                    {project.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-white/80 text-sm">Live Production App</p>
                  </div>
                </div>
              </div>

              {/* Project Body */}
              <div className="p-6">
                <p className="text-gray-700 mb-6 leading-relaxed">{project.description}</p>
                
                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Built By */}
                <div className="mb-6 p-4 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl border border-orange-200">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      UK
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Built by</h4>
                      <p className="text-orange-600 font-semibold">Uday Kiran</p>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="block">
                    <button className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold py-4 rounded-2xl shadow-lg active:scale-95 transition-transform duration-200 flex items-center justify-center gap-3">
                      <ExternalLink size={20} />
                      <span>View Live App</span>
                    </button>
                  </a>
                  <a href={project.code} target="_blank" rel="noopener noreferrer" className="block">
                    <button className="w-full bg-gray-100 text-gray-700 font-semibold py-4 rounded-2xl active:scale-95 transition-transform duration-200 flex items-center justify-center gap-3">
                      <Github size={20} />
                      <span>View Source Code</span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Original Layout */}
        <div className="hidden md:flex justify-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`max-w-md w-full mx-auto bg-white dark:bg-slate-800/70 border border-gray-200 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800/90 transition-all duration-300 hover-glow group rounded-2xl shadow-lg p-4 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="items-center text-center pb-0">
                <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                <CardTitle className="text-gray-900 dark:text-white text-2xl mb-1">{project.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 text-base mb-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-orange-100 dark:bg-orange-500/20 text-orange-700 dark:text-orange-400 px-2 py-1 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex flex-col items-center mt-2">
                    <h4 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">Built by</h4>
                    <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-1 rounded-full text-base font-semibold shadow">Uday Kiran</span>
                  </div>
                  <div className="flex gap-2 pt-4 justify-center">
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="flame-gradient hover-glow rounded-full px-4">
                        <ExternalLink className="mr-2" size={16} />
                        View Live
                      </Button>
                    </a>
                    <a href={project.code} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white rounded-full px-4">
                        <Github className="mr-2" size={16} />
                        Code
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
