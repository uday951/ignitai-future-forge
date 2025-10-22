import { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star, Users, CheckCircle, Zap, Calendar } from "lucide-react";

const courses = [
  {
    name: "Frontend Development",
    originalPrice: 1599,
    offerPrice: 499,
    savings: 1100,
    color: "bg-orange-500/20 border-orange-500/30 text-orange-400",
    features: ["React.js", "JavaScript ES6+", "Responsive Design", "Portfolio Projects", "Certificate"],
    popular: false,
    enrollments: "New",
    rating: "New"
  },
  {
    name: "Fullstack Development",
    originalPrice: 3999,
    offerPrice: 999,
    savings: 3000,
    color: "bg-blue-500/20 border-blue-500/30 text-blue-400",
    features: ["React + Node.js", "MongoDB", "AI Integration", "Live Projects", "Certificate"],
    popular: true,
    enrollments: "New",
    rating: "New"
  },
  {
    name: "Backend Development",
    originalPrice: 1599,
    offerPrice: 499,
    savings: 1100,
    color: "bg-purple-500/20 border-purple-500/30 text-purple-400",
    features: ["Node.js", "Express.js", "Database Design", "API Development", "Certificate"],
    popular: false,
    enrollments: "New",
    rating: "New"
  },
];

// Google Form links for enrollment
const enrollmentLinks: Record<string, string> = {
  "Fullstack Development": "https://forms.gle/HSBNwpgYK78n7yWx5",
  "Frontend Development": "https://forms.gle/HSBNwpgYK78n7yWx5",
  "Backend Development": "https://forms.gle/HSBNwpgYK78n7yWx5",
};

export default function CourseEnrollment() {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);
  const [inView, setInView] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 15, hours: 12, minutes: 30 });
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Countdown timer for urgency
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59 };
        return prev;
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="courses" ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        {/* Honest Banner */}
        <div className={`text-center mb-8 ${inView ? "animate-slide-up" : "opacity-0"}`}>
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/30 text-blue-400 px-6 py-3 rounded-full">
            <Zap size={20} />
            <span className="font-semibold">🌱 Early Bird Pricing - Join Our Growing Community</span>
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? "animate-slide-up" : "opacity-0"}`}>
            Enroll in Our <span className="flame-gradient bg-clip-text text-transparent">Courses</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-4 ${inView ? "animate-fade-in" : "opacity-0"}`}>
            🚀 Course starts November 1st, 2025 • Join our growing community
          </p>
          <div className={`flex justify-center items-center gap-6 text-sm ${inView ? "animate-fade-in" : "opacity-0"}`}>
            <div className="flex items-center gap-2 text-emerald-400">
              <Users size={16} />
              <span>20 Students Completed</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <Star size={16} fill="currentColor" />
              <span>Growing Startup</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <CheckCircle size={16} />
              <span>Career Guidance</span>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, idx) => (
            <Card
              key={course.name}
              className={`relative bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 hover-glow group ${course.color} ${inView ? "animate-slide-up" : "opacity-0"} ${course.popular ? 'ring-2 ring-orange-500/50 scale-105' : ''}`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              {course.popular && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    🔥 POPULAR
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-1 text-blue-400">
                    <Zap size={16} />
                    <span className="text-sm font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Users size={16} />
                    <span className="text-sm">{course.enrollments}</span>
                  </div>
                </div>
                <CardTitle className="text-white text-xl mb-4">{course.name}</CardTitle>
                
                {/* Pricing */}
                <div className="mb-4">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-3xl font-bold text-white">₹{course.offerPrice}</span>
                    <span className="text-lg text-gray-400 line-through">₹{course.originalPrice}</span>
                  </div>
                  <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                    Save ₹{course.savings} (75% OFF)
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle size={16} className="text-green-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <Button
                  className="w-full flame-gradient hover-glow text-white font-semibold py-3 text-base transition-all duration-300 mb-3"
                  onClick={() => setSelectedCourse(course.name)}
                >
                  <Calendar className="mr-2" size={18} />
                  Enroll Now - Starts Nov 1st
                </Button>
                
                <p className="text-xs text-gray-400 text-center">
                   🔒 Secure Payment • 📞 24/7 Support
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Honest Indicators */}
        <div className={`mt-16 text-center ${inView ? "animate-fade-in" : "opacity-0"}`}>
          <div className="bg-slate-800/30 p-6 rounded-xl border border-slate-700 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-6">🌱 Growing with You</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">20</div>
                <div className="text-gray-400 text-sm">Students Completed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">100%</div>
                <div className="text-gray-400 text-sm">Course Completion</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">4+</div>
                <div className="text-gray-400 text-sm">Projects Built</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-white mb-1">New</div>
                <div className="text-gray-400 text-sm">Startup Journey</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mt-4">
              We're honest about being a startup. Join us as we grow together and build something amazing!
            </p>
          </div>
        </div>
        {/* Enrollment Modal */}
        {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in p-4">
            <div className="relative bg-slate-900 rounded-2xl shadow-2xl p-6 max-w-md w-full border border-slate-700">
              {/* Close button */}
              <button
                onClick={() => setSelectedCourse(null)}
                className="absolute top-3 right-3 text-gray-400 hover:text-orange-500 text-xl font-bold focus:outline-none"
                aria-label="Close"
              >
                ×
              </button>
              
              <div className="text-center">
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    🎉 Secure Your Seat!
                  </h3>
                  <p className="text-orange-400 font-semibold">
                    {selectedCourse}
                  </p>
                  <p className="text-gray-300 text-sm mt-1">
                    Course starts November 1st, 2025
                  </p>
                </div>
                
                {/* Course benefits */}
                <div className="bg-slate-800/50 rounded-lg p-3 mb-4 text-left">
                  <h4 className="text-white font-semibold mb-2 text-center text-sm">What You Get:</h4>
                  <ul className="space-y-1 text-xs text-gray-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-green-400" />
                      Live classes with experienced mentors
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-green-400" />
                      Hands-on projects for portfolio
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-green-400" />
                      Course completion certificate
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle size={12} className="text-green-400" />
                      Career guidance & community access
                    </li>
                  </ul>
                </div>
                
                {/* Honest messaging */}
                <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-2 mb-4">
                  <p className="text-blue-400 text-xs font-semibold">
                    🌱 Join our growing community! Early bird pricing available.
                  </p>
                </div>
                
                {/* CTA */}
                <a
                  href={enrollmentLinks[selectedCourse]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full mb-3"
                >
                  <Button className="w-full flame-gradient hover-glow text-white font-bold py-3 text-base rounded-lg">
                    🚀 Complete Enrollment Now
                  </Button>
                </a>
                
                <p className="text-xs text-gray-400">
                  🔒 Secure payment • Growing with you
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 