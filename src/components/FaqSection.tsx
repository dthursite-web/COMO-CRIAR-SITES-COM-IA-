import { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { FAQS } from '../constants';

interface FaqSectionProps {
  onOpenConfirmation?: () => void;
}

export default function FaqSection({ onOpenConfirmation }: FaqSectionProps) {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  const handleClick = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
  };

  return (
    <section id="faq" className="py-20 bg-[#050505] border-b border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em] mb-4">
            <HelpCircle className="w-3.5 h-3.5 text-[#00FF41]" />
            <span>PERGUNTAS FREQUENTES</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
            TIRE SUAS <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">DÚVIDAS</span>
          </h2>
          <p className="mt-4 text-white/70 text-sm sm:text-base">
            Se ainda tiver qualquer dúvida sobre o funcionamento do treinamento, confira as respostas abaixo:
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-white/10 bg-[#0A0A0A] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full text-left p-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-sm sm:text-base font-black uppercase tracking-tight text-white">
                    {faq.question}
                  </span>
                  <span className="p-2 rounded-full bg-white/10 text-white/70 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#00FF41]" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-white/70 leading-relaxed border-t border-white/10 bg-[#050505]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support note */}
        <div className="mt-12 text-center p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/15 shadow-xl">
          <p className="text-xs sm:text-sm text-white/70 font-mono">
            Ainda tem alguma dúvida específica? Aproveite a garantia incondicional de 7 dias para testar todo o conteúdo por dentro com 100% de segurança por apenas R$ 5,90.
          </p>
          <div className="mt-5">
            <button
              type="button"
              onClick={handleClick}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#00FF41] hover:bg-white text-[#050505] transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] cursor-pointer"
            >
              <span>ENTRAR NO TREINAMENTO POR R$ 5,90 SEM RISCOS</span>
              <span>→</span>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
