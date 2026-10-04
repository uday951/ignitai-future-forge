import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section observer on scroll
      const sections = ['capabilities', 'work', 'about', 'insights', 'education', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
      if (window.scrollY < 100) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Capabilities', href: '#capabilities', id: 'capabilities' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Insights', href: '#insights', id: 'insights' },
    { label: 'Education', href: '#education', id: 'education' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/85 backdrop-blur-md py-3.5 border-b border-[#E8E4DE] shadow-sm'
            : 'bg-transparent py-5 md:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo on Left: "IGNIVANCE" with orange dot */}
          <a
            href="#"
            className="group flex items-center gap-2 tracking-tight focus:outline-none"
            aria-label="Ignivance Home"
          >
            <span className="font-headline font-semibold text-xl md:text-2xl tracking-[-0.02em] text-[#111111] group-hover:text-[#FF4D1C] transition-colors duration-200">
              IGNIVANCE
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4D1C] group-hover:scale-125 transition-transform duration-200" />
          </a>

          {/* Center Pill with Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/80 border border-[#E8E4DE] p-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.02)] backdrop-blur-sm">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 text-xs font-medium tracking-normal rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-sm font-semibold'
                      : 'text-[#6B6B6B] hover:text-[#111111] hover:bg-black/[0.04]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Right: "Start a Project →" Black Rounded-Full Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-[#111111] hover:bg-[#FF4D1C] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-black/[0.04] transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full-Screen Slide-in Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-28 px-6 pb-12 flex flex-col justify-between md:hidden animate-fade-in">
          <div className="space-y-4">
            <div className="font-mono text-xs uppercase tracking-[0.2em] text-[#6B6B6B] pb-2 border-b border-[#E8E4DE]">
              Navigation
            </div>
            <div className="flex flex-col space-y-3 pt-2">
              {navLinks.map((item, idx) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-headline text-2xl font-semibold tracking-tight text-[#111111] hover:text-[#FF4D1C] flex items-center justify-between py-2 border-b border-[#E8E4DE] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs font-normal text-[#6B6B6B]">
                    0{idx + 1}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-5 pt-6 border-t border-[#E8E4DE]">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 bg-[#111111] hover:bg-[#FF4D1C] text-white py-4 rounded-full text-sm font-semibold tracking-wide transition-all shadow-md"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="flex justify-between items-center text-xs font-mono text-[#6B6B6B]">
              <span>IGNIVANCE DIGITAL STUDIO</span>
              <span>HYDERABAD, INDIA</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
