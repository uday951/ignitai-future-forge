import { Flame, X, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group z-50 relative outline-none focus:outline-none">
            <motion.div 
              layoutId="brand-logo"
              className="flex items-center gap-2 origin-left"
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="bg-blue-50 text-blue-600 p-2 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Flame className="w-6 h-6 md:w-7 md:h-7" strokeWidth={2} />
              </div>
              <span className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">
                Ignivance
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/services"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Services
            </Link>
            <a
              href="/#work"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Work
            </a>
            <a
              href="/#process"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Process
            </a>
            <Link
              to="/pricing"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Pricing
            </Link>
            <Link
              to="/about"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/team"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Team
            </Link>
            <Link
              to="/contact"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-blue-700 shadow-sm transition-all focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg transition-all duration-350 origin-top ${
          mobileMenuOpen
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col p-4 space-y-2">
          <Link
            to="/services"
            className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Services
          </Link>
          <a
            href="/#work"
            className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Work
          </a>
          <a
            href="/#process"
            className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Process
          </a>
          <Link
            to="/pricing"
            className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link
            to="/about"
            className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-605 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/team"
            className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="/contact"
            className="px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 rounded-xl transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-2 pb-1">
            <Link
              to="/contact"
              className="flex justify-center w-full bg-blue-600 text-white px-4 py-3.5 rounded-xl text-base font-semibold hover:bg-blue-700 shadow-sm transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
