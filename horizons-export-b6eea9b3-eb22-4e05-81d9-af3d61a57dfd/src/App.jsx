import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StickyApplyButton from '@/components/StickyApplyButton';
import Home from '@/pages/Home';
import Programs from '@/pages/Programs';
import Admissions from '@/pages/Admissions';
import KnowledgeBase from '@/pages/KnowledgeBase';
import StudentServices from '@/pages/StudentServices';
import AboutUs from '@/pages/AboutUs';
import Contact from '@/pages/Contact';
import HybridCNA from '@/pages/HybridCNA';
import FinancialAidPage from '@/pages/FinancialAid';
import WIOALandingPage from '@/pages/WIOALandingPage';
import WIOAFridayPage from '@/pages/WIOAFridayPage';
import SpotReservedPage from '@/pages/SpotReservedPage';
import WIOAAugust14Page from '@/pages/WIOAAugust14Page';

const AppContent = () => {
  const location = useLocation();
  const hideChromeRoutes = ['/free-cna-training-wioa', '/wioa-friday', '/spot-reserved', '/wioa-august-14'];
  const shouldHideChrome = hideChromeRoutes.includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {!shouldHideChrome && <Header />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/hybrid-cna" element={<HybridCNA />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/financial-aid" element={<FinancialAidPage />} />
          <Route path="/knowledge-base" element={<KnowledgeBase />} />
          <Route path="/student-services" element={<StudentServices />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/free-cna-training-wioa" element={<WIOALandingPage />} />
          <Route path="/wioa-friday" element={<WIOAFridayPage />} />
          <Route path="/spot-reserved" element={<SpotReservedPage />} />
          <Route path="/wioa-august-14" element={<WIOAAugust14Page />} />
        </Routes>
      </main>
      {!shouldHideChrome && <StickyApplyButton />}
      {!shouldHideChrome && <Footer />}
      <Toaster />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;