import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Layers, Calendar, CheckCircle, ArrowRight, Brain } from "lucide-react";
import Quiz from "./Quiz";

const courses = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: <Code className="w-8 h-8" />,
    originalPrice: 1599,
    offerPrice: 699,
    color: "from-blue-500 to-cyan-500",
    features: ["React.js", "JavaScript ES6+", "Responsive Design", "Portfolio Projects", "Certificate"],
    description: "Create stunning user interfaces and experiences",
    techStack: ["React", "JavaScript", "CSS3", "HTML5", "Tailwind"]
  },
  {
    id: "fullstack",
    name: "Fullstack Development",
    icon: <Layers className="w-8 h-8" />,
    originalPrice: 3999,
    offerPrice: 999,
    color: "from-orange-500 to-red-500",
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
    features: ["Node.js", "Express.js", "Database Design", "API Development", "Certificate"],
    description: "Build powerful server-side applications",
    techStack: ["Node.js", "Express", "MongoDB", "PostgreSQL", "APIs"]
  },
];

const enrollmentLink = "https://forms.gle/HSBNwpgYK78n7yWx5";

export default function InteractiveCourseSelector() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <section id="courses" className="py-20 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Choose Your <span className="text-orange-500">Learning Path</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Select a course and start your journey
          </p>
          
          <Button 
            onClick={() => setShowQuiz(true)}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold px-8 py-3 rounded-xl"
          >
            <Brain className="w-5 h-5 mr-2" />
            Take AI Quiz
          </Button>
        </div>

        {/* Course Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course) => (
            <Card
              key={course.id}
              className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700"
            >
              <CardContent className="p-6">
                {course.popular && (
                  <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold inline-block mb-4">
                    🔥 POPULAR
                  </div>
                )}
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${course.color} flex items-center justify-center mb-6 text-white`}>
                  {course.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{course.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{course.description}</p>

                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">₹{course.offerPrice}</span>
                    <span className="text-lg text-gray-500 line-through">₹{course.originalPrice}</span>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-3 py-1 rounded-full text-sm font-semibold inline-block">
                    75% OFF
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {course.techStack.slice(0, 3).map((tech, i) => (
                    <span key={i} className="bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium">
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {course.features.slice(0, 3).map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-600 dark:text-gray-300 text-sm">
                      <CheckCircle size={16} className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <a href={enrollmentLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button className={`w-full bg-gradient-to-r ${course.color} text-white font-semibold py-3 rounded-xl`}>
                    <Calendar className="mr-2" size={16} />
                    Start Learning
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-gray-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Growing Journey</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "20+", label: "Students Completed" },
              { number: "100%", label: "Course Completion" },
              { number: "4+", label: "Projects Built" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-orange-500 mb-1">{stat.number}</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <Quiz isOpen={showQuiz} onClose={() => setShowQuiz(false)} />
    </section>
  );
}