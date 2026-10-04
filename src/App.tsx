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
import WorkPage from "./pages/WorkPage";
import InsightsPage from "./pages/InsightsPage";
import EducationPage from "./pages/EducationPage";
import ShareYourStoryPage from "./pages/ShareYourStory";
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
            <Route path="/capabilities" element={<ServicesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/clients" element={<WorkPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/about-ignivance" element={<AboutIgnivance />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/team" element={<Team />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/admin-upload" element={<AdminUpload />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookies-policy" element={<CookiesPolicy />} />
            <Route path="/share-your-story" element={<ShareYourStoryPage />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
