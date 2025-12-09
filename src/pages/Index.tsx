import AnimatedHero from '@/components/AnimatedHero';
import About from '@/components/About';
import InteractiveCourseSelector from '@/components/InteractiveCourseSelector';
import InteractiveSkillsShowcase from '@/components/InteractiveSkillsShowcase';
import Services from '@/components/Services';
import Partners from '@/components/Partners';
import Projects from '@/components/Projects';
import InteractiveTestimonials from '@/components/InteractiveTestimonials';
import ApplyNow from '@/components/ApplyNow';
import CertificateVerification from '@/components/CertificateVerification';
import Footer from '@/components/Footer';
import FloatingCTA from '@/components/FloatingCTA';
import AdminUpload from './AdminUpload';
import ContactDeveloper from '../components/ContactDeveloper';
import ShareStorySection from '../components/ShareStorySection';

import { useTheme } from '../contexts/ThemeContext';

const Index = () => {
  const { theme } = useTheme();
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-background transition-colors duration-300">
      <AnimatedHero />
      <About />
      <InteractiveCourseSelector />
      <InteractiveSkillsShowcase />
      <Services />
      {/* <Partners /> */}
      <Projects />
      <InteractiveTestimonials />
      <ShareStorySection />
      <ContactDeveloper />
      <ApplyNow />
      <CertificateVerification />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
