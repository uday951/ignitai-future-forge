import { Github, Linkedin, Instagram } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    linkedin?: string;
    instagram?: string;
    github?: string;
  };
}

const TeamCard = ({ member }: { member: TeamMember }) => (
  <div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-slate-200/50 border border-gray-100 hover:shadow-2xl hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center h-full">
    <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 border-4 border-slate-50 shadow-inner flex-shrink-0">
      <img 
        src={member.image} 
        alt={member.name} 
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </div>
    <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-1 tracking-tight">{member.name}</h3>
    <p className="text-sm font-bold text-blue-600 tracking-wide uppercase mb-4">{member.role}</p>
    <p className="text-slate-600 leading-relaxed text-sm md:text-base mb-8 flex-1">
      {member.bio}
    </p>
    <div className="flex items-center justify-center gap-5 mt-auto">
      {member.social.instagram && (
        <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-pink-600 transition-transform hover:scale-110" aria-label={`${member.name}'s Instagram`}>
          <Instagram className="w-5 h-5" />
        </a>
      )}
      {member.social.linkedin && (
        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-transform hover:scale-110" aria-label={`${member.name}'s LinkedIn`}>
          <Linkedin className="w-5 h-5" />
        </a>
      )}
      {member.social.github && (
        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-900 transition-transform hover:scale-110" aria-label={`${member.name}'s GitHub`}>
          <Github className="w-5 h-5" />
        </a>
      )}
    </div>
  </div>
);

const Team = () => {
  const leadership: TeamMember[] = [
    {
      name: "Uday Kiran",
      role: "Founder & CEO",
      bio: "Startup builder and AI-focused product architect with hands-on expertise in full-stack development, automation systems, and scalable SaaS platforms. Driven to bridge the gap between technology and real-world impact through innovation, execution, and continuous learning.",
      image: "/founder.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/udaykiran-koshika-a51142283/",
        instagram: "https://www.instagram.com/udaytechx/"
      }
    },
    {
      name: "Sarah Chen",
      role: "Co-Founder",
      bio: "Former lead engineer at leading tech firms. Sarah architectures scalable, high-performance systems and drives our technical vision forward.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=256&h=256",
      social: {
        linkedin: "#",
        github: "#"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 md:mb-24">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
              Meet Our Team
            </h1>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We are a collective of driven engineers, visionary designers, and strategic thinkers dedicated to building the future of the web.
            </p>
          </div>

          {/* Leadership Section */}
          <div className="mb-20 md:mb-32">
            <div className="flex items-center justify-center gap-4 mb-12 md:mb-16">
              <div className="h-px bg-gray-200 flex-1 max-w-[100px] md:max-w-[200px]"></div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight text-center uppercase">Leadership</h2>
              <div className="h-px bg-gray-200 flex-1 max-w-[100px] md:max-w-[200px]"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
              {leadership.map((leader, i) => (
                <div key={i}>
                   <TeamCard member={leader} />
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Team;
