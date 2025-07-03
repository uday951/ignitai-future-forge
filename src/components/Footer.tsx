
import { Mail, Phone, MapPin, Linkedin, Github, Youtube, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      {/* Contact Form Section */}
      <div className="py-16 bg-gradient-to-b from-slate-900 to-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-white">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Ready to start your journey? Have questions? We'd love to hear from you!
              </p>
              
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="contact-name" className="text-white">Name</Label>
                    <Input id="contact-name" className="bg-slate-800 border-slate-700 text-white" placeholder="Your Name" />
                  </div>
                  <div>
                    <Label htmlFor="contact-email" className="text-white">Email</Label>
                    <Input id="contact-email" type="email" className="bg-slate-800 border-slate-700 text-white" placeholder="your@email.com" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="contact-subject" className="text-white">Subject</Label>
                  <Input id="contact-subject" className="bg-slate-800 border-slate-700 text-white" placeholder="How can we help?" />
                </div>
                
                <div>
                  <Label htmlFor="contact-message" className="text-white">Message</Label>
                  <Textarea 
                    id="contact-message" 
                    className="bg-slate-800 border-slate-700 text-white" 
                    placeholder="Tell us about your goals..."
                    rows={4}
                  />
                </div>
                
                <Button className="w-full flame-gradient hover-glow text-white font-semibold py-3">
                  Send Message
                </Button>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h4 className="text-2xl font-bold mb-6 text-white">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="mr-4 text-orange-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Email</p>
                      <p className="text-gray-300">hello@ignitai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-4 text-orange-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Phone</p>
                      <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <MapPin className="mr-4 text-orange-400" size={20} />
                    <div>
                      <p className="text-white font-medium">Address</p>
                      <p className="text-gray-300">Bangalore, Karnataka, India</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-xl font-bold mb-4 text-white">Follow Us</h4>
                <div className="flex gap-4">
                  <Button size="icon" variant="outline" className="border-slate-700 text-gray-400 hover:text-white hover:border-orange-500">
                    <Linkedin size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="border-slate-700 text-gray-400 hover:text-white hover:border-orange-500">
                    <Github size={20} />
                  </Button>
                  <Button size="icon" variant="outline" className="border-slate-700 text-gray-400 hover:text-white hover:border-orange-500">
                    <Youtube size={20} />
                  </Button>
                </div>
              </div>

              {/* MSME Info */}
              <div className="bg-slate-800/50 p-6 rounded-lg border border-slate-700">
                <h4 className="text-lg font-bold mb-2 text-white">MSME Registered</h4>
                <p className="text-gray-300 text-sm mb-2">
                  Udyam Registration No: UDYAM-XX-00-0000000
                </p>
                <p className="text-gray-400 text-xs">
                  Micro, Small and Medium Enterprises Registration
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="py-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">🔥</span>
              </div>
              <span className="text-white font-bold text-xl">IgnitAI</span>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400 text-sm">
              <div className="flex gap-4">
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
              <div className="flex items-center gap-2">
                <span>© 2024 IgnitAI. All rights reserved.</span>
              </div>
            </div>
          </div>
          
          {/* Partner Logos */}
          <div className="mt-8 pt-8 border-t border-slate-800">
            <div className="text-center mb-4">
              <p className="text-gray-400 text-sm">Powered by</p>
            </div>
            <div className="flex justify-center items-center gap-8 opacity-60">
              <div className="text-2xl">🔵</div>
              <div className="text-2xl">🟡</div>
              <div className="text-2xl">🟦</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
