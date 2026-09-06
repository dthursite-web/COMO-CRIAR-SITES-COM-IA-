import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import LiveDemoSimulator from './components/LiveDemoSimulator';
import OldVsNewComparison from './components/OldVsNewComparison';
import CurriculumModules from './components/CurriculumModules';
import TargetAudience from './components/TargetAudience';
import CourseExplanation from './components/CourseExplanation';
import PricingOffer from './components/PricingOffer';
import GuaranteeSection from './components/GuaranteeSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import StickyBottomBar from './components/StickyBottomBar';
import ThankYouPage from './components/ThankYouPage';
import CheckoutConfirmationPage from './components/CheckoutConfirmationPage';
import LegalModals, { LegalModalType } from './components/LegalModals';

export default function App() {
  const [isThankYouPage, setIsThankYouPage] = useState(false);
  const [isConfirmationPage, setIsConfirmationPage] = useState(false);
  const [legalModal, setLegalModal] = useState<LegalModalType>(null);

  useEffect(() => {
    const checkRoute = () => {
      const path = window.location.pathname.toLowerCase();
      const search = window.location.search.toLowerCase();
      const hash = window.location.hash.toLowerCase();

      if (
        path.includes('/obrigado') ||
        path.includes('/sucesso') ||
        search.includes('obrigado') ||
        search.includes('sucesso') ||
        hash.includes('obrigado') ||
        hash.includes('sucesso')
      ) {
        setIsThankYouPage(true);
        setIsConfirmationPage(false);
      } else if (
        path.includes('/confirmacao') ||
        path.includes('/checkout') ||
        path.includes('/vaga') ||
        search.includes('confirmacao') ||
        search.includes('checkout') ||
        search.includes('vaga') ||
        hash.includes('confirmacao') ||
        hash.includes('checkout') ||
        hash.includes('vaga')
      ) {
        setIsConfirmationPage(true);
        setIsThankYouPage(false);
      } else {
        setIsThankYouPage(false);
        setIsConfirmationPage(false);
      }
    };

    checkRoute();
    window.addEventListener('popstate', checkRoute);
    window.addEventListener('hashchange', checkRoute);
    return () => {
      window.removeEventListener('popstate', checkRoute);
      window.removeEventListener('hashchange', checkRoute);
    };
  }, []);

  const goToConfirmation = () => {
    window.history.pushState({}, '', '#confirmacao');
    setIsConfirmationPage(true);
    setIsThankYouPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const backToHome = () => {
    window.history.pushState({}, '', '/');
    setIsConfirmationPage(false);
    setIsThankYouPage(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isThankYouPage) {
    return <ThankYouPage onBackToHome={backToHome} />;
  }

  if (isConfirmationPage) {
    return <CheckoutConfirmationPage onBackToHome={backToHome} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col font-sans selection:bg-[#00FF41] selection:text-[#050505]">
      <Navbar onOpenConfirmation={goToConfirmation} />
      <main className="flex-1 overflow-hidden">
        <Hero onOpenConfirmation={goToConfirmation} />
        <ProductShowcase onOpenConfirmation={goToConfirmation} />
        <LiveDemoSimulator />
        <OldVsNewComparison />
        <CurriculumModules onOpenConfirmation={goToConfirmation} />
        <TargetAudience />
        <CourseExplanation onOpenConfirmation={goToConfirmation} />
        <PricingOffer onOpenConfirmation={goToConfirmation} />
        <GuaranteeSection onOpenConfirmation={goToConfirmation} />
        <FaqSection onOpenConfirmation={goToConfirmation} />
      </main>
      <Footer onOpenLegalModal={setLegalModal} />
      <StickyBottomBar onOpenConfirmation={goToConfirmation} />
      <LegalModals activeModal={legalModal} onClose={() => setLegalModal(null)} />
    </div>
  );
}
