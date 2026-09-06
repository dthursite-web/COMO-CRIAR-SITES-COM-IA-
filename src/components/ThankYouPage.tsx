import { useEffect } from 'react';
import { CheckCircle2, Mail, Sparkles, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';
import { trackGoogleConversion } from '../utils/analytics';

interface ThankYouPageProps {
  onBackToHome: () => void;
}

export default function ThankYouPage({ onBackToHome }: ThankYouPageProps) {
  useEffect(() => {
    // Fire Google Ads conversion snippet immediately upon rendering the conversion page
    trackGoogleConversion();
  }, []);

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] flex flex-col justify-center items-center px-4 py-16 selection:bg-[#00FF41] selection:text-[#050505]">
      {/* Background glow */}
      <div className="fixed top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[350px] bg-[#00FF41]/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-2xl w-full mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-[#00FF41]/10 border-2 border-[#00FF41] text-[#00FF41] flex items-center justify-center mx-auto mb-6 shadow-[0_0_35px_rgba(0,255,65,0.4)]">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#00FF41]/10 border border-[#00FF41]/30 text-[#00FF41] text-xs font-mono font-bold tracking-[0.2em] uppercase mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>INSCRIÇÃO CONFIRMADA COM SUCESSO</span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
          PARABÉNS! SEU ACESSO FOI <span className="text-[#00FF41]">LIBERADO</span>
        </h1>

        <p className="mt-4 text-white/70 text-sm sm:text-base leading-relaxed font-normal">
          Agradecemos sua compra! Os detalhes e as instruções de login foram enviados diretamente para o seu e-mail cadastrado na plataforma Cakto.
        </p>

        {/* Next Steps Box */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 text-left space-y-4">
          <h2 className="font-display text-sm sm:text-base font-black uppercase text-white tracking-wider flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00FF41]" />
            PRÓXIMOS PASSOS IMPORTANTES:
          </h2>

          <div className="space-y-3 font-mono text-xs sm:text-sm text-white/80">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <Mail className="w-5 h-5 text-[#00FF41] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">1. Verifique sua caixa de entrada</span>
                <span className="text-white/60 text-xs">
                  Procure por um e-mail com o remetente da Cakto com o assunto com seus dados de login e link da área de membros (confira também na pasta de spam ou lixo eletrônico).
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
              <ShieldCheck className="w-5 h-5 text-[#00FF41] shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-white block">2. Acesso Imediato e Vitalício</span>
                <span className="text-white/60 text-xs">
                  Você já pode começar a assistir aos módulos na sequência recomendada para criar seu primeiro site hoje mesmo.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={onBackToHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider text-[#050505] bg-[#00FF41] hover:bg-white transition-all shadow-[0_0_25px_rgba(0,255,65,0.3)]"
          >
            <span>VOLTAR À PÁGINA INICIAL</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://cakto.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white/80 bg-[#0A0A0A] hover:bg-white/10 border border-white/20 transition-colors"
          >
            <span>ÁREA DE MEMBROS CAKTO</span>
            <ExternalLink className="w-3.5 h-3.5 text-[#00FF41]" />
          </a>
        </div>
      </div>
    </div>
  );
}
