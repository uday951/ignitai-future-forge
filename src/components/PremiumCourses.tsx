import { useState } from "react";
import { Code, Database, Layers, CheckCircle, ArrowRight, Sparkles, Brain } from "lucide-react";
import PremiumCard from "./premium/PremiumCard";
import PremiumButton from "./premium/PremiumButton";
import Quiz from "./Quiz";

const courses = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: Code,
    originalPrice: 1599,
    offerPrice: 699,
    features: ["React.js", "JavaScript ES6+", "Responsive Design", "Portfolio Projects"],
    techStack: ["React", "JavaScript", "CSS3", "Tailwind"]
  },
  {
    id: "fullstack",
    name: "Fullstack Development",
    icon: Layers,
    originalPrice: 3999,
    offerPrice: 999,
    features: ["React + Node.js", "MongoDB", "AI Integration", "Live Projects"],
    techStack: ["React", "Node.js", "MongoDB", "AI/ML"],
    popular: true
  },
  {
    id: "backend",
    name: "Backend Development",
    icon: Database,
    originalPrice: 1599,
    offerPrice: 699,
    features: ["Node.js", "Express.js", "Database Design", "API Development"],
    techStack: ["Node.js", "Express", "MongoDB", "APIs"]
  },
];

const enrollmentLink = "https://forms.gle/HSBNwpgYK78n7yWx5";

export default function PremiumCourses() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <section id="courses" className="relative py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800 rounded-full px-6 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-300">Course Explorer</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Choose Your Path
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Start with our AI quiz or explore courses directly
          </p>
          
          <div>
            <PremiumButton onClick={() => setShowQuiz(true)}>
              <Brain className="w-5 h-5" />
              Take AI Quiz
            </PremiumButton>
          </div>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, idx) => (
            <PremiumCard
              key={course.id}
              className={`relative ${course.popular ? 'ring-2 ring-purple-500' : ''}`}
            >
              {course.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full">
                  POPULAR
                </div>
              )}

              <div className="w-14 h-14 mb-6 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                <course.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">{course.name}</h3>

              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{course.offerPrice}</span>
                <span className="text-lg text-gray-400 line-through">₹{course.originalPrice}</span>
                <span className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold px-2 py-1 rounded-full">
                  75% OFF
                </span>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {course.techStack.map((tech, i) => (
                  <span key={i} className="bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 text-xs font-medium px-3 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>

              <ul className="space-y-3 mb-8">
                {course.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <PremiumButton 
                className="w-full"
                onClick={() => window.open(enrollmentLink, '_blank')}
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </PremiumButton>
            </PremiumCard>
          ))}
        </div>

        {/* Stats */}
        <div>
          <PremiumCard hover={false} className="bg-purple-50 dark:bg-purple-950/20 border-purple-200 dark:border-purple-800">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Growing Journey</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: "20+", label: "Students Completed" },
                { number: "100%", label: "Course Completion" },
                { number: "4+", label: "Projects Built" },
                { number: "New", label: "Startup Journey" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </PremiumCard>
        </div>
      </div>

      <Quiz isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </section>
  );
}
