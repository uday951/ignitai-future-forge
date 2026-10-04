import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnalyticsStatus from './AnalyticsStatus';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1 border-b border-gray-800 pb-8 sm:border-0 sm:pb-0">
            <div className="text-2xl font-extrabold mb-4 tracking-tight">Ignivance</div>
            <p className="text-gray-400 leading-relaxed text-sm lg:text-base">
              Premium web development for modern businesses. End-to-end digital solutions that scale.
            </p>
            {/* Analytics Verification Status Dashboard (Dev mode only) */}
            {import.meta.env.DEV && <AnalyticsStatus />}
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-5 text-lg">Services</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <Link to="/services" className="block hover:text-white transition-colors">Web Design</Link>
              <Link to="/services" className="block hover:text-white transition-colors">Web Development</Link>
              <Link to="/services" className="block hover:text-white transition-colors">Performance</Link>
              <Link to="/services" className="block hover:text-white transition-colors">Growth Support</Link>
            </div>
          </div>

          {/* Company & Policies */}
          <div>
            <h3 className="font-bold mb-5 text-lg">Company</h3>
            <div className="space-y-3 text-sm text-gray-400">
              <Link to="/about-us" className="block hover:text-white transition-colors">About Us</Link>
              <Link to="/contact-us" className="block hover:text-white transition-colors">Contact Us</Link>
              <Link to="/privacy-policy" className="block hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-and-conditions" className="block hover:text-white transition-colors">Terms & Conditions</Link>
            </div>
          </div>

          {/* Contact */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="font-bold mb-5 text-lg">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <a href="mailto:ignivance@zohoemail.in" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">ignivance@zohoemail.in</span>
              </a>
              <a href="tel:+917989442841" className="flex items-center gap-3 hover:text-white transition-colors group">
                <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm">+91 7989442841</span>
              </a>
              <div className="flex items-center gap-3">
                <div className="bg-slate-800 p-2 rounded-lg">
                  <MapPin className="w-4 h-4" />
                </div>
                <span className="text-sm">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-4 pt-8 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Ignivance. All rights reserved.
          </div>
          <div className="flex gap-5">
            <a href="https://www.linkedin.com/in/udaykiran-koshika-a51142283/" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-all">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/uday951" target="_blank" rel="noopener noreferrer" className="bg-slate-800 p-3 rounded-full text-gray-400 hover:text-white hover:bg-slate-700 transition-all">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
