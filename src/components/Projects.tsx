
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
      title: "Hotel Booking Platform",
      description: "Full-stack hotel management system with real-time booking and payment integration",
      category: "Web",
      image: "🏨",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      interns: ["Priya S.", "Rahul K.", "Anita M."],
      link: "#"
    },
    {
      title: "AI Chatbot Assistant",
      description: "Intelligent customer service bot with natural language processing capabilities",
      category: "AI Tool",
      image: "🤖",
      tech: ["Python", "TensorFlow", "FastAPI", "React"],
      interns: ["Dev P.", "Sneha L.", "Arjun T."],
      link: "#"
    },
    {
      title: "School Management App",
      description: "Comprehensive school administration system with parent and student portals",
      category: "App",
      image: "🎓",
      tech: ["React Native", "Firebase", "Express", "JWT"],
      interns: ["Kavya R.", "Rohan S.", "Meera V."],
      link: "#"
    },
    {
      title: "E-commerce Analytics",
      description: "Data visualization dashboard for e-commerce sales and customer insights",
      category: "Web",
      image: "📊",
      tech: ["React", "D3.js", "Python", "PostgreSQL"],
      interns: ["Arun K.", "Divya N.", "Karthik M."],
      link: "#"
    },
    {
      title: "Voice Recognition App",
      description: "Mobile app with voice commands for accessibility and hands-free operation",
      category: "App",
      image: "🎤",
      tech: ["Flutter", "Speech API", "Firebase", "ML Kit"],
      interns: ["Pooja S.", "Vikram A.", "Ravi D."],
      link: "#"
    },
    {
      title: "Inventory Management",
      description: "Smart inventory system with predictive analytics and automated reordering",
      category: "AI Tool",
      image: "📦",
      tech: ["Python", "Pandas", "React", "MySQL"],
      interns: ["Nisha P.", "Suresh K.", "Gayatri R."],
      link: "#"
    }
  ];

  const filters = ['All', 'Web', 'AI Tool', 'App'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section ref={ref} className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Live <span className="flame-gradient bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Real-world projects built by our interns for actual clients
          </p>
        </div>

        {/* Filter Buttons */}
        <div className={`flex justify-center mb-12 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex gap-2 bg-slate-800/50 p-2 rounded-lg border border-slate-700">
            {filters.map((filter) => (
              <Button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                variant={activeFilter === filter ? "default" : "ghost"}
                className={`${
                  activeFilter === filter 
                    ? 'flame-gradient text-white' 
                    : 'text-gray-400 hover:text-white'
                } transition-all duration-300`}
              >
                <Filter className="mr-2" size={16} />
                {filter}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className={`bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover-glow group ${
                inView ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <CardTitle className="text-white text-xl">{project.title}</CardTitle>
                <CardDescription className="text-gray-300">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span key={idx} className="bg-orange-500/20 text-orange-400 px-2 py-1 rounded text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Intern Credits */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Built by Interns</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.interns.map((intern, idx) => (
                        <span key={idx} className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded text-xs">
                          {intern}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="flame-gradient hover-glow">
                      <ExternalLink className="mr-2" size={16} />
                      View Live
                    </Button>
                    <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:text-white">
                      <Github className="mr-2" size={16} />
                      Code
                    </Button>
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
