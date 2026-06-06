import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SEO from '@/components/SEO';
import Trust from '@/components/Trust';
import Services from '@/components/Services';
import Process from '@/components/Process';
import Work from '@/components/Work';
import WhyUs from '@/components/WhyUs';
import HomeCareers from '@/components/HomeCareers';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Ignivance",
    "url": "https://ignivance.in",
    "logo": "https://ignivance.in/logo.png",
    "description": "Premier AI development company and full stack development agency providing automation solutions for startups.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-7989442841",
      "contactType": "customer service",
      "email": "ignivance@zohoemail.in"
    },
    "sameAs": [
      "https://www.linkedin.com/company/ignivance",
      "https://x.com/ignivance"
    ]
  };

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title="Ignivance | AI Development & Automation Solutions"
        description="Ignivance is a premium AI development company providing full stack development services and custom automation solutions for startups and enterprises."
        keywords="Ignivance, AI development company, full stack development services, automation solutions for startups"
        canonical="https://ignivance.in/"
        schema={schema}
      />
      <Navbar />
      <Hero />
      <Trust />
      <Services />
      <Process />
      <Work />
      <WhyUs />
      <HomeCareers />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
