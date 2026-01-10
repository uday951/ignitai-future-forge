import { Flame, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-slate-900" strokeWidth={2} />
            <span className="text-2xl font-bold text-slate-900">Ignivance</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-gray-600 hover:text-slate-900 font-medium">Services</Link>
            <a href="/#work" className="text-gray-600 hover:text-slate-900 font-medium">Work</a>
            <a href="/#process" className="text-gray-600 hover:text-slate-900 font-medium">Process</a>
            <Link to="/pricing" className="text-gray-600 hover:text-slate-900 font-medium">Pricing</Link>
            <Link to="/about" className="text-gray-600 hover:text-slate-900 font-medium">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-slate-900 font-medium">Contact</Link>
            <Link 
              to="/contact" 
              className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-900"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link to="/services" className="text-gray-600 hover:text-slate-900 font-medium">Services</Link>
              <a href="/#work" className="text-gray-600 hover:text-slate-900 font-medium">Work</a>
              <a href="/#process" className="text-gray-600 hover:text-slate-900 font-medium">Process</a>
              <Link to="/pricing" className="text-gray-600 hover:text-slate-900 font-medium">Pricing</Link>
              <Link to="/about" className="text-gray-600 hover:text-slate-900 font-medium">About</Link>
              <Link to="/contact" className="text-gray-600 hover:text-slate-900 font-medium">Contact</Link>
              <Link 
                to="/contact" 
                className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
