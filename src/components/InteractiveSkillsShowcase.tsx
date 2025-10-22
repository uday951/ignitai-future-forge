import { useState, useRef, useEffect } from 'react';
import { Code, Database, Palette, Brain, Server, Globe, Zap, Star } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Palette className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    technologies: [
      { name: "React", level: 90, icon: "⚛️" },
      { name: "JavaScript", level: 95, icon: "🟨" },
      { name: "TypeScript", level: 85, icon: "🔷" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "Tailwind", level: 88, icon: "💨" }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Express", level: 85, icon: "🚀" },
      { name: "Python", level: 80, icon: "🐍" },
      { name: "APIs", level: 90, icon: "🔗" },
      { name: "Auth", level: 82, icon: "🔐" }
    ]
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 78, icon: "🐘" },
      { name: "Redis", level: 70, icon: "🔴" },
      { name: "Firebase", level: 80, icon: "🔥" },
      { name: "Prisma", level: 75, icon: "⚡" }
    ]
  },
  {
    category: "AI/ML",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-violet-500",
    technologies: [
      { name: "TensorFlow", level: 70, icon: "🧠" },
      { name: "OpenAI", level: 85, icon: "🤖" },
      { name: "Pandas", level: 75, icon: "🐼" },
      { name: "Scikit", level: 72, icon: "📊" },
      { name: "NLP", level: 68, icon: "💬" }
    ]
  }
];

const InteractiveSkillsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>({});
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          // Animate skill levels
          skills[selectedCategory].technologies.forEach((tech, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => ({
                ...prev,
                [tech.name]: tech.level
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [selectedCategory]);

  const handleCategoryChange = (index: number) => {
    setSelectedCategory(index);
    setAnimatedLevels({});
    // Animate new skills
    setTimeout(() => {
      skills[index].technologies.forEach((tech, techIndex) => {
        setTimeout(() => {
          setAnimatedLevels(prev => ({
            ...prev,
            [tech.name]: tech.level
          }));
        }, techIndex * 150);
      });
    }, 100);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-black via-slate-900 to-slate-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            Interactive <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">Skills Explorer</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Explore the technologies you'll master in our courses
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Category Selector */}
          <div className={`lg:col-span-1 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-white mb-8">Choose Category</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => handleCategoryChange(index)}
                  className={`w-full p-6 rounded-2xl border-2 transition-all duration-500 text-left group ${
                    selectedCategory === index
                      ? `bg-gradient-to-r ${skill.color} border-transparent text-white shadow-2xl scale-105`
                      : 'bg-slate-800/50 border-slate-600 text-gray-300 hover:border-slate-500 hover:bg-slate-800/70'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${selectedCategory === index ? 'bg-white/20' : 'bg-slate-700'} transition-all duration-300 group-hover:scale-110`}>
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold">{skill.category}</h4>
                      <p className="text-sm opacity-80">
                        {skill.technologies.length} technologies
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className={`lg:col-span-2 ${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-600">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${skills[selectedCategory].color} text-white`}>
                  {skills[selectedCategory].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-white">{skills[selectedCategory].category} Development</h3>
                  <p className="text-gray-400">Master these essential technologies</p>
                </div>
              </div>

              {/* Technology Skills */}
              <div className="space-y-6">
                {skills[selectedCategory].technologies.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="group cursor-pointer"
                    onMouseEnter={() => setHoveredSkill(tech.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{tech.icon}</span>
                        <span className="text-lg font-semibold text-white">{tech.name}</span>
                        {hoveredSkill === tech.name && (
                          <div className="flex gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${i < Math.floor(tech.level / 20) ? 'text-yellow-400 fill-current' : 'text-gray-600'} transition-all duration-300`}
                              />
                            ))}
                          </div>
                        )}
                      </div>
                      <span className="text-sm font-bold text-gray-400">
                        {animatedLevels[tech.name] || 0}%
                      </span>
                    </div>
                    
                    {/* Animated Progress Bar */}
                    <div className="relative h-3 bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skills[selectedCategory].color} rounded-full transition-all duration-1000 ease-out ${
                          hoveredSkill === tech.name ? 'animate-shimmer' : ''
                        }`}
                        style={{
                          width: `${animatedLevels[tech.name] || 0}%`,
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                      
                      {/* Glow effect */}
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skills[selectedCategory].color} rounded-full opacity-50 blur-sm transition-all duration-1000 ease-out`}
                        style={{
                          width: `${animatedLevels[tech.name] || 0}%`,
                          transitionDelay: `${index * 150}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Course CTA */}
              <div className="mt-8 p-6 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-2xl border border-slate-500">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">
                      Master {skills[selectedCategory].category} Development
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Learn all these technologies in our comprehensive course
                    </p>
                  </div>
                  <button
                    onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}
                    className={`px-6 py-3 bg-gradient-to-r ${skills[selectedCategory].color} text-white font-bold rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                  >
                    <Zap className="inline mr-2" size={16} />
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveSkillsShowcase;