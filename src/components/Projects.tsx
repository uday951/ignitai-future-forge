
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
      live: "https://mj.udayonline.in/",
      code: "https://github.com/uday951/cafe-table-order-flow.git"
    }
  ];

  // Remove filters and filtering logic
  return (
    <section ref={ref} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>Live <span className="flame-gradient bg-clip-text text-transparent">Project</span></h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>A real-world project built by our interns for actual clients</p>
        </div>
        {/* Projects Grid */}
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`max-w-md w-full mx-auto bg-slate-800/70 border-slate-700 hover:bg-slate-800/90 transition-all duration-300 hover-glow group rounded-2xl shadow-lg p-4 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="items-center text-center pb-0">
                <div className="text-6xl mb-2 group-hover:scale-110 transition-transform duration-300">{project.image}</div>
                <CardTitle className="text-white text-2xl mb-1">{project.title}</CardTitle>
                <CardDescription className="text-gray-300 text-base mb-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs">{tech}</span>
                      ))}
                    </div>
                  </div>
                  {/* Built By */}
                  <div className="flex flex-col items-center mt-2">
                    <h4 className="text-sm font-medium text-gray-400 mb-1">Built by</h4>
                    <span className="bg-gradient-to-r from-orange-400 to-yellow-400 text-white px-4 py-1 rounded-full text-base font-semibold shadow">Uday Kiran</span>
                  </div>
                  {/* Action Buttons */}
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
