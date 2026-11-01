import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'About', href: '/about' },
    { label: 'Insights', href: '/insights' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#FAF8F5]/90 backdrop-blur-md py-3.5 border-b border-[#E8E4DE] shadow-sm'
            : 'bg-transparent py-5 md:py-6 border-b border-transparent'
        }`}
      >
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Logo on Left: "IGNIVANCE" with orange dot */}
          <Link
            to="/"
            className="group flex items-center gap-2 tracking-tight focus:outline-none"
            aria-label="Ignivance Home"
          >
            <span className="font-headline font-bold text-xl md:text-2xl tracking-[-0.03em] text-[#111111] group-hover:text-[#FF4D1C] transition-colors duration-200">
              IGNIVANCE
            </span>
            <span className="w-2 h-2 rounded-full bg-[#FF4D1C] group-hover:scale-125 transition-transform duration-200" />
          </Link>

          {/* Center Pill with Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/90 border border-[#E8E4DE] p-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.03)] backdrop-blur-sm">
            {navLinks.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className={`px-4 py-1.5 text-xs font-medium tracking-normal rounded-full transition-all duration-200 ${
                    isActive
                      ? 'bg-[#111111] text-white shadow-sm font-semibold'
                      : 'text-[#55565A] hover:text-[#111111] hover:bg-black/[0.04]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: "Start a Project →" Black Rounded-Full Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 bg-[#111111] hover:bg-[#FF4D1C] text-white px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
            >
              <span>Start a Project</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#FAF8F5] pt-24 px-6 md:hidden flex flex-col justify-between pb-12 animate-in fade-in duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-headline font-semibold py-2 border-b border-[#E8E4DE] flex items-center justify-between ${
                  location.pathname === item.href ? 'text-[#FF4D1C]' : 'text-[#111111]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-5 h-5 text-[#707175]" />
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full py-4 rounded-2xl bg-[#111111] text-white font-mono text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
