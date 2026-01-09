import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import PremiumCard from './premium/PremiumCard';
import PremiumButton from './premium/PremiumButton';

const PremiumProjects = () => {

  const project = {
    title: "Cafe Management Web App",
    description: "A comprehensive web application for managing cafe operations including orders, inventory, staff, and analytics with real-time tracking.",
    image: "☕",
    tech: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS"],
    live: "https://cafe.udayonline.in/",
    code: "https://github.com/uday951/cafe-table-order-flow.git"
  };

  return (
    <section className="relative py-32 bg-transparent">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
            Live Project
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Real-world application built by our interns for actual clients
          </p>
        </div>

        {/* Project Card */}
        <div className="max-w-4xl mx-auto">
          <PremiumCard>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left: Icon & Info */}
              <div>
                <div className="text-8xl mb-6">{project.image}</div>
                <h3 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-purple-50 dark:bg-purple-950/30 text-purple-700 dark:text-purple-300 text-sm font-medium px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-2xl p-4">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Built by</p>
                  <p className="text-lg font-bold text-purple-600 dark:text-purple-400">Uday Kiran</p>
                </div>
              </div>

              {/* Right: Actions */}
              <div className="space-y-4">
                <PremiumButton 
                  className="w-full"
                  onClick={() => window.open(project.live, '_blank')}
                >
                  <ExternalLink className="w-5 h-5" />
                  View Live App
                </PremiumButton>
                
                <PremiumButton 
                  variant="secondary"
                  className="w-full"
                  onClick={() => window.open(project.code, '_blank')}
                >
                  <Github className="w-5 h-5" />
                  View Source Code
                </PremiumButton>
              </div>
            </div>
          </PremiumCard>
        </div>
      </div>

    </section>
  );
};

export default PremiumProjects;
