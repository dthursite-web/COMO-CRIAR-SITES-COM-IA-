import { ShieldCheck, ArrowRight } from 'lucide-react';

interface GuaranteeSectionProps {
  onOpenConfirmation?: () => void;
}

export default function GuaranteeSection({ onOpenConfirmation }: GuaranteeSectionProps) {
  const handleClick = () => {
    if (onOpenConfirmation) {
      onOpenConfirmation();
    } else {
      window.location.hash = '#confirmacao';
    }
  };

  return (
    <section className="py-16 bg-[#050505] border-b border-white/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-white/15 bg-[#0A0A0A] p-8 sm:p-12 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
          
          {/* Badge Icon */}
          <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-[#00FF41]/10 border-2 border-[#00FF41] flex flex-col items-center justify-center shrink-0 text-center p-3 shadow-[0_0_25px_rgba(0,255,65,0.2)]">
            <ShieldCheck className="w-10 h-10 sm:w-12 sm:h-12 text-[#00FF41] mb-1" />
            <span className="font-display font-black text-sm sm:text-base text-white uppercase leading-none">
              7 DIAS
            </span>
            <span className="text-[10px] font-mono text-[#00FF41] font-bold uppercase tracking-wider">
              GARANTIA
            </span>
          </div>

          {/* Text Content */}
          <div className="space-y-3 text-center md:text-left flex-1">
            <div className="inline-block px-3.5 py-0.5 rounded-full bg-[#00FF41]/10 text-[#00FF41] text-xs font-mono font-bold uppercase tracking-[0.2em]">
              COMPROMISSO INCONDICIONAL
            </div>
            <h3 className="font-display text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
              TESTE POR 7 DIAS <span className="text-transparent text-stroke-neon hover:text-[#00FF41] transition-colors">SEM RISCO</span>
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-mono">
              Você entra no treinamento, assiste às aulas e testa os prompts na prática. Se por qualquer razão, dentro do prazo legal de 7 dias, você considerar que o conteúdo não agregou valor, basta solicitar o estorno direto na plataforma Cakto ou nos enviar um e-mail para <strong className="text-[#00FF41]">dthursite@gmail.com</strong>.
              <strong className="text-white font-bold"> Devolvemos 100% dos seus R$ 5,90</strong>, sem perguntas chatas e sem qualquer burocracia.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleClick}
                className="inline-flex items-center gap-2 font-mono font-bold text-xs uppercase tracking-wider text-[#00FF41] hover:text-white transition-colors cursor-pointer"
              >
                <span>INSCREVA-SE COM TRANQUILIDADE E GARANTIA (R$ 5,90)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
