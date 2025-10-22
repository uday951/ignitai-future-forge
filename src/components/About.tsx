
import { useEffect, useRef, useState } from 'react';
import { Award, Users, Zap, Target } from 'lucide-react';

const About = () => {
  const [inView, setInView] = useState(false);
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

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-slate-900 to-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 text-white ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            About <span className="flame-gradient bg-clip-text text-transparent">Ignivance</span>
          </h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto mb-8 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            🚀 A growing startup focused on practical AI & Full Stack training. Our first batch of 20 students successfully completed their journey!
          </p>
          <div className={`flex justify-center items-center gap-8 text-sm ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="flex items-center gap-2 text-green-400">
              <Award size={16} />
              <span>MSME Registered</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400">
              <Users size={16} />
              <span>Growing Community</span>
            </div>
            <div className="flex items-center gap-2 text-yellow-400">
              <Target size={16} />
              <span>Practical Learning</span>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6 text-white">🌱 Our Growing Journey</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <strong className="text-white">Experienced Mentors:</strong> Learn from passionate developers with industry experience
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <strong className="text-white">Hands-on Learning:</strong> Build real projects and create your portfolio while learning
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <strong className="text-white">Career Guidance:</strong> Get support and guidance for your tech career journey
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                <p className="text-gray-300">
                  <strong className="text-white">Community Support:</strong> Join our growing community of learners and developers
                </p>
              </div>
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="bg-emerald-500/20 text-emerald-400 px-4 py-2 rounded-lg border border-emerald-500/30">
                <Award className="inline mr-2" size={16} />
                MSME Registered
              </div>
              {/* <div className="bg-blue-500/20 text-blue-400 px-4 py-2 rounded-lg border border-blue-500/30">
                <Users className="inline mr-2" size={16} />
                IBM Partner
              </div>
              <div className="bg-purple-500/20 text-purple-400 px-4 py-2 rounded-lg border border-purple-500/30">
                <Zap className="inline mr-2" size={16} />
                Google Cloud Partner
              </div> */}
            </div>
          </div>

          {/* Stats Section */}
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700">
              <h3 className="text-2xl font-bold mb-6 text-white">📊 Our Honest Journey</h3>
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">20</div>
                  <div className="text-gray-300 font-medium">Students Completed</div>
                  <div className="text-xs text-gray-400">First batch success</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">4+</div>
                  <div className="text-gray-300 font-medium">Projects Built</div>
                  <div className="text-xs text-gray-400">Real applications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">100%</div>
                  <div className="text-gray-300 font-medium">Course Completion</div>
                  <div className="text-xs text-gray-400">First batch</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-gray-300 font-medium">Support</div>
                  <div className="text-xs text-gray-400">Community help</div>
                </div>
              </div>
              
              {/* Honest messaging */}
              <div className="border-t border-slate-600 pt-6">
                <div className="text-center">
                  <p className="text-sm text-gray-300 mb-2">🌱 <strong>We're Growing!</strong></p>
                  <p className="text-xs text-gray-400">
                    As a startup, we're building something special. Join us on this exciting journey of learning and growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
