import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ShieldCheck, Eye, Lock, FileText } from 'lucide-react';

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col">
    <SEO 
      title="Privacy Policy | Ignivance"
      description="Learn about how Ignivance collects, uses, and protects your personal data when using our web development, automation solutions, and client services."
      canonical="https://ignivance.in/privacy-policy"
    />
    <Navbar />

    <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6 mb-8">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">
              <ShieldCheck className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Privacy Policy</h1>
              <p className="text-slate-500 text-sm mt-1">Effective Date: June 1, 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
            
            <p>
              At Ignivance, we are committed to protecting your privacy and ensuring a secure experience across our platforms, including ignivance.in and our development and client consultation services. This Privacy Policy details the types of information we gather, how we process it, and your rights concerning your personal information.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-600" />
                1. Information We Collect
              </h2>
              <p>We collect information you directly submit to us, as well as metadata gathered automatically:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Contact & Consultation Details:</strong> Name, email address, telephone contact number, and organization details when requesting a quote or contacting us.</li>
                <li><strong>Project Requirements Data:</strong> Project briefs, feedback, or technical specifications submitted for project scopes and development engagements.</li>
                <li><strong>Log Information:</strong> Technical data including your IP address, browser type, operating system, and pages accessed, used for site performance diagnostics and optimization.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-600" />
                2. How We Use Your Data
              </h2>
              <p>Your details are used solely to deliver and improve our services:</p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>To respond to your inquiries, consultation requests, and service proposals.</li>
                <li>To deliver custom development solutions, performance optimizations, and project support.</li>
                <li>To manage website stability, prevent automated spam attacks, and measure user engagement.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-600" />
                3. Cookies & Advertising Policies
              </h2>
              <p>
                We use cookies and tracker files to store user preferences and gather analytics. Additionally:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li><strong>Google Analytics:</strong> We use Google Analytics to analyze website traffic. Google may collect anonymous device parameters.</li>
                <li><strong>Google AdSense:</strong> Third-party vendors, including Google, use cookies to serve ads based on your previous visits to our website. Google's use of advertising cookies enables it and its partners to serve ads based on your visits to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting Ad Settings or www.aboutads.info.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>🛡️</span> 4. Security & Data Protection
              </h2>
              <p>
                We employ standard security configurations (including secure database storage and SSL encryption) to keep your information safe. Ignivance does NOT sell, rent, or trade your personal information to third-party marketing companies. If data sharing is required for specific partnerships (e.g., student verification for partner courses), it is conducted only with your explicit consent.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>⚙️</span> 5. Your Choices & Access Rights
              </h2>
              <p>
                You can opt-out of our newsletter or marketing communications by clicking the 'Unsubscribe' link at the bottom of any email. You may also request to access, update, or completely purge your records from our databases by contacting our data protection officer at <a href="mailto:privacy@ignivance.in" className="text-blue-600 hover:underline">privacy@ignivance.in</a>.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900">6. Policy Updates & Contact</h2>
              <p>
                We reserve the right to modify this Privacy Policy at any time. Any changes will be published here with an updated effective date.
              </p>
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm">
                <p className="font-semibold text-slate-800">Email: support@ignivance.in / privacy@ignivance.in</p>
                <p className="mt-1 text-slate-600">Hyderabad, India</p>
              </div>
            </section>

          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
);

export default PrivacyPolicy;