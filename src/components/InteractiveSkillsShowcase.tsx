import { useState } from 'react';
import { Code, Database, Server, Brain, Zap } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    icon: <Code className="w-8 h-8" />,
    color: "from-pink-500 to-rose-500",
    technologies: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind", level: 88 }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-8 h-8" />,
    color: "from-green-500 to-emerald-500",
    technologies: [
      { name: "Node.js", level: 88 },
      { name: "Express", level: 85 },
      { name: "Python", level: 80 },
      { name: "APIs", level: 90 },
      { name: "Auth", level: 82 }
    ]
  },
  {
    category: "Database",
    icon: <Database className="w-8 h-8" />,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 78 },
      { name: "Redis", level: 70 },
      { name: "Firebase", level: 80 },
      { name: "Prisma", level: 75 }
    ]
  },
  {
    category: "AI/ML",
    icon: <Brain className="w-8 h-8" />,
    color: "from-purple-500 to-violet-500",
    technologies: [
      { name: "TensorFlow", level: 70 },
      { name: "OpenAI", level: 85 },
      { name: "Pandas", level: 75 },
      { name: "Scikit", level: 72 },
      { name: "NLP", level: 68 }
    ]
  }
];

const InteractiveSkillsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Skills <span className="text-cyan-500">Explorer</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore the technologies you'll master in our courses
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Category Selector */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Choose Category</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedCategory(index)}
                  className={`w-full p-6 rounded-2xl border-2 text-left ${
                    selectedCategory === index
                      ? `bg-gradient-to-r ${skill.color} border-transparent text-white`
                      : 'bg-white dark:bg-slate-800 border-gray-200 dark:border-slate-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`p-3 rounded-xl ${selectedCategory === index ? 'bg-white/20' : 'bg-gray-100 dark:bg-slate-700'}`}>
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
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 border border-gray-200 dark:border-slate-700">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl bg-gradient-to-r ${skills[selectedCategory].color} text-white`}>
                  {skills[selectedCategory].icon}
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{skills[selectedCategory].category} Development</h3>
                  <p className="text-gray-600 dark:text-gray-400">Master these essential technologies</p>
                </div>
              </div>

              {/* Technology Skills */}
              <div className="space-y-6">
                {skills[selectedCategory].technologies.map((tech) => (
                  <div key={tech.name}>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">{tech.name}</span>
                      <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{tech.level}%</span>
                    </div>
                    
                    <div className="relative h-3 bg-gray-200 dark:bg-slate-700 rounded-full overflow-hidden">
                      <div
                        className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skills[selectedCategory].color} rounded-full`}
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Course CTA */}
              <div className="mt-8 p-6 bg-gray-50 dark:bg-slate-700 rounded-2xl border border-gray-200 dark:border-slate-600">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      Master {skills[selectedCategory].category} Development
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Learn all these technologies in our comprehensive course
                    </p>
                  </div>
                  <button
                    onClick={scrollToCourses}
                    className={`px-6 py-3 bg-gradient-to-r ${skills[selectedCategory].color} text-white font-bold rounded-xl`}
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