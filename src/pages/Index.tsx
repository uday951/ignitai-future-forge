import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Work from '@/components/Work';
import WhyUs from '@/components/WhyUs';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Work />
      <WhyUs />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
