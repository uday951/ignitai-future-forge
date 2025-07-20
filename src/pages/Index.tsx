import Hero from '@/components/Hero';
import About from '@/components/About';
import InternshipDurations from '@/components/InternshipDurations';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import ApplyNow from '@/components/ApplyNow';
import CertificateVerification from '@/components/CertificateVerification';
import Footer from '@/components/Footer';
import AdminUpload from './AdminUpload';
import ContactDeveloper from '../components/ContactDeveloper';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <InternshipDurations />
      <Services />
      {/* <Partners /> */}
      <Projects />
      <Testimonials />
      <ContactDeveloper />
      <ApplyNow />
      <CertificateVerification />
      <Footer />
    </div>
  );
};

export default Index;
