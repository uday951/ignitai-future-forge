import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import AboutIgnivance from "./pages/AboutIgnivance";
import Team from "./pages/Team";
import NotFound from "./pages/NotFound";
import AdminUpload from './pages/AdminUpload';
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiesPolicy from "./pages/CookiesPolicy";
import ShareYourStoryPage from './pages/ShareYourStory';
import JobsListing from "./pages/JobsListing";
import JobDetail from "./pages/JobDetail";
import Disclaimer from "./pages/Disclaimer";
import CareersHome from "./pages/CareersHome";
import AnalyticsTracker from "./components/AnalyticsTracker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AnalyticsTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about-ignivance" element={<AboutIgnivance />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/admin-upload" element={<AdminUpload />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/share-your-story" element={<ShareYourStoryPage />} />
            
            {/* Job Portal Routes */}
            <Route path="/jobs" element={<CareersHome />} />
            <Route path="/jobs/listings" element={<JobsListing category="all" />} />
            <Route path="/jobs/full-time" element={<JobsListing category="jobs" />} />
            <Route path="/jobs/:slug" element={<JobDetail />} />
            <Route path="/jobs/full-time/:slug" element={<JobDetail />} />
            <Route path="/jobs/internships/:slug" element={<JobDetail />} />
            <Route path="/jobs/off-campus-drives/:slug" element={<JobDetail />} />
            <Route path="/jobs/government-jobs/:slug" element={<JobDetail />} />
            <Route path="/internships" element={<JobsListing category="internships" />} />
            <Route path="/internships/:slug" element={<JobDetail />} />
            <Route path="/off-campus-drives" element={<JobsListing category="off-campus-drives" />} />
            <Route path="/off-campus-drives/:slug" element={<JobDetail />} />
            <Route path="/government-jobs" element={<JobsListing category="government-jobs" />} />
            <Route path="/government-jobs/:slug" element={<JobDetail />} />
            <Route path="/disclaimer" element={<Disclaimer />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
