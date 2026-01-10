import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold mb-4">Ignivance</div>
            <p className="text-gray-400">
              Premium web development for modern businesses.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <div className="space-y-2 text-gray-400">
              <Link to="/services" className="block hover:text-white">Web Design</Link>
              <Link to="/services" className="block hover:text-white">Web Development</Link>
              <Link to="/services" className="block hover:text-white">Performance</Link>
              <Link to="/services" className="block hover:text-white">Support</Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>
            <div className="space-y-2 text-gray-400">
              <Link to="/about" className="block hover:text-white">About</Link>
              <a href="/#work" className="block hover:text-white">Work</a>
              <a href="/#process" className="block hover:text-white">Process</a>
              <Link to="/contact" className="block hover:text-white">Contact</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">ignivance@zohoemail.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 7989442841</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Hyderabad, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm">
            © 2025 Ignivance. All rights reserved.
          </div>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/udaykiran-koshika-a51142283/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/uday951" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
