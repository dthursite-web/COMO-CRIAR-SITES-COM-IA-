import { useState, useEffect } from 'react';
import { Zap, ArrowRight, ShieldCheck } from 'lucide-react';

interface StickyBottomBarProps {
  onOpenConfirmation?: () => void;
}

export default function StickyBottomBar({ onOpenConfirmation }: StickyBottomBarProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
  };

  if (!isVisible) return null;

  return (
    <div
      id="sticky-checkout-bar"
      className="fixed bottom-0 left-0 right-0 z-40 bg-[#050505]/95 backdrop-blur-md border-t border-[#00FF41]/40 py-3 px-4 shadow-[0_-5px_30px_rgba(0,255,65,0.15)] transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <div className="flex items-center gap-3 text-center sm:text-left">
          <div className="hidden md:flex w-10 h-10 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 items-center justify-center text-[#00FF41] shrink-0">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-display font-black uppercase text-white flex items-center gap-2">
              <span>CURSO CRIANDO SITES COM IA</span>
              <span className="bg-[#00FF41] text-[#050505] text-[10px] font-mono px-2.5 py-0.5 rounded-full font-black">
                R$ 5,90 ÚNICO
              </span>
            </div>
            <p className="text-[11px] font-mono text-white/60 hidden sm:flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#00FF41]" />
              <span>ACESSO IMEDIATO VIA E-MAIL • PROCESSADO PELA CAKTO • GARANTIA 7 DIAS</span>
            </p>
          </div>
        </div>

        <button
          id="sticky-bar-cta"
          type="button"
          onClick={handleClick}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-2.5 rounded-full font-black text-xs uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,255,65,0.4)] hover:scale-[1.02] active:scale-100 whitespace-nowrap cursor-pointer"
        >
          <span>QUERO ACESSO POR R$ 5,90</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
