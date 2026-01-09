import { Flame } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Flame className="w-8 h-8 text-slate-900" strokeWidth={2} />
            <span className="text-2xl font-bold text-slate-900">Ignivance</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/services" className="text-gray-600 hover:text-slate-900 font-medium">Services</a>
            <a href="/#work" className="text-gray-600 hover:text-slate-900 font-medium">Work</a>
            <a href="/#process" className="text-gray-600 hover:text-slate-900 font-medium">Process</a>
            <a href="/pricing" className="text-gray-600 hover:text-slate-900 font-medium">Pricing</a>
            <a href="/about" className="text-gray-600 hover:text-slate-900 font-medium">About</a>
            <a href="/contact" className="text-gray-600 hover:text-slate-900 font-medium">Contact</a>
            <a 
              href="/contact" 
              className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-600"
            >
              Get a Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-slate-900">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
