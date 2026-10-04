import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    company: [
      { label: 'Capabilities', href: '#capabilities' },
      { label: 'Selected Work', href: '#work' },
      { label: 'About Studio', href: '#about' },
      { label: 'How We Work', href: '#process' },
    ],
    services: [
      { label: 'Web Applications', href: '#capabilities' },
      { label: 'Mobile Apps', href: '#capabilities' },
      { label: 'AI & Automation', href: '#capabilities' },
      { label: 'Product UI/UX Design', href: '#capabilities' },
    ],
    resources: [
      { label: 'Studio Insights', href: '#insights' },
      { label: 'Education & Mentorship', href: '#education' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-and-conditions' },
    ],
    social: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/udaykiran-koshika-a51142283/' },
      { label: 'Instagram', href: 'https://www.instagram.com/udaytechx/' },
      { label: 'GitHub', href: 'https://github.com/uday951' },
    ],
  };

  return (
    <footer
      className="w-full bg-[#0B0B0C] text-[#F4EFE8] pt-20 pb-12 px-5 sm:px-8"
      aria-label="Footer"
    >
      <div className="max-w-[1200px] mx-auto">
        
        {/* Top Section: Logo, Tagline & Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="group inline-flex items-center gap-2 mb-4 focus:outline-none"
              aria-label="Ignivance Home"
            >
              <span className="font-headline font-semibold text-2xl tracking-[-0.02em] text-white group-hover:text-[#FF4D1C] transition-colors duration-200">
                IGNIVANCE
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C]" />
            </a>

            <p className="font-sans text-sm text-[#F4EFE8]/70 leading-relaxed max-w-sm mb-6">
              Independent digital product studio crafting high-performance web applications, mobile platforms, and AI systems.
            </p>

            <div className="font-mono text-xs text-[#F4EFE8]/50 space-y-1">
              <p>HYDERABAD, INDIA</p>
              <a
                href="mailto:ignivance@zohoemail.in"
                className="hover:text-[#FF4D1C] transition-colors inline-block text-white/80"
              >
                ignivance@zohoemail.in
              </a>
            </div>
          </div>

          {/* Column: Company */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F4EFE8]/40 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              {links.company.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#F4EFE8]/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Services */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F4EFE8]/40 mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              {links.services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[#F4EFE8]/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column: Social */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#F4EFE8]/40 mb-4">
              Social
            </h4>
            <ul className="space-y-2.5 font-sans text-xs">
              {links.social.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-1 text-[#F4EFE8]/70 hover:text-white transition-colors"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-60 group-hover:opacity-100 transition-opacity" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#F4EFE8]/40">
          <div>
            © {currentYear} IGNIVANCE TECHNOLOGY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>STUDIO DISPATCH: ACTIVE FOR Q4 / Q1 BUILDS</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
