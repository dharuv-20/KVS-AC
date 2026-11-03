import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BookModal } from './components/BookModal';
import { StickyMobileBar } from './components/StickyMobileBar';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';

// Helper component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="flex flex-col min-h-screen bg-[#F8F9FB] text-[#172033] antialiased">
          <Navbar />
          
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/services/:slug" element={<ServiceDetailPage />} />
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          <Footer />

          {/* Global Service Booking Modal */}
          <BookModal />

          {/* Sticky Mobile Actions Bar */}
          <StickyMobileBar />
        </div>
      </BrowserRouter>
    </LanguageProvider>
  );
};

export default App;
