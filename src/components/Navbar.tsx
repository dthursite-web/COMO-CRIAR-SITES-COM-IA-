import { useState } from 'react';
import { Sparkles, ArrowRight, Menu, X, ShieldCheck } from 'lucide-react';

interface NavbarProps {
  onOpenConfirmation?: () => void;
}

export default function Navbar({ onOpenConfirmation }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleCtaClick = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav id="navbar" className="sticky top-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-[#00FF41] flex items-center justify-center text-[#050505] shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="font-display font-black text-lg sm:text-xl tracking-tight text-[#F5F5F5] uppercase flex items-center gap-1.5">
                SITES COM <span className="text-[#00FF41]">IA</span>
              </span>
              <p className="text-[10px] text-white/50 font-bold tracking-[0.2em] uppercase font-mono">
                FORMAÇÃO COMPLETA
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6 text-xs font-bold uppercase tracking-wider text-white/70">
            <a href="#demonstracao" className="hover:text-[#00FF41] transition-colors flex items-center gap-1.5">
              <span>Por Dentro</span>
              <span className="bg-[#00FF41]/10 text-[#00FF41] text-[10px] px-2 py-0.5 rounded-full border border-[#00FF41]/30 font-mono">
                NOVO
              </span>
            </a>
            <a href="#como-funciona" className="hover:text-[#00FF41] transition-colors">
              Método
            </a>
            <a href="#simulador" className="hover:text-[#00FF41] transition-colors flex items-center gap-1.5">
              <span>Simulador</span>
            </a>
            <a href="#modulos" className="hover:text-[#00FF41] transition-colors">
              Grade de Aulas
            </a>
            <a href="#publico-alvo" className="hover:text-[#00FF41] transition-colors">
              Para Quem É
            </a>
            <a href="#como-funciona-detalhes" className="hover:text-[#00FF41] transition-colors">
              Explicação
            </a>
            <a href="#faq" className="hover:text-[#00FF41] transition-colors">
              FAQ
            </a>
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-mono tracking-wider uppercase text-white/50">
              <ShieldCheck className="w-4 h-4 text-[#00FF41]" />
              <span>Checkout Cakto</span>
            </div>

            <button
              id="navbar-cta-button"
              type="button"
              onClick={handleCtaClick}
              className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] cursor-pointer"
            >
              <span>VAGA POR R$ 5,90</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={handleCtaClick}
              className="text-[11px] font-black uppercase tracking-wider bg-[#00FF41] text-[#050505] px-3.5 py-2 rounded-full sm:hidden shadow-[0_0_15px_rgba(0,255,65,0.3)] cursor-pointer"
            >
              R$ 5,90
            </button>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-white/70 hover:text-[#00FF41] hover:bg-white/5 border border-white/10 focus:outline-none"
              aria-label="Abrir menu de navegação"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 px-2 border-t border-white/10 space-y-2 bg-[#0A0A0A]">
            <a
              href="#como-funciona"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#00FF41] hover:bg-white/5"
            >
              Método
            </a>
            <a
              href="#simulador"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#00FF41] hover:bg-white/5"
            >
              Simulador IA ao Vivo
            </a>
            <a
              href="#modulos"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#00FF41] hover:bg-white/5"
            >
              Grade de Aulas
            </a>
            <a
              href="#publico-alvo"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#00FF41] hover:bg-white/5"
            >
              Para Quem É
            </a>
            <a
              href="#como-funciona-detalhes"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#00FF41] hover:bg-white/5"
            >
              Tudo Explicado às Claras
            </a>
            <a
              href="#faq"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider text-white/80 hover:text-[#00FF41] hover:bg-white/5"
            >
              Perguntas Frequentes
            </a>
            <div className="pt-2">
              <button
                type="button"
                onClick={handleCtaClick}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full text-xs font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white text-center shadow-[0_0_20px_rgba(0,255,65,0.4)] cursor-pointer"
              >
                <span>ACESSAR POR R$ 5,90</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
