import { Award } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            About <span className="text-orange-500">Ignivance</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A growing startup focused on practical AI & Full Stack training with honest, transparent approach to learning.
          </p>
        </div>

        {/* Mobile: Clean Cards */}
        <div className="md:hidden space-y-6 px-4">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Why Choose Ignivance?</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "👨🏫", title: "Expert Mentors", desc: "Industry professionals" },
                { icon: "🛠️", title: "Hands-on Projects", desc: "Real-world experience" },
                { icon: "🎯", title: "Career Support", desc: "Job placement help" },
                { icon: "🤝", title: "Community", desc: "Peer learning" }
              ].map((item, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-xl border border-gray-100 dark:border-slate-600">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-xs">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Our Progress</h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: "20+", label: "Graduates", color: "text-blue-600 dark:text-blue-400" },
                { number: "4+", label: "Live Projects", color: "text-green-600 dark:text-green-400" },
                { number: "100%", label: "Success Rate", color: "text-orange-600 dark:text-orange-400" },
                { number: "MSME", label: "Registered", color: "text-purple-600 dark:text-purple-400" }
              ].map((stat, i) => (
                <div key={i} className="text-center p-4 bg-gray-50 dark:bg-slate-700 rounded-xl border border-gray-100 dark:border-slate-600">
                  <div className={`text-2xl font-bold mb-1 ${stat.color}`}>{stat.number}</div>
                  <div className="text-gray-700 dark:text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Desktop: Clean Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 h-full">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us?</h3>
            <div className="space-y-4">
              {[
                { icon: "👨🏫", title: "Expert Mentors", desc: "Industry professionals guide your learning" },
                { icon: "🛠️", title: "Hands-on Projects", desc: "Build real applications from day one" },
                { icon: "🎯", title: "Career Support", desc: "Job placement and interview prep" }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="text-2xl">{item.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm mb-1">{item.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 h-full">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Progress</h3>
            <div className="space-y-4">
              {[
                { number: "20+", label: "Graduates", desc: "Successfully completed", color: "text-blue-600 dark:text-blue-400" },
                { number: "4+", label: "Live Projects", desc: "Real-world applications", color: "text-green-600 dark:text-green-400" },
                { number: "100%", label: "Success Rate", desc: "First batch completion", color: "text-orange-600 dark:text-orange-400" }
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">{stat.label}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-gray-200 dark:border-slate-700 h-full">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                We're building a transparent, honest learning platform where students get real skills through practical projects.
              </p>
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-3 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400">
                  <Award size={16} />
                  <span className="font-semibold text-sm">MSME Registered</span>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Join our growing community and be part of our startup journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;