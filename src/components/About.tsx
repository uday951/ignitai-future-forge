
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
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
            Igniting minds with AI, skills, and real-world projects. We're on a mission to bridge the gap between 
            education and industry through cutting-edge technology training and practical experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Story Section */}
          <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6 text-white">Our Journey</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded with a vision to democratize AI and full-stack development education, Ignivance has grown 
              from a small startup to a recognized MSME-registered company partnering with industry giants.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our unique approach combines theoretical knowledge with hands-on experience, ensuring our students 
              don't just learn—they create, innovate, and solve real-world problems.
            </p>
            
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
              <h3 className="text-2xl font-bold mb-6 text-white">Impact by Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">announced</div>
                  <div className="text-gray-400">Students Trained</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">0</div>
                  <div className="text-gray-400">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">0</div>
                  <div className="text-gray-400">Placement Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold flame-gradient bg-clip-text text-transparent mb-2">24/7</div>
                  <div className="text-gray-400">Support</div>
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
