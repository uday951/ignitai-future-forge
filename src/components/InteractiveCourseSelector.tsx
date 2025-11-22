import { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Layers, Zap, Calendar, CheckCircle, ArrowRight, Sparkles } from "lucide-react";

const courses = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Code className="w-8 h-8" />,
    originalPrice: 1599,
    offerPrice: 699,
     color: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "border-blue-500/30",
    features: ["React.js", "JavaScript ES6+", "Responsive Design", "Portfolio Projects", "Certificate"],
    description: "Create stunning user interfaces and experiences",
    popular: false,
    techStack: ["React", "JavaScript", "CSS3", "HTML5", "Tailwind"]
  },
  {
    id: "fullstack",
    name: "Fullstack Development",
    icon: <Layers className="w-8 h-8" />,
    originalPrice: 3999,
    offerPrice: 999,
    color: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    borderColor: "border-orange-500/30",
    features: ["React + Node.js", "MongoDB", "AI Integration", "Live Projects", "Certificate"],
    description: "Master both frontend and backend development",
    popular: true,
    techStack: ["React", "Node.js", "MongoDB", "Express", "AI/ML"]
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: <Database className="w-8 h-8" />,
    originalPrice: 1599,
    offerPrice: 699,
    color: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "border-purple-500/30",
    features: ["Node.js", "Express.js", "Database Design", "API Development", "Certificate"],
    description: "Build powerful server-side applications",
    popular: false,
    techStack: ["Node.js", "Express", "MongoDB", "PostgreSQL", "APIs"]
  },
];

const enrollmentLinks: Record<string, string> = {
  "Fullstack Development": "https://forms.gle/HSBNwpgYK78n7yWx5",
  "Frontend Development": "https://forms.gle/HSBNwpgYK78n7yWx5",
  "Backend Development": "https://forms.gle/HSBNwpgYK78n7yWx5",
};

export default function InteractiveCourseSelector() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleCourseSelect = (courseId: string) => {
    setSelectedCourse(courseId);
    setShowModal(true);
  };

  const selectedCourseData = courses.find(c => c.id === selectedCourse);

  return (
    <section id="courses" ref={ref} className="py-20 bg-gray-50 dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden transition-colors duration-300">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-orange-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center gap-2 bg-white dark:bg-gradient-to-r dark:from-blue-500/20 dark:to-purple-500/20 border border-gray-200 dark:border-blue-500/30 text-gray-600 dark:text-blue-400 px-6 py-3 rounded-full mb-8 shadow-sm ${inView ? "animate-slide-up" : "opacity-0"}`}>
            <Sparkles size={20} />
            <span className="font-semibold">Course Explorer</span>
          </div>

          <h2 className={`text-3xl md:text-4xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white ${inView ? "animate-slide-up" : "opacity-0"}`}>
            Choose Your <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">Learning Path</span>
          </h2>
          
          <p className={`text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 ${inView ? "animate-fade-in" : "opacity-0"}`}>
            🚀 Course selection • Tap to explore • Click to enroll
          </p>
        </div>

        {/* Mobile App-like Course Cards */}
        <div className="md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-8 mb-16">
          {/* Mobile: Vertical Stack */}
          <div className="md:hidden space-y-4 px-2">
            {courses.map((course, idx) => (
              <div
                key={course.id}
                className={`relative bg-white dark:bg-slate-800 rounded-3xl shadow-xl overflow-hidden ${inView ? "animate-slide-up" : "opacity-0"} active:scale-95 transition-transform duration-200`}
                style={{ animationDelay: `${idx * 0.1}s` }}
                onClick={() => window.open(enrollmentLinks[course.name], '_blank')}
              >
                {/* Mobile Card Header */}
                <div className={`bg-gradient-to-r ${course.color} p-6 relative`}>
                  {course.popular && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      🔥 POPULAR
                    </div>
                  )}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1">{course.name}</h3>
                      <p className="text-white/80 text-sm">{course.description}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Card Body */}
                <div className="p-6 bg-white dark:bg-slate-800">
                  {/* Price Section */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-gray-900 dark:text-white">₹{course.offerPrice}</span>
                        <span className="text-lg text-gray-500 dark:text-gray-400 line-through">₹{course.originalPrice}</span>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold inline-block mt-1">
                        75% OFF
                      </div>
                    </div>
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${course.color} flex items-center justify-center`}>
                      <ArrowRight className="text-white" size={20} />
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {course.techStack.slice(0, 3).map((tech, i) => (
                        <span key={i} className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                          {tech}
                        </span>
                      ))}
                      {course.techStack.length > 3 && (
                        <span className="bg-gray-100 dark:bg-slate-700 text-gray-500 dark:text-gray-400 px-3 py-1 rounded-full text-xs">
                          +{course.techStack.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {course.features.slice(0, 3).map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                        <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button className={`w-full bg-gradient-to-r ${course.color} text-white font-semibold py-4 text-base rounded-2xl shadow-lg active:scale-95 transition-transform duration-200`}>
                    🚀 Start Learning - Nov 1st
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Grid Layout */}
          <div className="hidden md:contents">
            {courses.map((course, idx) => (
              <Card
                  key={course.id}
                  className={`relative bg-gradient-to-br ${course.bgGradient} border ${course.borderColor} hover:scale-105 transition-all duration-500 cursor-pointer group overflow-visible ${inView ? "animate-slide-up" : "opacity-0"} ${hoveredCourse === course.id ? 'shadow-2xl' : ''} ${course.popular ? 'md:scale-110 shadow-2xl shadow-orange-500/25' : ''}`}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                  onMouseEnter={() => setHoveredCourse(course.id)}
                  onMouseLeave={() => setHoveredCourse(null)}
                  onClick={() => handleCourseSelect(course.id)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                <CardContent className="p-6 lg:p-8 relative z-10">
                  {course.popular && (
                    <div className="absolute top-0 right-0 z-20 overflow-hidden">
                      <div className="relative w-24 h-24">
                        <div className="absolute top-0 right-0 w-32 h-8 bg-gradient-to-r from-orange-500 to-red-500 shadow-lg transform rotate-45 origin-top-right translate-x-6 -translate-y-2">
                          <div className="absolute inset-0 bg-orange-400 blur-sm opacity-50 animate-pulse"></div>
                        </div>
                        <div className="absolute top-5 right-2 transform rotate-45">
                          <div className="flex items-center gap-1">
                            <span className="text-xs">🔥</span>
                            <span className="text-[10px] font-black text-white tracking-wider">POPULAR</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center mb-6 text-white group-hover:rotate-12 transition-transform duration-500`}>
                    {course.icon}
                  </div>

                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">{course.name}</h3>
                  <p className="text-gray-400 mb-4 lg:mb-6 text-sm lg:text-base">{course.description}</p>

                  <div className="mb-4 lg:mb-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl lg:text-3xl font-bold text-white">₹{course.offerPrice}</span>
                      <span className="text-base lg:text-lg text-gray-400 line-through">₹{course.originalPrice}</span>
                    </div>
                    <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-xs lg:text-sm font-semibold inline-block">
                      75% OFF
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4 lg:mb-6">
                    {course.techStack.slice(0, 3).map((tech, i) => (
                      <span key={i} className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${course.color} text-white opacity-80`}>
                        {tech}
                      </span>
                    ))}
                    {course.techStack.length > 3 && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-600 text-gray-300">
                        +{course.techStack.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className={`transition-all duration-500 ${hoveredCourse === course.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <ul className="space-y-2 mb-4">
                      {course.features.slice(0, 3).map((feature, i) => (
                        <li key={i} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle size={14} className="text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className={`w-full bg-gradient-to-r ${course.color} hover:shadow-lg text-white font-semibold py-3 text-sm lg:text-base transition-all duration-300 group-hover:scale-105`}>
                    <Calendar className="mr-2" size={16} />
                    Explore Course
                    <ArrowRight className="ml-2" size={16} />
                  </Button>

                </CardContent>
                </Card>
            ))}
          </div>
        </div>

        {/* Interactive Stats */}
        <div className={`text-center ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <div className="bg-white dark:bg-gradient-to-r dark:from-slate-800/50 dark:to-slate-700/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 dark:border-slate-600">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">🌱 Our Growing Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "20", label: "Students Completed", icon: "👥" },
                { number: "100%", label: "Course Completion", icon: "✅" },
                { number: "4+", label: "Projects Built", icon: "🚀" },
                { number: "New", label: "Startup Journey", icon: "🌱" }
              ].map((stat, i) => (
                <div key={i} className="text-center group cursor-pointer">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent mb-1">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-6">
              We're honest about being a startup. Join us as we grow together! 🚀
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced Modal - Desktop Only */}
      {showModal && selectedCourseData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in p-4">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl shadow-2xl p-8 max-w-2xl w-full border border-slate-600 overflow-hidden">
            {/* Animated Background */}
            <div className={`absolute inset-0 bg-gradient-to-r ${selectedCourseData.color} opacity-5`}></div>
            
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl font-bold z-10 transition-colors"
            >
              ×
            </button>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${selectedCourseData.color} flex items-center justify-center text-white mx-auto mb-4 animate-pulse`}>
                  {selectedCourseData.icon}
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedCourseData.name}</h3>
                <p className="text-gray-300">{selectedCourseData.description}</p>
              </div>

              {/* Complete Tech Stack */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">🛠️ Complete Tech Stack</h4>
                <div className="flex flex-wrap gap-3">
                  {selectedCourseData.techStack.map((tech, i) => (
                    <span key={i} className={`px-4 py-2 rounded-lg bg-gradient-to-r ${selectedCourseData.color} text-white font-medium`}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* All Features */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">✨ What You'll Learn</h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {selectedCourseData.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-300">
                      <CheckCircle size={16} className="text-green-400 mr-3" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-4xl font-bold text-white">₹{selectedCourseData.offerPrice}</span>
                  <span className="text-xl text-gray-400 line-through">₹{selectedCourseData.originalPrice}</span>
                </div>
                <div className="bg-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-semibold inline-block">
                  Save ₹{selectedCourseData.originalPrice - selectedCourseData.offerPrice} (75% OFF)
                </div>
              </div>

              {/* CTA */}
              <a
                href={enrollmentLinks[selectedCourseData.name]}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button className={`w-full bg-gradient-to-r ${selectedCourseData.color} hover:shadow-2xl text-white font-bold py-4 text-lg rounded-xl transition-all duration-300`}>
                  🚀 Start Your Journey - Nov 1st
                </Button>
              </a>
              
              <p className="text-xs text-gray-400 text-center mt-4">
                🔒 Secure payment • 🌱 Growing with you • 📞 24/7 support
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}