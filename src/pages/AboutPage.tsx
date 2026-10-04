import React from 'react';
import { ArrowUpRight, Github, Linkedin, Instagram, Compass, Code2, Users, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const AboutPage: React.FC = () => {
  const leadership = [
    {
      name: 'Uday Kiran',
      role: 'FOUNDER & CEO',
      title: 'Principal Product Architect',
      bio: 'Uday Kiran founded Ignivance with a singular focus: closing the painful gap between abstract product ideas and high-performance production code. With hands-on mastery of full-stack engineering, distributed systems, and modern AI automation, he directs the technical strategy of client engagements.',
      image: `${import.meta.env.BASE_URL}founder.jpg`,
      linkedin: 'https://www.linkedin.com/in/udaykiran-koshika-a51142283/',
      github: 'https://github.com/uday951',
      instagram: 'https://www.instagram.com/udaytechx/',
    },
    {
      name: 'Mahathi Godala',
      role: 'CO-FOUNDER',
      title: 'Product Strategy & Community Lead',
      bio: 'Mahathi drives Ignivance’s product direction, cross-functional operations, and developer community programs. She ensures every product shipped by the studio aligns with genuine user needs and maintains empathetic design standards.',
      image: `${import.meta.env.BASE_URL}co-founder.jpeg`,
      linkedin: 'https://www.linkedin.com/in/godala-mahathi/',
      github: 'https://github.com/mahathireddy02',
    },
  ];

  const coreValues = [
    {
      num: '01',
      name: 'Technical Truth',
      desc: 'We never pretend a feature is easy when it involves deep distributed complexity. We tell our clients the truth about trade-offs, scalability, and maintenance burdens.',
    },
    {
      num: '02',
      name: 'Zero Vanity Metrics',
      desc: 'Lines of code, flashy pitch decks, and meaningless vanity clicks mean nothing if the software doesn’t solve a user problem or drive unit economics.',
    },
    {
      num: '03',
      name: 'Design-Engineering Symbiosis',
      desc: 'Designers who understand CSS flexbox. Engineers who care about leading and kerning. We treat aesthetics and code as twin disciplines of the same craft.',
    },
    {
      num: '04',
      name: 'Long-Horizon Stewardship',
      desc: 'We build codebases designed to be read, extended, and maintained by future developers for years to come — not disposable prototypes.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F5] text-[#17181C]">
      <SEO
        title="About IGNIVANCE — Story, Philosophy & Leadership"
        description="Learn the origin story, core engineering philosophy, and leadership behind Ignivance Digital Product Studio."
        canonical="https://ignivance.in/about"
      />
      <Navbar />

      <main className="pt-32 md:pt-44 pb-24 md:pb-36">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          {/* Header */}
          <div className="mb-20 md:mb-28 pb-12 border-b border-black/[0.08]">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                ORIGIN & STUDIO IDENTITY
              </span>
            </div>
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0D0E11] tracking-tight uppercase leading-[0.92]">
              BUILT BY<br />
              <span className="text-ignis-500">ENGINEERS</span> WHO CARE.
            </h1>
            <p className="mt-8 text-base sm:text-xl text-[#55565A] max-w-3xl leading-relaxed">
              We started Ignivance because we were frustrated by the status quo of digital agencies: bloated committees, junior staff handed off without oversight, and disconnected vendors who never took ownership of the business result.
            </p>
          </div>

          {/* Narrative Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28 items-start">
            <div className="lg:col-span-5 space-y-4">
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175] block">
                The Ignivance Thesis
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0E11] tracking-tight uppercase leading-snug">
                One studio for the entire product journey.
              </h2>
            </div>

            <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#55565A] leading-relaxed">
              <p>
                In the modern technology landscape, the traditional separation between design agencies, engineering firms, AI consultants, and growth marketers is obsolete. A change in your user interface directly affects your paid conversion rate; an architectural choice in your database schema directly governs what features your AI agent can query.
              </p>
              <p>
                Ignivance was constructed from day one as a unified studio. Our team works across the complete lifecycle: de-risking the product hypothesis, designing atomic interface systems, writing testable full-stack software, deploying machine intelligence, and scaling high-intent customer acquisition.
              </p>
              <p>
                Headquartered in Hyderabad, India, we collaborate with ambitious founders, established organizations, and non-profits across the country and around the globe.
              </p>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="mb-28">
            <div className="flex items-center justify-between pb-6 mb-12 border-b border-black/[0.08]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-ignis-500"></span>
                <span className="font-mono text-xs uppercase tracking-widest text-[#707175]">
                  STUDIO LEADERSHIP
                </span>
              </div>
              <span className="font-mono text-xs text-[#707175]">DIRECT BUILDER ACCESS</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {leadership.map((leader, idx) => (
                <div
                  key={idx}
                  className="p-8 sm:p-12 rounded-3xl bg-white border border-black/[0.08] shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-6 mb-8">
                      <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden bg-black/[0.05] border border-black/[0.08] shrink-0">
                        <img
                          src={leader.image}
                          alt={leader.name}
                          className="w-full h-full object-cover grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                        />
                      </div>

                      <div className="flex items-center gap-3 text-[#707175]">
                        {leader.linkedin && (
                          <a
                            href={leader.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-black/[0.04] hover:bg-ignis-500 hover:text-white transition-colors"
                            aria-label={`${leader.name} LinkedIn`}
                          >
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {leader.github && (
                          <a
                            href={leader.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-black/[0.04] hover:bg-[#0D0E11] hover:text-white transition-colors"
                            aria-label={`${leader.name} GitHub`}
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-2xl text-[#0D0E11] mb-1">
                      {leader.name}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-ignis-600 font-semibold mb-4">
                      {leader.role} — {leader.title}
                    </p>

                    <p className="text-sm text-[#55565A] leading-relaxed">
                      {leader.bio}
                    </p>
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/[0.06] font-mono text-[11px] text-[#707175]">
                    DIRECT INVOLVEMENT IN ALL CLIENT ROADMAPS
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values / Studio Culture */}
          <div className="mb-28">
            <div className="mb-12">
              <span className="font-mono text-xs uppercase tracking-widest text-[#707175] block mb-2">
                OPERATING CODE
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-[#0D0E11] tracking-tight uppercase">
                The Values That Govern Our Work
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((v) => (
                <div
                  key={v.num}
                  className="p-7 rounded-2xl bg-white border border-black/[0.08] flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-bold text-ignis-500 block mb-4">
                      VALUE // {v.num}
                    </span>
                    <h3 className="font-display font-bold text-xl text-[#0D0E11] mb-2">
                      {v.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#55565A] leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA Strip */}
          <div className="p-10 md:p-14 rounded-3xl bg-[#0D0E11] text-white flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-ignis-400 block mb-2">
                START A CONVERSATION
              </span>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
                Interested in working with our studio?
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-ignis-500 hover:bg-ignis-600 text-white px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shrink-0"
            >
              <span>Initiate Project Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
