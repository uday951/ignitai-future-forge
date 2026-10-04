import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { Scale, HelpCircle, AlertOctagon, Terminal } from 'lucide-react';

const TermsAndConditions = () => (
  <div className="min-h-screen bg-slate-50 flex flex-col">
    <SEO 
      title="Terms and Conditions | Ignivance"
      description="Read the official terms and conditions for using the Ignivance website, services, and software solutions."
      canonical="https://ignivance.in/terms-and-conditions"
    />
    <Navbar />

    <main className="flex-1 py-16 md:py-24 pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="bg-white border border-gray-100 shadow-xl shadow-slate-200/50 rounded-[2rem] p-8 md:p-12">
          {/* Header */}
          <div className="flex items-center gap-4 border-b border-slate-100 pb-6 mb-8">
            <div className="bg-blue-50 text-blue-600 p-3 rounded-2xl">
              <Scale className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Terms and Conditions</h1>
              <p className="text-slate-500 text-sm mt-1">Effective Date: June 1, 2026</p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-slate-700 leading-relaxed text-sm md:text-base">
            
            <p>
              Welcome to Ignivance. These Terms and Conditions ("Terms") govern your access to and use of our website, located at ignivance.in, including our web development services, automation solutions, client consultations, and digital products. By accessing or using our platform, you agree to be bound by these Terms.
            </p>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <Terminal className="w-5 h-5 text-blue-600" />
                1. Acceptance of Terms & Services
              </h2>
              <p>
                Ignivance delivers software engineering, UI/UX design, custom automation, and web development services. We reserve the right to modify, suspend, or discontinue any feature or service at any time without prior notice. You agree to use our website only for lawful purposes in accordance with these Terms.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <AlertOctagon className="w-5 h-5 text-blue-600" />
                2. Intellectual Property Rights
              </h2>
              <p>
                All text, graphics, logos, layouts, and coding elements on ignivance.in are the intellectual property of Ignivance, unless otherwise stated. Client deliverables are subject to individual agreements and service contracts. Redistribution, modification, or commercial exploitation of our site content without prior written permission is strictly prohibited.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                <span>⚠️</span> 3. Limitation of Liability
              </h2>
              <p>
                Ignivance and its team shall not be liable for any direct, indirect, incidental, or consequential damages resulting from your use of, or inability to use, our website or services. This includes, but is not limited to, technical interruptions or third-party web linkages.
              </p>
            </section>

            <section className="space-y-3 border-t border-slate-100 pt-6">
              <h2 className="text-xl font-bold text-slate-900">4. Governing Law & Contact</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts in Hyderabad, Telangana.
              </p>
              <p className="mt-4">
                If you have questions about these Terms, please contact us:
              </p>
              <div className="bg-slate-50 border border-slate-100 p-4 rounded-xl text-sm font-semibold">
                <p>Email: <a href="mailto:support@ignivance.in" className="text-blue-600 hover:underline">support@ignivance.in</a></p>
                <p className="mt-1">Hyderabad, India</p>
              </div>
            </section>

          </div>
        </div>

      </div>
    </main>

    <Footer />
  </div>
);

export default TermsAndConditions;