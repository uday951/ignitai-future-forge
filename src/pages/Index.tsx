
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import ApplyNow from '@/components/ApplyNow';
import CertificateVerification from '@/components/CertificateVerification';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Services />
      <Partners />
      <Projects />
      <Testimonials />
      <ApplyNow />
      <CertificateVerification />
      <Footer />
    </div>
  );
};

export default Index;
