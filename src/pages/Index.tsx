import PremiumHero from '@/components/PremiumHero';
import PremiumAbout from '@/components/PremiumAbout';
import PremiumCourses from '@/components/PremiumCourses';
import PremiumServices from '@/components/PremiumServices';
import InteractiveSkillsShowcase from '@/components/InteractiveSkillsShowcase';
import PremiumProjects from '@/components/PremiumProjects';
import PremiumTestimonials from '@/components/PremiumTestimonials';
import ShareStorySection from '../components/ShareStorySection';
import ApplyNow from '@/components/ApplyNow';
import CertificateVerification from '@/components/CertificateVerification';
import PremiumFooter from '@/components/PremiumFooter';
import FloatingCTA from '@/components/FloatingCTA';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-premium-50 via-white to-premium-50 dark:from-premium-900 dark:via-premium-950 dark:to-premium-900 transition-colors duration-300">
      <PremiumHero />
      <PremiumAbout />
      <PremiumCourses />
      <PremiumServices />
      <InteractiveSkillsShowcase />
      <PremiumProjects />
      <PremiumTestimonials />
      <ShareStorySection />
      <ApplyNow />
      <CertificateVerification />
      <PremiumFooter />
      <FloatingCTA />
    </div>
  );
};

export default Index;
