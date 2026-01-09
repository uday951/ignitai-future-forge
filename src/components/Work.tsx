const Work = () => {
  const projects = [
    {
      title: 'School Website',
      category: 'Education',
      description: 'Modern school website showcasing facilities and programs',
      link: 'https://snt-ignite-web.onrender.com/',
      emoji: '🏫'
    },
    {
      title: 'CozyStay Hostel Booking',
      category: 'Booking Platform',
      description: 'PG and hostel booking system with real-time availability',
      link: 'https://cozy-stay-showcase.onrender.com/',
      emoji: '🏠'
    },
    {
      title: 'Fitness Center Website',
      category: 'Health & Fitness',
      description: 'Modern gym website with membership and class scheduling',
      link: 'https://gym-application-3dok.vercel.app/',
      emoji: '💪'
    },
    {
      title: 'Cafe Management System',
      category: 'Web Application',
      description: 'Full-stack ordering system with real-time updates',
      link: 'https://cafe.udayonline.in/',
      emoji: '☕'
    }
  ];

  return (
    <section id="work" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Recent projects we've delivered for our clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, i) => (
            <a
              key={i}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-blue-500"
            >
              <div className="aspect-video bg-gray-100 rounded-xl mb-4 flex items-center justify-center">
                <span className="text-6xl">{project.emoji}</span>
              </div>
              <div className="text-sm text-blue-500 font-semibold mb-2">
                {project.category}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
