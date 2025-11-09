import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import FaqPage from './pages/FaqPage';
import CommunityPage from './pages/CommunityPage';
import PricingPage from './pages/PricingPage';
import CareersPage from './pages/CareersPage';
import InternshipPage from './pages/InternshipPage';
import SafetyPage from './pages/SafetyPage';
import CommingSoonPage from './pages/CommingSoonPage';
import HelpCenterPage from './pages/HelpCenterPage';
import TeamPage from './pages/TeamPage';

const ScrollRestoration: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <div className="relative bg-black text-slate-300 min-h-screen flex flex-col font-sans">
      <BrowserRouter>
        <ScrollRestoration />
        <Header />
        <main className="flex-grow pt-28">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/team" element={<TeamPage />} />

        {/* FOOTER */}
          {/* Company */}
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/internship" element={<InternshipPage />} />

          {/* Support */}
            <Route path="/help" element={<HelpCenterPage />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/community" element={<CommunityPage />} />

          {/* Legal */}
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/safety" element={<SafetyPage />} />

            <Route path="/comming-soon" element={<CommingSoonPage />} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
